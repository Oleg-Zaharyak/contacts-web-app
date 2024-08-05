import { FC } from "react";
import CustomContactForm from "../components/createContactForm";
import { ContactsList } from "../components/contactsList";

const HomePage: FC = () => {
  return (
    <main className="w-screen flex justify-center relative gap-x-9 pt-9 px-8 max-md:flex-col max-md:items-center max-md:gap-y-8">
      <CustomContactForm title="Create Contact" />
      <ContactsList />
    </main>
  );
};

export default HomePage;
