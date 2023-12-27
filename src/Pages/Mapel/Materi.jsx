import React from "react";
import Navbar from "../../component/Navbar";
import Sidenav from "../../component/Sidenav";
import { useNavigate } from "react-router-dom";
const Materi = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <section className="flex">
        <Sidenav />
        <div className="flex-1 p-4">
          <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-2 ">
            <a href="">
              <div className="flex w-55 h-20 bg-sky-500 rounded-2xl shadow m-3 item-center justify-center">
                <div className="flex items-center text-center">Vektor</div>
              </div>
            </a>
            <div className="flex w-50 h-20 bg-sky-500 rounded-2xl shadow m-3 item-center justify-center">
              <div className="flex items-center text-center">Kinematika</div>
            </div>
            <div className="flex w-50 h-20 bg-sky-500 rounded-2xl shadow m-3 item-center justify-center">
              <div className="flex items-center text-center">DINAMIKA GERAK PARTIKEL</div>
            </div>
            <div className="flex w-50 h-20 bg-sky-500 rounded-2xl shadow m-3 item-center justify-center">
              <div className="flex items-center text-center">FLUIDA</div>
            </div>
            <div className="flex w-50 h-20 bg-sky-500 rounded-2xl shadow m-3 item-center justify-center">
              <div className="flex items-center text-center">GELOMBANG, BUNYI dan CAHAYA </div>
            </div>
            <div className="flex w-50 h-20 bg-sky-500 rounded-2xl shadow m-3 item-center justify-center">
              <div className="flex items-center text-center">Kalor</div>
            </div>
          </div>
          <div className="flex justify-end items-end h-[500px] pr-6">
            <div>
              <button onClick={() => navigate("/AddMateri")} className="text-white w-[150px] h-14 bg-black rounded-2xl p-2 m-4 font-medium">
                Tambah Materi
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Materi;
