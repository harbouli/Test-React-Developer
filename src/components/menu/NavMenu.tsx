import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

type Props = {};

const NavMenu = (props: Props) => {
  return (
    <div className=" flex items-center ">
      <ul className="flex w-80 justify-between ">
        <li>
          <a
            href="#"
            className="block font-semibold text-sm leading-3 text-gray-400 hover:text-blue-500"
          >
            Dashboard
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block font-semibold text-sm leading-3 text-gray-400 hover:text-blue-500"
          >
            Trainings
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block font-semibold text-sm leading-3 text-gray-400 hover:text-blue-500"
          >
            Users
          </a>
        </li>
        <li>
          <button
            id="dropdownNavbarLink"
            data-dropdown-toggle="dropdownNavbar"
            className="font-semibold text-sm leading-3 text-gray-400 hover:text-blue-500  flex items-center justify-between  "
          >
            More
            <MdKeyboardArrowDown />
          </button>
        </li>
      </ul>
    </div>
  );
};

export default NavMenu;
