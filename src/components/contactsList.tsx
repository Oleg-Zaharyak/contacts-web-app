import { FC } from "react";
import { ContactCard } from "./contactCard";

export const ContactsList: FC = () => {
  return (
    <div className="w-[560px] flex flex-col pb-9 gap-y-2">
      <div className="text-xl font-medium">Contacts</div>
      <ul className="w-full flex flex-col gap-y-4">
        <ContactCard
          firstName="Pedro"
          lastName="Corahe"
          email="pedroCorahe@gmail.com"
        />
      </ul>
    </div>
  );
};
