import React from "react";

type Props = {};

const Textarea = (props: Props) => {
  return (
    <div className="flex flex-col">
      <label
        htmlFor="message"
        className="block mb-2 text-xs  text-gray-500 font-semibold"
      >
        Description
      </label>
      <textarea
        id="message"
        rows={4}
        cols={30}
        className="block p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300  "
        placeholder="Type here.."
      ></textarea>
    </div>
  );
};

export default Textarea;
