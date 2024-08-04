import { FC } from "react";
import ContactInfo from "../components/contactInfo";

const ContactInfoPage: FC = () => {
  const data = {
    avatar_url: "#",
    fields: {
      "first name": [{ value: "dsad" }],
      "last name": [{ value: "dasd" }],
      email: [{ value: "dsad@dasd.com" }],
    },
    tags2: ["dsada"],
    tags: [
      {
        id: "dsad",
        tag: "dsad",
      },
    ],
  };

  return (
    <div className="w-screen flex justify-center pt-9 px-8">
      <ContactInfo data={data} />
    </div>
  );
};

export default ContactInfoPage;
