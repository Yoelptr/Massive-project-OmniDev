import LogoEs from "../assets/edusmart_logo1.png";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useState, React } from "react";
import { NavLink } from "react-router-dom";
const navigation = [
  { name: "Beranda", path: "/" },
  { name: "Jadwal", path: "/Jadwal" },
  { name: "Kelas", path: "/Kelas2" },
  { name: "Mata Pelajaran", path: "/Mata Pelajaran" },
  { name: "Konsultasi", path: "/Konsultasi" },
];

const Navbar = () => {
  const [nav, setNav] = useState(true);
  const [profile, setProfile] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };
  const handlePro = () => {
    setProfile(!profile);
  };

  return (
    <nav className="border-b">
      <div className="container max-w-[1240px] flex justify-between items-center h-24  mx-auto px-4 ">
        <img className="h-20 w-20 " src={LogoEs} />
        <ul className="flex">
          {navigation.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) => " rounded-md px-3 py-2 text-ms font-medium " + (isActive ? " bg-[#1985EA] text-white" : "text-black hover:text-gray-500")}
            >
              {item.name}
            </NavLink>
          ))}
        </ul>
        <div className="hidden min-[768px]:block">
          <button type="button" className="flex rounded-full bg-gray-800 text-sm  focus:ring-offset-2 focus:ring-offset-gray-800" onClick={handlePro}>
            <img className="h-10 w-10 rounded-full" src="" alt="Profile" />
          </button>
        </div>
        <div
          className={
            !profile
              ? "absolute right-10 top-16 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ease-in-out duration-300 "
              : "hidden"
          }
        >
          <div>
            <a href="" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200">
              Your Profile
            </a>
          </div>
          <div>
            <NavLink to="/Login" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200">
              LOG OUT
            </NavLink>
          </div>
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
    </nav>
  );
};

export default Navbar;
