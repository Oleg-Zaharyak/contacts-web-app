import { FC, MouseEvent } from "react";
import { TbFaceIdError } from "react-icons/tb";
import CustomButton from "./customButton";

type ErrorComponentProps = {
  button?: boolean;
  errorText?: string;
  buttonTitle?: string;
  onClickButton?(event?: MouseEvent<HTMLElement>): void;
};

const ErrorComponent: FC<ErrorComponentProps> = ({
  errorText = "Something went wrong ...",
  button,
  buttonTitle = "",
  onClickButton,
}) => {
  return (
    <div className="h-[250px] flex items-center justify-center flex-col gap-y-4 py-5 max-md:h-fit">
      <TbFaceIdError className="text-5xl text-rose-500" />
      <div className="text-lg font-medium text-rose-500">{errorText}</div>
      {button && (
        <CustomButton
          className="w-[320px]"
          title={buttonTitle}
          type="button"
          onClick={onClickButton}
        />
      )}
    </div>
  );
};

export default ErrorComponent;
