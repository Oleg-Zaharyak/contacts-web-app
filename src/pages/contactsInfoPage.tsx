import { FC } from "react";
import CustomInput from "../components/customInput";
import CustomButton from "../components/customButton";
import { Formik } from "formik";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { PiUserCircleLight } from "react-icons/pi";
import * as Yup from "yup";

const ContactInfoPage: FC = () => {
  const data = {
    avatarUrl: "",
    firstName: "First Name",
    lastName: "Last Name",
    email: "email@gmail.com",
    tags: ["some 1", "some 2"],
  };

  const { firstName, lastName, email, avatarUrl, tags } = data;

  const validationSchema = Yup.object().shape({
    tagText: Yup.string().min(2, "Too Short!").max(30, "Too Long!"),
  });

  const navigate = useNavigate();
  return (
    <div className="w-screen flex justify-center pt-9 px-8">
      <div className="w-[430px] flex flex-col gap-y-6 relative">
        <div className="flex gap-x-3">
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
        </div>

        {tags && (
          <div className="flex flex-col gap-y-3 mb-4">
            <h1 className="font-medium">Tags</h1>
            <ul className="col-start-2 flex flex-nowrap gap-2">
              {tags.map((tagText: string, index: number) => (
                <li
                  key={`${tagText} ${index}`}
                  className="px-3 text-[13px] font-medium rounded-[4px] bg-quick-silver"
                >
                  {tagText}
                </li>
              ))}
            </ul>
          </div>
        )}
        <Formik
          initialValues={{ tagText: "" }}
          onSubmit={() => {}}
          validationSchema={validationSchema}
        >
          {({
            values: { tagText },
            touched,
            isValid,
            errors,
            handleChange,
            handleBlur,
          }) => {
            const tagErrorMessage = (touched.tagText && errors.tagText) || "";
            const disabledButton = !(isValid && !!tagText);
            return (
              <>
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
              </>
            );
          }}
        </Formik>

        <IoIosCloseCircleOutline
          onClick={() => navigate("/")}
          className="cursor-pointer absolute top-[10px] right-0 text-[22px]"
        />
      </div>
    </div>
  );
};

export default ContactInfoPage;
