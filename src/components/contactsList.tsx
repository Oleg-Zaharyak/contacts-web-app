import { FC } from "react";
import { ContactCard } from "./contactCard";
import { useGetAllContactsQuery } from "../store/requestApi/contactsApi";
import ContactCardSkeleton from "./contactCardSkeleton";
import { TbFaceIdError } from "react-icons/tb";

export const ContactsList: FC = () => {
  const { data, isFetching, isSuccess, isError } = useGetAllContactsQuery();
  return (
    <div className="w-[560px] flex flex-col pb-9 gap-y-[30px]">
      <div className="text-xl font-medium">Contacts</div>
      {isFetching ? (
        <ContactCardSkeleton number={6} />
      ) : isSuccess ? (
        <ul className="w-full flex flex-col gap-y-4">
          {data.map((item: any) => (
            <ContactCard data={item} key={item.id} />
          ))}
        </ul>
      ) : isError ? (
        <div className="w-full h-[250px] flex items-center justify-center flex-col gap-y-4 py-5 text-rose-500">
          <TbFaceIdError className="text-5xl" />
          <div className="text-lg font-medium"> Something went wrong ...</div>
        </div>
      ) : null}
    </div>
  );
};
