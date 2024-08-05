import { FC, MouseEvent } from "react";
import { Contact } from "../models/models";
import { PiUserCircleLight } from "react-icons/pi";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useDeleteSelectedContactMutation } from "../store/requestApi/contactsApi";

type ContactCardProps = {
  data: Contact;
};

const ContactCard: FC<ContactCardProps> = ({ data }) => {
  const navigate = useNavigate();
  const [deleteContact] = useDeleteSelectedContactMutation();

  const email = data.fields?.email?.[0]?.value;
  const firstName = data.fields?.["first name"]?.[0]?.value || "";
  const lastName = data.fields?.["last name"]?.[0]?.value || "";

  const hundleDeleteClick = (event: MouseEvent<SVGAElement>): void => {
    event.stopPropagation();
    deleteContact(data.id);
  };

  return (
    <li
      onClick={() =>
        navigate(`/contacts/${data.id}`, { state: { id: data.id } })
      }
      className="cursor-pointer w-full relative pt-4 pl-4 pr-11 pb-6 bg-super-silver grid grid-cols-[max-content_1fr] grid-row-[max-content_1fr] gap-x-3 transition duration-200 ease-in-out hover:bg-nimbus-cloud"
    >
      {data.avatar_url && data.avatar_url ? (
        <img
          src={data.avatar_url}
          className="rounded-full w-[70px] h-[70px]"
          alt="user-avatar"
        />
      ) : (
        <PiUserCircleLight className="text-[70px]" />
      )}
      <div className="flex flex-col justify-center font-medium">
        <div>{`${firstName} ${lastName}`}</div>
        <div>{email}</div>
      </div>
      {data.tags2 && (
        <ul className="col-start-2 flex flex-wrap gap-2 mt-4">
          {data.tags2.map((tagText: string, index: number) => (
            <li
              key={`${tagText} ${index}`}
              className="px-3 text-[13px] font-medium rounded-[4px] bg-quick-silver"
            >
              {tagText}
            </li>
          ))}
        </ul>
      )}
      <IoIosCloseCircleOutline
        className="cursor-pointer absolute z-20 top-[10px] right-5 text-2xl transition duration-200 ease-in-out hover:scale-125  active:scale-50"
        onClick={hundleDeleteClick}
      />
    </li>
  );
};

export default ContactCard;
