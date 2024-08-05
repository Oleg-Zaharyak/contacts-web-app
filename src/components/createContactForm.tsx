import { Formik } from "formik";
import { FC } from "react";
import * as Yup from "yup";
import CustomInput from "./customInput";
import CustomButton from "./customButton";
import { useCreateNewContactMutation } from "../store/requestApi/contactsApi";

const CustomContactForm: FC<{ title?: string }> = ({ title }) => {
  const [createNewContact] = useCreateNewContactMutation();

  const capitalizeValue = (value: string) => {
    if (value) {
      return value[0].toUpperCase() + value.slice(1);
    } else {
      return "";
    }
  };

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().min(2, "Too Short!").max(20, "Too Long!"),
    lastName: Yup.string().min(2, "Too Short!").max(20, "Too Long!"),
    email: Yup.string()
      .trim()
      .matches(/^(?=[\w\.\-]+@[\w\.\-]+\.\w{2,4}).{5,70}$/, "Invalid email")
      .required("Required"),
  });

  return (
    <div className="sticky top-9 w-72 h-max z-10 max-md:static max-md:w-full max-md:px-6">
      <div className="text-xl font-medium mb-2">{title}</div>
      <Formik
        initialValues={{ firstName: "", lastName: "", email: "" }}
        validationSchema={validationSchema}
        onSubmit={(value, { resetForm }) => {
          const fields = {
            "first name": [{ label: "first name", value: value.firstName }],
            "last name": [{ label: "last name", value: value.lastName }],
            email: [{ label: "email", value: value.email }],
          };
          createNewContact(fields);
          resetForm();
        }}
      >
        {({
          values: { firstName, lastName, email },
          touched,
          errors,
          isValid,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => {
          const firstNameErrorMessage =
            (touched.firstName && errors.firstName) || "";
          const lastNameErrorMessage =
            (touched.lastName && errors.lastName) || "";
          const emailErrorMessage = (touched.email && errors.email) || "";
          const disabledButton = !(
            isValid &&
            !!email &&
            (!!firstName || !!lastName)
          );

          return (
            <form className="flex flex-col gap-y-1.5" onSubmit={handleSubmit}>
              <CustomInput
                title="First Name"
                name="firstName"
                type="text"
                value={capitalizeValue(firstName)}
                onChange={handleChange}
                onBlur={handleBlur}
                error={firstNameErrorMessage}
              />
              <CustomInput
                title="Last Name"
                name="lastName"
                type="text"
                value={capitalizeValue(lastName)}
                onChange={handleChange}
                onBlur={handleBlur}
                error={lastNameErrorMessage}
              />
              <CustomInput
                title="Email"
                name="email"
                type="email"
                value={email}
                onChange={handleChange}
                onBlur={handleBlur}
                error={emailErrorMessage}
              />
              <CustomButton
                className="mt-3.5"
                type="submit"
                title="Add Contact"
                disabled={disabledButton}
              />
            </form>
          );
        }}
      </Formik>
    </div>
  );
};

export default CustomContactForm;
