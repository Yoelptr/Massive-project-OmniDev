import React from "react";
import Navbar from "../../component/Navbar";
const MaPel = () => {
  return (
    <>
      <Navbar />
      <section className="my-10">
        <div className="max-w-[1240px] mx-auto rounded-xl bg-[#1985EA] h-[600px] items-center justify-center">
          <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-2 ">
            <a href="/Materi">
              <div className="flex w-50 h-20 bg-white rounded-2xl shadow m-3 item-center justify-center">
                <div className="flex items-center">Fisika</div>
              </div>
            </a>
            <div className="flex w-50 h-20 bg-white rounded-2xl shadow m-3 item-center justify-center">
              <div className="flex items-center">Biologi</div>
            </div>
            <div className="flex w-50 h-20 bg-white rounded-2xl shadow m-3 item-center justify-center">
              <div className="flex items-center">Kimia</div>
            </div>
            <div className="flex w-50 h-20 bg-white rounded-2xl shadow m-3 item-center justify-center">
              <div className="flex items-center">Matematika</div>
            </div>
            <div className="flex w-50 h-20 bg-white rounded-2xl shadow m-3 item-center justify-center">
              <div className="flex items-center">Sosiologi </div>
            </div>
            <div className="flex w-50 h-20 bg-white rounded-2xl shadow m-3 item-center justify-center">
              <div className="flex items-center">Geografi</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MaPel;
