import { FC } from "react";

import { useLocation, useNavigate } from "react-router-dom";
import { useGetSelectedContactQuery } from "../store/requestApi/contactsApi";
import ContactInfo from "../components/contactInfo";
import ContactInfoSkeleton from "../components/contactInfoSkeleton";
import { TbFaceIdError } from "react-icons/tb";
import CustomButton from "../components/customButton";

const ContactInfoPage: FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { data, isFetching, isSuccess, isError } = useGetSelectedContactQuery(
    `${location.state.id}`
  );

  return (
    <div className="w-screen flex justify-center pt-9 px-8">
      {isFetching ? (
        <ContactInfoSkeleton />
      ) : isSuccess ? (
        <ContactInfo data={data} />
      ) : isError ? (
        <div className="w-[300px] flex items-center flex-col gap-y-5 ">
          <TbFaceIdError className="text-5xl text-rose-500" />
          <div className="text-lg font-medium text-rose-500">
            Something went wrong ...
          </div>
          <CustomButton
            title="Returt to contacts list"
            type="button"
            onClick={() => navigate("/")}
          />
        </div>
      ) : null}
    </div>
  );
};

export default ContactInfoPage;
