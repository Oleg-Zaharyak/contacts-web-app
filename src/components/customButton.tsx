import { FC, MouseEvent } from "react";

type InputsProps = {
  title: string;
  type: "submit" | "reset" | "button";
  disabled?: boolean;
  className?: string;
  onClick?(event?: MouseEvent<HTMLElement>): void;
};

const CustomButton: FC<InputsProps> = ({
  type,
  title,
  disabled,
  className,
  onClick,
}) => {
  return (
    <button
      className={`${className} w-full font-medium cursor-pointer py-[10px] transition duration-200 ease-in-out border border-ultimate-grey enabled:hover:bg-nimbus-cloud disabled:opacity-50`}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default CustomButton;
