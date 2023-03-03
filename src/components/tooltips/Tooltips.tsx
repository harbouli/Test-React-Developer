import React from "react";

type Props = {};

const Tooltips = (props: Props) => {
  return (
    <div
      id="tooltip-light"
      role="tooltip"
      className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 tooltip"
    >
      Tooltip content
      <div className="tooltip-arrow" data-popper-arrow></div>
    </div>
  );
};

export default Tooltips;
