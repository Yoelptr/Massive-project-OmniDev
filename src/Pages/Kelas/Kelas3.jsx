import { React, useState } from "react";
import Navbar from "../../component/Navbar";
import { Footer } from "../../component/Footer";
import { AiFillDelete } from "react-icons/ai";
import { IoNotificationsSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import Userlist from "../../component/Userlist";

const Kelas = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [students, setStudents] = useState([
    { nama: "Budi Setiawan", id: "BS123", nomorID: "201" },
    { nama: "Dewi Lestari", id: "DL456", nomorID: "202" },
    { nama: "Cahya Pratama", id: "CP789", nomorID: "203" },
    { nama: "Siti Rahayu", id: "SR234", nomorID: "204" },
    { nama: "Adi Nugroho", id: "AN567", nomorID: "205" },
    { nama: "Linda Wijaya", id: "LW890", nomorID: "206" },
    { nama: "Hendra Susilo", id: "HS345", nomorID: "207" },
    { nama: "Rina Saputri", id: "RS678", nomorID: "208" },
    { nama: "Arif Cahyono", id: "AC901", nomorID: "209" },
    { nama: "Yulia Rahmawati", id: "YR123", nomorID: "2010" },
  ]);
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
              <div className="border-2 h-[320px] w-full border-black rounded-md  p-2 my-4 overflow-y-scroll no-scrollbar">
                <Userlist data={students} dataSearch={search} />
              </div>
              <div className="flex items-center justify-center">
                <div className="flex flex-col">
                  <form>
                    <input onChange={(e) => setSearch(e.target.value)} type="text" className=" w-[250px] rounded-xl p-2 text-center" placeholder="Nama atau id" />
                  </form>
                  <button onClick={() => navigate("/Kelas2")} className="text-white bg-black rounded-2xl p-2 m-4">
                    Selesai
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
