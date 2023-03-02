import React from "react";
import clsx from "clsx";
import { BiTrashAlt } from "react-icons/bi";

type SelectProps = {
  title: string;
  Icon?: JSX.Element;
  label?: string;
  addOption?: boolean;
  options?: [title: string];
} & React.ComponentPropsWithRef<"button">;

const SelectRIconInput = React.forwardRef<HTMLButtonElement, SelectProps>(
  ({ title, Icon, options, className, label, addOption, ...rest }, ref) => {
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
          {title}
          <div className="flex gap-1">
            {Icon && Icon}
            <BiTrashAlt size={18} style={{ color: "#ED4C5C" }} />
          </div>
        </button>
        {/* Dropdown menu  */}
        <div
          id="dropdownBottom"
          className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg drop-shadow-sm border border-gray-200 w-72 "
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

export default SelectRIconInput;
