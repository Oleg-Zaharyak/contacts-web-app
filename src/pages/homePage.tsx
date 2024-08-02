import { FC } from "react";
import CustomContactForm from "../components/createContactForm";

const HomePage: FC = () => {
  return (
    <div className="w-screen flex justify-center relative gap-x-9 pt-9 px-8 ">
      <CustomContactForm title="Create Contact" />
    </div>
  );
};

export default HomePage;
