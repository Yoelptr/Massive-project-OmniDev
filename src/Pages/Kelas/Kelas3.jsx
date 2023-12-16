import React from "react";
import Navbar from "../../component/Navbar";
import { Footer } from "../../component/Footer";
import { AiFillDelete } from "react-icons/ai";
import { IoNotificationsSharp } from "react-icons/io5";
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
          <div className="flex justify-center items-center border-b-4 border-black w-[350px]  mx-auto">
            <h2 className="text-3xl font-medium">12 Mipa</h2>
          </div>
          <div className="mx-3 pl-5">
            <h3 className="text-xl font-medium">Siswa Terdaftar</h3>
            <div className="grid items-center gap-2 md:grid-cols-2 overflow-hidden">
              <div className="border-2 h-60 border-black rounded-md w-fit p-2 my-4 overflow-y-scroll no-scrollbar">
                <div className="bg-white w-[550px] h-14 justify-between rounded-3xl shadow flex item-center my-5">
                  <div className="flex items-center">
                    <span className="flex ml-5 before:mr-2 items-center before:bg-gray-500 before:h-[18px] before:w-[2px] "> </span>
                    <span className="flex ml-4 text-xl font-medium">Yuda</span>
                  </div>
                  <div className="flex justify-center mx-2 my-auto">
                    <AiFillDelete className="flex mx-1 my-auto justify-center cursor-pointer" />
                  </div>
                </div>
                <div className="bg-white w-[550px] h-14 justify-between rounded-3xl shadow flex item-center my-5">
                  <div className="flex items-center">
                    <span className="flex ml-5 before:mr-2  items-center  before:bg-gray-500 before:h-[18px] before:w-[2px] "> </span>
                    <span className="flex ml-4 text-xl font-medium">Mita</span>
                  </div>
                  <div className="flex justify-center mx-2 my-auto">
                    <AiFillDelete className="flex mx-1 my-auto justify-center cursor-pointer" />
                  </div>
                </div>
                <div className="bg-white w-[550px] h-14 justify-between rounded-3xl shadow flex item-center my-5">
                  <div className="flex items-center">
                    <span className="flex ml-5 before:mr-2  items-center  before:bg-gray-500 before:h-[18px] before:w-[2px] "> </span>
                    <span className="flex ml-4 text-xl font-medium">Amanda</span>
                  </div>
                  <div className="flex justify-center mx-2 my-auto">
                    <AiFillDelete className="flex mx-1 my-auto justify-center cursor-pointer" />
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="flex flex-col">
                  <input type="text" className=" w-[250px] rounded-xl p-2 text-center" placeholder="Id Siswa" />
                  <button onClick={() => navigate("/Kelas4")} className="text-white bg-black rounded-2xl p-2 m-4">
                    {" "}
                    Tambah Siswa
                  </button>
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
