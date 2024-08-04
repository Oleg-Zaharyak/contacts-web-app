import { FC } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import CustomButton from "./customButton";
import CustomInput from "./customInput";
import { Formik } from "formik";
import * as Yup from "yup";
import { PiUserCircleLight } from "react-icons/pi";
import { useAddNewContactTagsMutation } from "../store/requestApi/contactsApi";
import { useLocation, useNavigate } from "react-router-dom";
import { Contact } from "../models/models";

type ContactInfoProps = {
  data: Contact;
};

const ContactInfo: FC<ContactInfoProps> = ({ data }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const email = data.fields.email[0].value;
  const firstName = data.fields["first name"][0].value;
  const lastName = data.fields["last name"][0].value;

  const validationSchema = Yup.object().shape({
    tagText: Yup.string().min(2, "Too Short!").max(40, "Too Long!"),
  });

  const [triggre] = useAddNewContactTagsMutation();

  return (
    <div className="w-[430px] flex flex-col gap-y-6 relative">
      <div className="flex gap-x-3">
        {data.avatar_url && data.avatar_url ? (
          <img
            src={data.avatar_url}
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
      </div>

      {data.tags && (
        <div className="flex flex-col gap-y-3 mb-4">
          <h1 className="font-medium">Tags</h1>
          <ul className="col-start-2 flex flex-wrap gap-2">
            {data.tags.map(
              (tagInfo: { id: string; tag: string }, index: number) => (
                <li
                  key={`${tagInfo.id} `}
                  className="px-3 text-[13px] font-medium rounded-[4px] bg-quick-silver"
                >
                  {tagInfo.tag}
                </li>
              )
            )}
          </ul>
        </div>
      )}
      <Formik
        initialValues={{ tagText: "" }}
        validationSchema={validationSchema}
        onSubmit={(values) =>
          triggre({
            id: location.state.id,
            tags: [...data.tags2].concat(
              values.tagText.replace(/ *, */, ",").split(",")
            ),
          })
        }
      >
        {({
          values: { tagText },
          touched,
          isValid,
          errors,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => {
          const tagErrorMessage = (touched.tagText && errors.tagText) || "";
          const disabledButton = !(isValid && !!tagText);
          return (
            <form className="flex flex-col gap-y-5" onSubmit={handleSubmit}>
              <CustomInput
                placeholder="Add new Tag"
                type="text"
                name="tagText"
                value={tagText}
                onChange={handleChange}
                onBlur={handleBlur}
                error={tagErrorMessage}
              />
              <CustomButton
                title="Add Tag"
                type="submit"
                disabled={disabledButton}
              />
            </form>
          );
        }}
      </Formik>
      <IoIosCloseCircleOutline
        onClick={() => navigate("/")}
        className="cursor-pointer absolute top-[10px] right-0 text-[22px]"
      />
    </div>
  );
};
export default ContactInfo;
