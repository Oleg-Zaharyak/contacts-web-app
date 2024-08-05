import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import ContactDetailsPage from "./pages/contactsDetailsPage";

export const App: FC = () => {
  return (
    <div className="font-poppins font-normal text-base">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contacts/:id" element={<ContactDetailsPage />} />
      </Routes>
    </div>
  );
};

export default App;
