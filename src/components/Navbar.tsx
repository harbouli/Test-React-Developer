import React from "react";
import LOGO from "../assets/logo.png";
import SearchInput from "./inputs/SearchInput";
import NavMenu from "./menu/NavMenu";
import { IoMdNotificationsOutline } from "react-icons/io";
import LanguegesMenu from "./menu/LanguegesMenu";
import ProfileMenu from "./menu/ProfileMenu";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav className="w-full h-[70px] drop-shadow-md bg-white flex justify-between items-center">
      {/* Navbar Container */}
      <div className="w-11/12 mx-auto flex justify-between">
        {/* Left Side */}
        <div className="flex">
          {/* Logo */}
          <a href="#" className="mr-12">
            <img src={LOGO} alt="Logo" />
          </a>

          {/* Search Input */}
          <div className="mr-8">
            <SearchInput />
          </div>
          {/* Menu List */}
          <NavMenu />
        </div>
        {/* End Left */}
        {/* Right Side */}
        <div className="flex items-center gap-5">
          {/* Notification Button */}
          <button id="dropdownNavbarLink" onClick={() => {}}>
            <IoMdNotificationsOutline style={{ color: "#A4A4A4" }} size={20} />
          </button>
          {/* Lang Button */}
          <LanguegesMenu />

          {/* Profile */}
          <ProfileMenu />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
