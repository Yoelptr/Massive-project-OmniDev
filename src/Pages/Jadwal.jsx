import React from "react";
import Navbar from "../component/Navbar";
import { Footer } from "../component/Footer";
import { AiOutlineSearch } from "react-icons/ai";
import { IoNotificationsSharp } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
const Kelas = () => {
  return (
    <>
      <Navbar />

      <section className="my-10">
        <div className="max-w-[1240px] mx-auto rounded-xl bg-[#1985EA] h-[600px] items-center justify-center">
          <div className="flex justify-between text-2xl font-medium p-5">
            <div className="text-2xl  ">
              <h3>Kelas Baru</h3>
            </div>
            <div>
              <IoNotificationsSharp size={30} />
            </div>
          </div>
          <form action="" className="w-full max-w-[350] h-fit flex flex-col items-center justify-center py-5 pt-10">
            <h4 className="mb-1">Nama Kelas</h4>
            <div className="relative flex items-center w-[400px]">
              <input
                type="text"
                name="search"
                placeholder="Search"
                autoComplete="off"
                aria-label="Search talk"
                className="w-full pr-3 pl-10 py-2 font-semibold placeholder-gray-500 
                text-black rounded-xl border-none ring-2 ring-gray-300 focus:ring-gray-500 focus:ring-"
              />
              <AiOutlineSearch className="absolute text-gray-500 ml-2" size={25} />
            </div>
            <button className="border-black w-[200px] mt-16 py-2 bg-[#0B2640] text-white rounded-xl">Tambah</button>
            <button className="border-black w-[200px] mt-5 py-2 bg-[#AE5643] text-white rounded-xl">Batalkan</button>
          </form>
        </div>
      </section>

      <section className="my-10">
        <div className="max-w-[1240px] mx-auto rounded-xl bg-[#1985EA] h-[600px] items-center justify-center">
          <div className="flex justify-between text-2xl font-medium p-5">
            <div className="text-2xl  ">
              <h3>Kelas Baru</h3>
            </div>
            <div>
              <IoNotificationsSharp size={30} />
            </div>
          </div>
          <form action="" className="w-full max-w-[350] h-fit flex items-center justify-center">
            <div className="relative flex items-center w-[400px] py-10">
              <input
                type="text"
                name="search"
                placeholder="Search"
                autoComplete="off"
                aria-label="Search talk"
                className="w-full pr-3 pl-10 py-2 h-8 font-semibold placeholder-gray-500 
                text-black rounded-xl border-none ring-2 ring-gray-300 focus:ring-gray-500 focus:ring-"
              />
              <AiOutlineSearch className="absolute text-gray-500 ml-2" size={25} />
            </div>
          </form>
          <div className="relative flex flex-col ml-10 my-5 ">
            <div className="bg-white w-[400px] h-10 rounded-3xl shadow flex item-center my-5">
              <span className="flex ml-5 before:mr-2  items-center before:absolute before:bg-gray-500 before:h-[18px] before:w-[2px] "> </span>
              <span className="flex  items-center ml-4 text-lg">12 Mipa</span>
              {/* <div className="flex item-center h-full justify-center ml-10">
                <FaUser className="" />
              </div> */}
            </div>
            <div className="bg-white w-[400px] h-10 rounded-3xl shadow flex item-center">
              <span className="flex ml-5 before:mr-2  items-center before:absolute before:bg-gray-500 before:h-[18px] before:w-[2px] "> </span>
              <span className="flex  items-center ml-4 text-lg">10 Mipa</span>
              {/* <div>
                <FaUser />
              </div> */}
            </div>
            <button className="border-black w-[200px] my-5 py-2 bg-[#0B2640] text-white rounded-xl">Tambah</button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Kelas;
