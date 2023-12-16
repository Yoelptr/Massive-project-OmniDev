import React from "react";
import Navbar from "../../component/Navbar";
import { Footer } from "../../component/Footer";
import { useNavigate } from "react-router-dom";
function Jadwal() {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <div className="">
        <section className="container mx-auto max-w-[1240px] bg-[#1985EA] rounded-lg flex flex-col items-center justify-top py-10 md:h-[500px]">
          <div className="px-10 py-10 ">
            <div>
              <div className="flex justify-between">
                <div className="">
                  <p className="text-[20px] font-bold text-white">Jadwal Mengajar</p>
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
              <div className="justify-center items-center">
                <table className=" bg-white m-10px rounded-lg">
                  <thead className="">
                    <tr className="border-[1px] border-black border-style-solid">
                      <th className="border-[1px] border-current border-style-solid">No</th>
                      <th className="p-2 border-[1px] border-current border-style-solid">Mata Pelajaran</th>
                      <th className="border-[1px] border-current border-style-solid">Jadwal</th>
                      <th>Presentasi</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className=" p-2 border-[1px] border-black border-style-solid text-center">1</td>
                      <td className="item-center items-center p-2 border-[1px] border-black border-style-solid align-center text-center">
                        <p className="">Fisika</p>
                      </td>
                      <td className=" p-2 border-[1px] border-black border-style-solid text-center">Senin, 13:00-14:40 Kelas 12 MIPA</td>
                      <td className="p-2 border-[1px] border-black border-style-solid text-center">
                        <button onClick={() => navigate("/Jadwal_2")} className="item-center w-auto mx-auto my-1 py-1 bg-[#0B2640]  text-white rounded-lg p-2 text-center">
                          Buka Presensi
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-2 border-[1px] border-black border-style-solid text-center">2</td>
                      <td className="item-center justify-center p-2 border-[1px] border-black border-style-solid text-center">Kimia</td>
                      <td className=" p-2 border-[1px] border-black border-style-solid text-center">Senin, 09:00-11:40 Kelas 11 MIPA</td>
                      <td className="p-2 border-[1px] border-black border-style-solid text-center">
                        <button onClick={() => navigate("")} className="item-center w-auto mx-auto my-1 py-1 bg-[#0B2640]  text-white rounded-lg p-2 text-center">
                          Buka Presensi
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td className=" p-2 border-[1px] border-black border-style-solid text-center">1</td>
                      <td className="item-center justify-center p-2 border-[1px] border-black border-style-solid text-center">Biologi</td>
                      <td className=" p-2 border-[1px] border-black border-style-solid text-center">Selasa, 09:00-11:40 Kelas 10 MIPA</td>
                      <td className="p-2 border-[1px] border-black border-style-solid">
                        <button onClick={() => navigate("")} className="item-center w-auto mx-auto my-1 py-1 bg-[#0B2640]  text-white rounded-lg p-2">
                          Buka Presensi
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
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
