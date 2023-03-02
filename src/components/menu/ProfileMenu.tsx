import React from "react";
import ProfileImage from "../../assets/profile.png";
import { MdOutlineSettings } from "react-icons/md";
import { BiLogOut } from "react-icons/bi";
import PrivetPolicies from "../../assets/svg/PrivetPolicies";

type Props = {};

const ProfileMenu = (props: Props) => {
  return (
    <>
      <button
        id="dropdownInformationButton"
        data-dropdown-toggle="dropdownInformation"
        className=" flex gap-3 hover:bg-gray-50 px-4 rounded-xl h-10 items-center justify-center"
        type="button"
      >
        <img src={ProfileImage} alt="Profile" width="32" height="32" />
        <div className="flex items-start flex-col">
          <h6 className="text-sm font-semibold text-gray-500">Blaise Defloo</h6>
          <p className="text-xs font-medium text-gray-400">Administrator</p>
        </div>
      </button>
      {/* Dropdown menu  */}
      <div
        id="dropdownInformation"
        className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44"
      >
        <div className="z-10">
          <div className="px-4 py-3 text-sm text-gray-900 ">
            <h6 className="text-xs font-semibold">BESIX Group</h6>
            <div className="text-gray-400">besix.group@besix.be</div>
          </div>
          <ul
            className="py-2 text-sm text-gray-700 "
            aria-labelledby="dropdownInformationButton"
          >
            <li>
              <a
                href="#"
                className="flex items-center gap-1 px-4 py-2 hover:text-black text-gray-600"
              >
                <MdOutlineSettings style={{ color: "#797979" }} size={18} />
                Profile settings
              </a>
            </li>
            <li>
              <a
                href="#"
                className=" flex items-center gap-1  px-4 py-2 hover:text-black text-gray-600 "
              >
                <PrivetPolicies />
                Our policies
              </a>
            </li>
          </ul>
          <div className="py-2">
            <a
              href="#"
              className="flex items-center gap-1  px-4 py-2 hover:text-black text-gray-600 "
            >
              <BiLogOut size={18} />
              Log out
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileMenu;
