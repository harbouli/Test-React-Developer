import React, { useState } from "react";
import clsx from "clsx";
import { GrFormClose } from "react-icons/gr";
import { BiCloudUpload } from "react-icons/bi";
import UploadFile from "../Upload/UploadFile";

type CardProps = {
  index?: number;
  remove?: any;
} & React.ComponentPropsWithRef<"button">;

const QuestionCard = React.forwardRef<HTMLDivElement, CardProps>(
  ({ children, className, remove, index, ...rest }, ref) => {
    return (
      <div
        ref={ref}
        className={clsx(
          "py-5 px-5  bg-gray-100 border border-gray-300 rounded-lg mt-2 flex flex-col gap-2",
          className
        )}
      >
        <div className="flex justify-between ">
          {/* Right */}
          <div>
            <div className="justify-between  flex ">
              <h6 className="text-lg text-gray-900 font-bold ">
                Question {index}
              </h6>
              <button onClick={remove}>
                <GrFormClose style={{ color: "#C7C7C7" }} size={18} />
              </button>
            </div>
            <div className="bg-white  py-3 px-5 w-[660px] rounded-lg font-semibold mt-3 text-gray-500 text-xs">
              <p>
                Dust-filter respirators may be used for continuous protection
                while silica sand is used as the blasting abrasive.
              </p>
            </div>
            <Ansower text="True" />
            <Ansower text="False" />
          </div>
          {/* Left */}
          <div>
            <div className="justify-between  flex mb-4">
              <h6 className="text-sm text-gray-700 font-semibold ">
                Question Image
              </h6>
              <p className="text-xs text-gray-400">Optional</p>
            </div>
            <UploadFile className="w-[330px]" />
          </div>
        </div>
      </div>
    );
  }
);

export default QuestionCard;

export const Ansower = ({ text }: { text: string }) => {
  const [checked, setChecked] = useState(false);

  const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
  };
  return (
    <div className="bg-white  py-3 px-5 w-[660px] rounded-lg font-semibold mt-3 items-center text-gray-500 text-xs flex justify-between">
      <p>{text}</p>
      <div className="flex gap-3">
        <label className="inline-flex items-center">
          <input
            type="checkbox"
            className="form-checkbox h-5 w-5  text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500"
            checked={checked}
            onChange={handleCheckbox}
          />
        </label>
        <button title="Uplaod image!">
          <BiCloudUpload size={24} />
        </button>
      </div>
    </div>
  );
};
