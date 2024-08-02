import { ChangeEvent, FC, FocusEvent } from "react";

type InputsProps = {
  name?: string;
  value?: string;
  title?: string;
  type: string;
  placeholder?: string;
  onChange?(event?: ChangeEvent<HTMLInputElement>): void;
  onBlur?(event?: FocusEvent<HTMLDivElement>): void;
  error?: string;
};

const CustomInput: FC<InputsProps> = ({
  title,
  name,
  type,
  value,
  onChange,
  onBlur,
  placeholder,
  error,
}) => {
  return (
    <div className="flex flex-col gap-y-1.5 relative w-full mt-2.5 ">
      {title && (
        <label htmlFor={name} className="text-xs pl-1.5">
          {title}
        </label>
      )}
      <input
        type={type}
        id={name}
        className="text-sm text-regular-gray px-3.5 py-[13px] rounded-lg outline-none border border-light-gray transition duration-200 ease-in-out hover:border-regular-gray focus:border-regular-gray placeholder:text-light-gray"
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
      />
      {error && (
        <div className="absolute top-0 right-0 text-xs text-rose-500 pr-1.5">
          {error}
        </div>
      )}
    </div>
  );
};

export default CustomInput;
