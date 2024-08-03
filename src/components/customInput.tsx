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
    <div className="flex flex-col w-full">
      {title && (
        <label htmlFor={name} className="text-xs pl-1.5 mb-1.5">
          {title}
        </label>
      )}
      <div className="relative w-full">
        <input
          type={type}
          id={name}
          className="w-full text-sm text-wood-charcoal px-3.5 py-[13px] rounded-lg outline-none border border-ultimate-grey transition duration-200 ease-in-out hover:border-wood-charcoal focus:border-wood-charcoal placeholder:text-ultimate-grey"
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          onBlur={onBlur}
        />
        {error && (
          <div className="absolute top-[-22px] right-0 text-xs text-rose-500 pr-1.5">
            {error}
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomInput;
