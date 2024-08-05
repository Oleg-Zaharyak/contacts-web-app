import { FC } from "react";

import { useLocation, useNavigate } from "react-router-dom";
import { useGetSelectedContactQuery } from "../store/requestApi/contactsApi";
import ContactDetails from "../components/contactDetails";
import ContactDetailsSkeleton from "../components/contactDetailsSkeleton";
import ErrorComponent from "../components/errorComponent";

const ContactInfoPage: FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { data, isFetching, isSuccess, isError } = useGetSelectedContactQuery(
    `${location.state.id}`
  );

  return (
    <div className="w-screen flex justify-center pt-9 px-8">
      {isFetching ? (
        <ContactDetailsSkeleton />
      ) : isSuccess ? (
        <ContactDetails data={data} />
      ) : isError ? (
        <ErrorComponent
          button
          buttonTitle="Returt to contacts list"
          onClickButton={() => navigate("/")}
        />
      ) : null}
    </div>
  );
};

export default ContactInfoPage;
