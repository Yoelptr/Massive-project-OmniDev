import React from "react";
import Navbar from "../../component/Navbar";
import { Footer } from "../../component/Footer";
function Jadwal() {
  return (
    <>
      <Navbar />
      <div className="">
        <section className="container mx-auto max-w-[1240px] flex flex-col items-center justify-top py-10 md:h-[500px]">
          <div>
            <div className="px-10 py-10 bg-[#1985EA] rounded-[20px]">
              <div>
                <div className="flex justify-between">
                  <div className="">
                    <p className="text-[20px] font-bold text-white">Presensi</p>
                  </div>
                  <div className="">
                    <button>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <br />
                <div className="flex flex-col  justify-between item-center gap-2">
                  <div className="bg-white rounded-5 flex flex-row p-1 items-center justify-between">
                    <div>
                      <div className="text-[20px]">Mitha Khalia</div>
                    </div>
                    <div>
                      <button className="border-black bg-green-400 border w-auto m-2 p-2 text-black rounded-lg">Hadir</button>
                    </div>
                    <div>
                      <button className="border-black border w-auto m-2 p-2 text-black rounded-lg">Izin</button>
                    </div>
                    <div>
                      <button className="border-black border w-auto m-2 p-2 text-black rounded-lg">Sakit</button>
                    </div>
                    <div>
                      <button className="border-black border w-auto m-2 p-2 text-black rounded-lg">Tanpa Keterangan</button>
                    </div>
                  </div>
                  <div className=" bg-white rounded-5 flex flex-wrap p-1 items-center justify-between">
                    <div>
                      <div className="text-[20px]">Amanda</div>
                    </div>
                    <div className="flex justify-between">
                      <div>
                        <button className="border-black border w-auto m-2 p-2 text-black rounded-lg">Hadir</button>
                      </div>
                      <div>
                        <button className="border-black border w-auto m-2 p-2 text-black rounded-lg">Izin</button>
                      </div>
                      <div>
                        <button className="border-black border w-auto m-2 p-2 text-black rounded-lg">Sakit</button>
                      </div>
                      <div>
                        <button className="border-black border w-auto m-2 p-2 text-black rounded-lg">Tanpa Keterangan</button>
                      </div>
                    </div>
                  </div>
                  <div className=" bg-white rounded-5 flex flex-wrap p-1 items-center justify-between">
                    <div>
                      <div className="text-[20px]">John</div>
                    </div>
                    <div className="flex justify-between">
                      <div>
                        <button className="border-black border w-auto m-2 p-2 text-black rounded-lg">Hadir</button>
                      </div>
                      <div>
                        <button className="border-black border w-auto m-2 p-2 text-black rounded-lg">Izin</button>
                      </div>
                      <div>
                        <button className="border-black border w-auto m-2 p-2 text-black rounded-lg">Sakit</button>
                      </div>
                      <div>
                        <button className="border-black border w-auto m-2 p-2 text-black rounded-lg">Tanpa Keterangan</button>
                      </div>
                    </div>
                  </div>
                  <div className=" bg-white rounded-5 flex flex-wrap p-1 items-center justify-between">
                    <div>
                      <div className="text-[20px]">Yoel</div>
                    </div>
                    <div className="flex justify-between">
                      <div>
                        <button className="border-black border w-auto m-2 p-2 text-black rounded-lg">Hadir</button>
                      </div>
                      <div>
                        <button className="border-black border w-auto m-2 p-2 text-black rounded-lg">Izin</button>
                      </div>
                      <div>
                        <button className="border-black border w-auto m-2 p-2 text-black rounded-lg">Sakit</button>
                      </div>
                      <div>
                        <button className="border-black border w-auto m-2 p-2 text-black rounded-lg">Tanpa Keterangan</button>
                      </div>
                    </div>
                  </div>
                  <div className=" bg-white rounded-5 flex flex-wrap p-1 items-center justify-between">
                    <div>
                      <div className="text-[20px]">Hasan</div>
                    </div>
                    <div className="flex justify-between">
                      <div>
                        <button className="border-black border w-auto m-2 p-2 text-black rounded-lg">Hadir</button>
                      </div>
                      <div>
                        <button className="border-black border w-auto m-2 p-2 text-black rounded-lg">Izin</button>
                      </div>
                      <div>
                        <button className="border-black border w-auto m-2 p-2 text-black rounded-lg">Sakit</button>
                      </div>
                      <div>
                        <button className="border-black border w-auto m-2 p-2 text-black rounded-lg">Tanpa Keterangan</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default Jadwal;
