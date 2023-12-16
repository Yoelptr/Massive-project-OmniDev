import React from "react";
import Navbar from "../component/Navbar";
import teacher from "../assets/Teacher1.png";
import Calender from "../assets/calendar.jpg";
import prepare from "../assets/prepare.jpg";
import study from "../assets/study.jpg";
import konseling from "../assets/konseling.jpg";
import { Footer } from "../component/Footer";

function Beranda() {
  return (
    <>
      <Navbar />
      <div className="">
        <section className="mx-auto max-w-[1240px] flex flex-col items-center justify-center py-10 md:h-[500px] ">
          <div className="grid grid-cols-1 items-center gap-1 md:grid-cols-2">
            <div className="mt-14  items-center">
              {" "}
              <img src={teacher} alt="No image" className=" mx-auto w-[350px] md:w-[450px] h-[350px] md:h-[450px] hover:drop-shadow-md" />
            </div>
            <div className="flex flex-col items-start text-left  md:items-start md:p-8 md:text-center">
              <h1 className="lg:text-5xl font-bold text-xl mx-auto md:text-3xl pb-4 text-[#1985EA]">Selamat datang di EduSmart!</h1>

              <p className="item-center text-center pb-4 text-[#325e87] ">
                Kami dengan bangga menyambut Anda di platform pendidikan terdepan yang dirancang untuk merangkul masa depan pendidikan. Edusmart didirikan dengan tujuan membawa
                revolusi dalam cara kita belajar dan mengajar, Menghadirkan inovasi, teknologi, dan kualitas pendidikan terbaik.
              </p>
              <button onClick={() => navigate("/Register")} className="border w-[250px] mx-auto my-5 py-2 bg-[#0B2640] text-white rounded-lg">
                Mulai
              </button>
            </div>
          </div>
        </section>
        <section className="flex flex-col items-center justify-center py-10 md:h-[500px] bg-[#1985EA]">
          <div className="grid grid-cols-1 items-center gap-1 md:grid-cols-2 max-w-[1240px] mx-auto  ">
            <div className="mx-auto">
              <h1 className="lg:text-4xl font-bold md:text-3xl pb-4 ">Cek Jadwal Mengajarmu Hari ini ?</h1>
              <button onClick={() => navigate("/Jadwal")} className="border-black item-center w-[250px] mx-auto my-5 py-2 bg-[#0B2640]  text-white rounded-lg">
                Mulai
              </button>
            </div>
            <div className="">
              <img src={Calender} alt="No image" className="rounded hover:drop-shadow-md w-[600px] md:w-full h-[400px] md:h-full" />
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1240px] flex flex-col items-center justify-center py-10 md:h-[500px] ">
          <div className="grid grid-cols-1 items-center gap-1 md:grid-cols-2">
            <div className="mt-14  items-center">
              {" "}
              <img src={prepare} alt="No image" className=" rounded hover:drop-shadow-md  w-[600px] md:w-full h-[400px] md:h-full" />
            </div>
            <div className="flex flex-col items-center md:items-start md:p-8 md:text-center">
              <h1 className="lg:text-4xl font-bold md:text-3xl pb-4 text-black">Daftar Kelas Yang Kamu ajar!</h1>

              <button onClick={() => navigate("/Register")} className="border w-[250px] my-5 py-2 bg-[#0B2640] text-white rounded-lg">
                Mulai
              </button>
            </div>
          </div>
        </section>

        <section className="flex flex-col items-center justify-center py-10 md:h-[500px] bg-[#1985EA]">
          <div className="grid grid-cols-1 items-center gap-1 md:grid-cols-2 max-w-[1240px] mx-auto  ">
            <div className="max-md:flex max-md:flex-col max-md:justify-center  ">
              <h1 className="lg:text-4xl text-center md:text-start font-bold md:text-3xl pb-4 ">Persiapkan Materi, Tugas dan Ujian untuk siswa</h1>
              <button onClick={() => navigate("/Jadwal")} className="border-black item-center w-[250px] mx-auto my-5 py-2 bg-[#0B2640]  text-white rounded-lg">
                Mulai
              </button>
            </div>
            <div className="">
              <img src={study} alt="No image" className="rounded hover:drop-shadow-md  w-[600px] md:w-full h-[400px] md:h-full" />
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1240px] flex flex-col items-center justify-center py-10 md:h-[500px] m-6">
          <div className="grid grid-cols-1 items-center gap-1 md:grid-cols-2">
            <div className="mt-14  items-center">
              {" "}
              <img src={konseling} alt="No image" className=" rounded hover:drop-shadow-md  w-[600px] md:w-full h-[400px] md:h-full" />
            </div>
            <div className="flex flex-col items-center  md:items-start md:p-8 md:text-center">
              <h1 className="lg:text-4xl font-bold md:text-3xl pb-4 text-black">Konseling Edukasi?</h1>

              <button onClick={() => navigate("/Register")} className="border w-[250px] my-5 py-2 bg-[#0B2640] text-white rounded-lg">
                Mulai
              </button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default Beranda;
