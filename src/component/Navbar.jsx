import React from "react";
import LogoEs from "../assets/edusmart_logo1.png";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div>
      <div className="container flex justify-between items-center h-24  mx-auto px-4">
        <img className="h-24 w-24" src={LogoEs} />
        <ul className="flex">
          <li className="p-4">Beranda</li>
          <li className="p-4">Jadwal</li>
          <li className="p-4">Kelas</li>
          <li className="p-4">MaPel</li>
          <li className="p-4">Konsultasi</li>
        </ul>
        <div className="hidden min-[768px]:block">
          <button
            type="button"
            className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue focus:ring-offset-2 focus:ring-offset-gray-800"
            id="user-menu-button"
            aria-expanded="false"
            aria-haspopup="true"
          >
            <span className="absolute -inset-1.5"></span>
            <span className="sr-only">Open user menu</span>
            <img className="h-10 w-10 rounded-full" src="" alt="" />
          </button>
        </div>
        <div onClick={handleNav} className="block md:hidden">
          {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        <div className={!nav ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-100 ease-in-out duration-500 " : "fixed left-[-100%]"}>
          <ul className="pt-28 uppercase">
            <li className="p-4 border-b border-gray-100">Beranda</li>
            <li className="p-4 border-b border-gray-300">Jadwal</li>
            <li className="p-4 border-b border-gray-300">Kelas</li>
            <li className="p-4 border-b border-gray-300">Mata Pelajaran</li>
            <li className="p-4 border-b border-gray-300">Konsultasi</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
