import { FC } from "react";
import { useGetAllContactsQuery } from "../store/requestApi/contactsApi";
import ContactCard from "./contactCard";
import ContactCardSkeleton from "./contactCardSkeleton";
import ErrorComponent from "./errorComponent";

export const ContactsList: FC = () => {
  const { data, isFetching, isSuccess, isError } = useGetAllContactsQuery();
  return (
    <div className="w-[560px] flex flex-col pb-9 gap-y-[30px] max-md:w-full ">
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
        <ErrorComponent />
      ) : null}
    </div>
  );
};
