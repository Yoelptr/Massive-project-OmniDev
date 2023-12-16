import React from "react";
import Navbar from "../component/Navbar";
import { Footer } from "../component/Footer";
import { FaUser } from "react-icons/fa";

function Konsultasi() {
  const handleWhatsAppClick = () => {
    const phoneNumber = "6282264320919";
    const message = "Halo, saya tertarik Untuk Berkonsultasi";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col justify-center items-center">
        <div className="text-4xl font-medium m-10">Konsultasi?</div>
        <div className="flex my-10 justify-center items-center rounded-full w-32 h-32 bg-gray-300">
          <FaUser size={70} />
        </div>
        <button onClick={handleWhatsAppClick} className=" bg-green-500 text-black w-[150px] h-14 rounded-2xl p-2 m-4 font-medium">
          Lanjut chat
        </button>
      </div>
      <Footer />
    </>
  );
}

export default Konsultasi;
