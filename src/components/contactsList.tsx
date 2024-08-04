import { FC } from "react";
import { ContactCard } from "./contactCard";
import { useGetAllContactsQuery } from "../store/requestApi/contactsApi";

export const ContactsList: FC = () => {
  const { data, isFetching, isSuccess, isError } = useGetAllContactsQuery();
  return (
    <div className="w-[560px] flex flex-col pb-9 gap-y-[22px]">
      <div className="text-xl font-medium">Contacts</div>
      {isFetching ? (
        <div>Loading ...</div>
      ) : isSuccess ? (
        <ul className="w-full flex flex-col gap-y-4">
          {data.map((item: any) => (
            <ContactCard data={item} key={item.id} />
          ))}
        </ul>
      ) : isError ? (
        <div>Somesing went wrong ...</div>
      ) : null}
    </div>
  );
};
