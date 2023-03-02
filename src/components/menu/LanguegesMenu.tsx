import React from "react";
import EnglishSVG from "../../assets/svg/english";
import FranceSVG from "../../assets/svg/france";
import GermanySVG from "../../assets/svg/germany";
import NederlandsSVG from "../../assets/svg/nederlands";
import SpainSVG from "../../assets/svg/spain";

type Props = {};

const LanguegesMenu = (props: Props) => {
  return (
    <>
      <button
        onClick={() => {}}
        id="dropdownDefaultButton"
        data-dropdown-toggle="dropdown"
        type="button"
      >
        <EnglishSVG />
      </button>
      <div
        id="dropdown"
        className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 "
      >
        <ul
          className="py-2 text-sm  text-gray-400"
          aria-labelledby="dropdownDefaultButton"
        >
          <li>
            <button className=" px-4 py-2  hover:text-black flex gap-3">
              <EnglishSVG />
              English (EN)
            </button>
          </li>
          <li>
            <button className=" px-4 py-2  hover:text-black flex gap-3">
              <FranceSVG />
              Français (FR)
            </button>
          </li>
          <li>
            <button className=" px-4 py-2  hover:text-black flex gap-3">
              <NederlandsSVG />
              Nederlands (NL)
            </button>
          </li>
          <li>
            <button className=" px-4 py-2  hover:text-black flex gap-3">
              <SpainSVG />
              Español (ES)
            </button>
          </li>
          <li>
            <button className=" px-4 py-2  hover:text-black flex gap-3">
              <GermanySVG />
              Deutsch (DE)
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default LanguegesMenu;
