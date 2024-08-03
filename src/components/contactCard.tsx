import { FC } from "react";
import { PiUserCircleLight } from "react-icons/pi";
import { IoIosCloseCircleOutline } from "react-icons/io";

type ContactCardProps = {
  firstName: string;
  lastName: string;
  email: string;
  tags?: string[];
  avatarUrl?: string;
};

export const ContactCard: FC<ContactCardProps> = ({
  tags,
  avatarUrl,
  firstName,
  lastName,
  email,
}) => {
  return (
    <li
      onClick={() => {}}
      className="cursor-pointer w-full relative pt-4 pl-4 pr-11 pb-6 bg-super-silver grid grid-cols-[max-content_1fr] grid-row-[max-content_1fr] gap-x-3 transition duration-200 ease-in-out hover:bg-nimbus-cloud"
    >
      {avatarUrl ? (
        <img
          src={avatarUrl}
          className="rounded-full w-[70px]"
          alt="user-avatar"
        />
      ) : (
        <PiUserCircleLight className="text-[70px]" />
      )}
      <div className="flex flex-col justify-center font-medium">
        <div>{`${firstName} ${lastName}`}</div>
        <div>{email}</div>
      </div>
      {tags && (
        <ul className="col-start-2 flex flex-nowrap gap-2 mt-4">
          {tags.map((tagText: string, index: number) => (
            <li
              key={`${tagText} ${index}`}
              className="px-3 text-[13px] font-medium rounded-[4px] bg-quick-silver"
            >
              {tagText}
            </li>
          ))}
        </ul>
      )}
      <IoIosCloseCircleOutline className="cursor-pointer absolute top-[10px] right-5 text-2xl" />
    </li>
  );
};
