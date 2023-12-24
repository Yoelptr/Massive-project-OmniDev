import React from "react";
import { Routes, Route } from "react-router-dom";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import Beranda from "../Pages/Beranda";
import Kelas2 from "../Pages/Kelas/Kelas2";
import Kelas3 from "../Pages/Kelas/Kelas3";
import Kelas4 from "../Pages/Kelas/Kelas4";
import TambahKelas from "../Pages/Kelas/TambahKelas";
import Jadwal from "../Pages/Jadwal/Jadwal";
import Jadwal_2 from "../Pages/Jadwal/Absensi";
import MaPel from "../Pages/Mapel/MaPel";
import Materi from "../Pages/Mapel/Materi";
import AddMateri from "../Pages/Mapel/AddMateri";
import Grafik from "../Pages/Mapel/Grafik";
import Tugas from "../Pages/Mapel/Tugas";
import Konsultasi from "../Pages/Konsultasi";
import Absensi from "../Pages/Jadwal/Absensi";
import Absensi2 from "../Pages/Jadwal/Absensi2";

export default function Routing() {
  return (
    <div>
      <Routes>
        <Route path="/" exact Component={Beranda} />
        <Route path="Jadwal" element={<Jadwal />}>
          <Route path="absensi" element={<Absensi />} />
          <Route path="absensi2" element={<Absensi2 />} />
        </Route>
        <Route path="/Kelas2" Component={Kelas2} />
        <Route path="/Kelas3" Component={Kelas3} />
        <Route path="/Kelas4" Component={Kelas4} />
        <Route path="/TambahKelas" Component={TambahKelas} />
        <Route path="/Mata Pelajaran" Component={MaPel} />
        <Route path="/Grafik" Component={Grafik} />
        <Route path="/Materi" Component={Materi} />
        <Route path="/AddMateri" Component={AddMateri} />
        <Route path="/Konsultasi" Component={Konsultasi} />
        <Route path="/Login" Component={Login} />
        <Route path="/Register" Component={Register} />
        <Route path="/Tugas" Component={Tugas} />
      </Routes>
    </div>
  );
}
