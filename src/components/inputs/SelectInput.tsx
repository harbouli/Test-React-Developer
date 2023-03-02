import React from "react";
import clsx from "clsx";

type SelectProps = {
  title?: string;
  placeholder?: string;
  Icon?: JSX.Element;
  label?: string;
  addOption?: boolean;
  optionFlag?: boolean;
  options?: [title: string];
} & React.ComponentPropsWithRef<"button">;

const SelectInput = React.forwardRef<HTMLButtonElement, SelectProps>(
  (
    {
      title,
      Icon,
      options,
      placeholder,
      className,
      label,
      optionFlag,
      addOption,
      ...rest
    },
    ref
  ) => {
    return (
      <div className={clsx(className, "flex flex-col gap-2")}>
        <div className="flex justify-between">
          <p className="font-semibold text-gray-500 text-xs">{label}</p>
          {addOption && (
            <p className="font-semibold  text-xs">
              <a href="#" className="text-blue-500">
                Add new +
              </a>
            </p>
          )}
          {optionFlag && (
            <p className="">
              <a href="#" className="text-xs text-gray-300">
                Optional
              </a>
            </p>
          )}
        </div>
        <button
          {...rest}
          ref={ref}
          id="dropdownBottomButton"
          data-dropdown-toggle="dropdownBottom"
          data-dropdown-placement="bottom"
          className={clsx(
            "text-black bg-white  focus:ring-0 focus:outline-none focus:ring-gray-600  border border-gray-200 font-semibold rounded-lg text-sm px-4 py-2.5 text-center flex justify-between items-center ",
            className
          )}
          type="button"
        >
          <div className="flex gap-1">
            {Icon && Icon}
            {title}
            <p className="text-xs text-gray-500 italic">{placeholder}</p>
          </div>

          <svg
            className="w-4 h-4 ml-2"
            aria-hidden="true"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </button>
        {/* Dropdown menu  */}
        <div
          id="dropdownBottom"
          className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg drop-shadow-sm border border-gray-200 w-44 "
        >
          <ul
            className="py-2 text-sm text-black "
            aria-labelledby="dropdownDefault"
          >
            {options ? (
              options.map((op) => (
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100  ">
                    {op}
                  </a>
                </li>
              ))
            ) : (
              <p className="w-full text-center">No Value</p>
            )}
          </ul>
        </div>
      </div>
    );
  }
);

export default SelectInput;
