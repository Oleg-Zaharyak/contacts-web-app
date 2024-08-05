import { FC } from "react";

const ContactCardSkeleton: FC<{ number: number }> = ({ number }) => {
  const arr = Array.from({ length: number }, (_, i) => i + 1);

  return (
    <ul className="w-full flex flex-col gap-y-4">
      {arr.map((el: number, index: number) => (
        <li
          key={index}
          className="animate-pulse cursor-pointer w-full relative pt-4 pl-4 pr-11 pb-6 bg-super-silver grid grid-cols-[max-content_1fr] grid-row-[max-content_1fr] gap-x-3 "
        >
          <div className="rounded-[50%] w-[70px] h-[70px] bg-nimbus-cloud"></div>
          <div className="flex flex-col justify-center font-medium gap-y-2">
            <div className="bg-nimbus-cloud w-40 h-[18px] rounded-2xl"></div>
            <div className="bg-nimbus-cloud w-40 h-[18px] rounded-2xl"></div>
          </div>
          {el % 2 === 0 && (
            <ul className="col-start-2 flex flex-wrap gap-2 mt-4">
              {arr.map((el) => (
                <li
                  key={el}
                  className=" h-6 w-12 rounded-[4px] bg-nimbus-cloud"
                ></li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
};
export default ContactCardSkeleton;
