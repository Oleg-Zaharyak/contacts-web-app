import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";

export const App: FC = () => {
  return (
    <div className="font-poppins text-base">
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
};

export default App;
