import React from "react";
import Navbar from "../../component/Navbar";
import { Footer } from "../../component/Footer";
import { AiOutlineSearch, AiFillDelete } from "react-icons/ai";
import { IoNotificationsSharp } from "react-icons/io5";
import { FaUser, FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const Kelas = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />

      <section className="my-10">
        <div className="max-w-[1240px] mx-auto rounded-xl bg-[#1985EA] h-[600px] items-center justify-center">
          <div className="flex justify-between text-2xl font-medium p-5">
            <div className="text-2xl  ">
              <h3>Kelas</h3>
            </div>
            <div>
              <IoNotificationsSharp size={30} />
            </div>
          </div>
          <div className="grid grid-clos-1 sm:grid-cols-2 mt-10 ">
            <div className="flex flex-col justify-center items-center ml-10 mb-5 ">
              <div onClick={() => navigate("/Kelas3")} className="bg-white w-[400px] h-10 justify-between rounded-3xl shadow flex item-center mb-2 cursor-pointer">
                <div className="flex items-center">
                  <span className="flex ml-5 before:mr-2  items-center before:absolute before:bg-gray-500 before:h-[18px] before:w-[2px] "> </span>
                  <span className="flex ml-4 text-lg">12 Mipa</span>
                </div>
                <div className="flex justify-center mx-2 my-auto">
                  <FaUser className="flex mx-1 my-auto justify-center" />
                  <h4 className="text-sm">20</h4>
                </div>
              </div>
              <div className="bg-white w-[400px] h-10 justify-between rounded-3xl shadow flex item-center mb-2">
                <div className="flex items-center">
                  <span className="flex ml-5 before:mr-2  items-center before:absolute before:bg-gray-500 before:h-[18px] before:w-[2px] "> </span>
                  <span className="flex ml-4 text-lg">10 Mipa</span>
                </div>
                <div className="flex justify-center mx-2 my-auto">
                  <FaUser className="flex mx-1 my-auto justify-center" />
                  <h4 className="text-sm">16</h4>
                </div>
              </div>
              <div>
                <button onClick={() => navigate("/Kelas2")} className="border-black w-[200px] my-5 py-2 mr-3  bg-[#0B2640] text-white rounded-xl">
                  Selesai
                </button>
              </div>
            </div>
            <div className="w-[360px] h-fit flex flex-col items-center justify-center bg-white mx-auto rounded-xl p-1">
              <div className="">Kelas Baru</div>
              <div className="bg-gray-200 w-[350px] h-10 justify-between rounded-3xl shadow flex item-center my-5 ">
                <div className="flex items-center">
                  <span className="flex ml-5 before:mr-2  items-center before:absolute before:bg-gray-500 before:h-[18px] before:w-[2px] "> </span>
                  <span className="flex ml-4 text-lg">11 Mipa</span>
                </div>
                <div className="flex justify-center mx-2 my-auto">
                  <FaPlus className="flex mx-1 my-auto justify-center cursor-pointer" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Kelas;
