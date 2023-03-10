import React from "react";
import clsx from "clsx";

type Props = React.ComponentPropsWithRef<"button">;

const UploadFile = ({ className }: Props) => {
  return (
    <div>
      <div className="flex items-center justify-center w-full h-full">
        <label
          htmlFor="dropzone-file"
          className={clsx(
            "flex flex-col items-center justify-center  border-2 border-gray-300 border-dashed rounded-lg cursor-pointer ",
            className
          )}
        >
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <svg
              aria-hidden="true"
              className="w-10 h-10 mb-3 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinecap="round"
                strokeWidth="2"
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
              ></path>
            </svg>
            <p className="mb-2 text-xs text-gray-500 ">
              Drag and drop your image here
            </p>
            <p className="text-xs text-gray-500 ">
              Or <span className="text-blue-500">browse files</span>
            </p>
          </div>
          <input id="dropzone-file" type="file" className="hidden" />
        </label>
      </div>
    </div>
  );
};

export default UploadFile;
