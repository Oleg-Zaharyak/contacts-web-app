import { Formik } from "formik";
import { FC } from "react";
import * as Yup from "yup";
import CustomInput from "./customInput";
import CustomButton from "./customButton";

type FormProps = {
  title?: string;
};

const CustomContactForm: FC<FormProps> = ({ title }) => {
  const validationSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, "Too Short!")
      .max(20, "Too Long!")
      .required("Required"),
    email: Yup.string()
      .trim()
      .matches(/^(?=[\w\.\-]+@[\w\.\-]+\.\w{2,4}).{5,70}$/, "Invalid email")
      .required("Required"),
  });

  return (
    <div className="sticky top-9 w-72 h-max">
      <div className="text-xl font-medium">{title}</div>
      <Formik
        initialValues={{ firstName: "", lastName: "", email: "" }}
        validationSchema={validationSchema}
        onSubmit={() => {}}
      >
        {({
          values: { firstName, lastName, email },
          touched,
          errors,
          isValid,
          handleChange,
          handleBlur,
        }) => {
          const firstNameErrorMessage =
            (touched.firstName && errors.firstName) || "";
          const emailErrorMessage = (touched.email && errors.email) || "";
          const disabledButton = !(isValid && !!email && !!firstName);

          return (
            <form className="flex flex-col" onSubmit={() => {}}>
              <CustomInput
                title="First Name"
                name="firstName"
                type="text"
                value={firstName}
                onChange={handleChange}
                onBlur={handleBlur}
                error={firstNameErrorMessage}
              />
              <CustomInput
                title="Last Name"
                name="lastName"
                type="text"
                value={lastName}
                onChange={handleChange}
                onBlur={handleBlur}
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
