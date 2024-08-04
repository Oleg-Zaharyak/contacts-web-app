import { FC } from "react";
import CustomButton from "./customButton";
import CustomInput from "./customInput";

const ContactInfoSkeleton: FC = () => {
  return (
    <div className="w-[430px] flex flex-col gap-y-6 relative animate-pulse">
      <div className="flex gap-x-3">
        <div className="rounded-[50%] w-[70px] h-[70px] bg-nimbus-cloud"></div>
        <div className="flex flex-col justify-center font-medium gap-y-2">
          <div className="bg-nimbus-cloud w-40 h-[18px] rounded-2xl"></div>
          <div className="bg-nimbus-cloud w-40 h-[18px] rounded-2xl"></div>
        </div>
      </div>
      <div className="flex flex-col gap-y-3 mb-4">
        <h1 className="font-medium">Tags</h1>
        <ul className="col-start-2 flex flex-wrap gap-2">
          <li className=" h-6 w-14 rounded-[4px] bg-nimbus-cloud"></li>
          <li className=" h-6 w-20 rounded-[4px] bg-nimbus-cloud"></li>
          <li className=" h-6 w-14 rounded-[4px] bg-nimbus-cloud"></li>
          <li className=" h-6 w-24 rounded-[4px] bg-nimbus-cloud"></li>
          <li className=" h-6 w-14 rounded-[4px] bg-nimbus-cloud"></li>
        </ul>
      </div>
      <div className="flex flex-col gap-y-5">
        <CustomInput
          placeholder="Add new Tag"
          type="text"
          name="tagText"
          disabled={true}
        />
        <div> </div>
        <CustomButton title="Add Tag" type="submit" disabled={true} />
      </div>
    </div>
  );
};
export default ContactInfoSkeleton;
