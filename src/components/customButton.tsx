import { FC, MouseEvent } from "react";

type InputsProps = {
  title: string;
  type: "submit" | "reset" | "button";
  disabled?: boolean;
  onClick?(event?: MouseEvent<HTMLElement>): void;
};

const CustomButton: FC<InputsProps> = ({ type, title, disabled }) => {
  return (
    <button
      className="w-full cursor-pointer mt-5 py-[10px] transition duration-200 ease-in-out border border-light-gray enabled:hover:bg-[#c8c8c8] disabled:opacity-50"
      type={type}
      disabled={disabled}
    >
      {title}
    </button>
  );
};

export default CustomButton;
