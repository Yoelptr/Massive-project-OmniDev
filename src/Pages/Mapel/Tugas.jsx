import React from "react";
import Navbar from "../../component/Navbar";
import Sidenav from "../../component/sidenav";
import { FaEdit } from "react-icons/fa";
import StatisticsIcon from "../../assets/stats.png";
import { useNavigate } from "react-router-dom";
const Tugas = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <section className="flex">
        <Sidenav />
        <div className="flex-1 p-4">
          <div className="felx-col ">
            <div className="flex my-3">
              <div className="flex justify-center items-center bg-sky-500 w-[500px] md:w-[600px] lg:w-full h-10 rounded-lg"> VEKTOR</div>
              <div className="bg-sky-500 p-1 rounded-lg w-9 h-9 flex justify-center items-center ml-1">
                <FaEdit size={30} />
              </div>
              <div onClick={() => navigate("/Grafik")} className="cursor-pointer flex justify-center w-9 h-9 bg-sky-500 rounded-lg ml-1 items-center">
                <img src={StatisticsIcon} className="w-6 h-6" alt="" />
              </div>
            </div>
            <div className="flex my-3">
              <div className="flex justify-center items-center bg-sky-500 w-[500px] md:w-[600px] lg:w-full h-10 rounded-lg"> FLUIDA</div>
              <div className="bg-sky-500 p-1 rounded-lg w-fit h-fit flex justify-center items-center ml-1">
                <FaEdit size={30} />
              </div>
              <div onClick={() => navigate("/Grafik")} className=" cursor-pointer flex justify-center w-9 h-9 bg-sky-500 rounded-lg ml-1 items-center">
                <img src={StatisticsIcon} className="w-6 h-6" alt="" />
              </div>
            </div>
            <div className="flex my-3">
              <div className="flex justify-center items-center bg-sky-500 w-[500px] md:w-[600px] lg:w-full h-10 rounded-lg"> TERMODINAMIKA</div>
              <div className="bg-sky-500 p-1 rounded-lg w-fit h-fit flex justify-center items-center ml-1">
                <FaEdit size={30} />
              </div>
              <div className=" flex justify-center w-9 h-9 bg-sky-500 rounded-lg ml-1 items-center">
                <img src={StatisticsIcon} className="w-6 h-6" alt="" />
              </div>
            </div>
          </div>
          <div className="flex justify-end items-end h-[500px] pr-6">
            <div>
              <button onClick={() => navigate("")} className="text-white w-[150px] h-14 bg-black rounded-2xl p-2 m-4 font-medium">
                Tambah Tugas
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Tugas;
