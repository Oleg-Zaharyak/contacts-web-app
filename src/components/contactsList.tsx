import { FC } from "react";
import { ContactCard } from "./contactCard";
import { useNavigate } from "react-router-dom";

export const ContactsList: FC = () => {
  const navigate = useNavigate();

  return (
    <div className="w-[560px] flex flex-col pb-9 gap-y-2">
      <div className="text-xl font-medium">Contacts</div>
      <ul className="w-full flex flex-col gap-y-4">
        <ContactCard
          firstName="First name"
          lastName="Last name"
          email="email@gmail.com"
          onClick={() => navigate("/contacts")}
        />
      </ul>
    </div>
  );
};
