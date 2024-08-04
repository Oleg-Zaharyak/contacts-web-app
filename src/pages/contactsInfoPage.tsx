import { FC } from "react";

import { useLocation } from "react-router-dom";
import { useGetSelectedContactQuery } from "../store/requestApi/contactsApi";
import ContactInfo from "../components/contactInfo";

const ContactInfoPage: FC = () => {
  const location = useLocation();
  const { data, isFetching, isSuccess, isError } = useGetSelectedContactQuery(
    `${location.state.id}`
  );

  return (
    <div className="w-screen flex justify-center pt-9 px-8">
      {isFetching ? (
        <div>Loading ...</div>
      ) : isSuccess ? (
        <ContactInfo data={data} />
      ) : isError ? (
        <div>Something went wrong ...</div>
      ) : null}
    </div>
  );
};

export default ContactInfoPage;
