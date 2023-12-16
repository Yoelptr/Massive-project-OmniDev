import { Routes, Route } from "react-router-dom";
import Register from "../src/Pages/Register";
import Login from "../src/Pages/Login";
import Beranda from "./Pages/Beranda";
import Kelas2 from "./Pages/Kelas/Kelas2";
import Kelas3 from "./Pages/Kelas/Kelas3";
import Kelas4 from "./Pages/Kelas/Kelas4";
import TambahKelas from "./Pages/Kelas/TambahKelas";
import Jadwal from "./Pages/Jadwal/Jadwal";
import Jadwal_2 from "./Pages/Jadwal/Jadwal2";
import MaPel from "./Pages/Mapel/MaPel";
import Materi from "./Pages/Mapel/Materi";
import AddMateri from "./Pages/Mapel/AddMateri";
import Grafik from "./Pages/Mapel/Grafik";
import Tugas from "./Pages/Mapel/Tugas";
import Konsultasi from "./Pages/Konsultasi";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" exact Component={Beranda}></Route>
        <Route path="/Jadwal" Component={Jadwal}></Route>
        <Route path="/Jadwal_2" Component={Jadwal_2}></Route>
        <Route path="/Kelas2" Component={Kelas2}></Route>
        <Route path="/Kelas3" Component={Kelas3}></Route>
        <Route path="/Kelas4" Component={Kelas4}></Route>
        <Route path="/TambahKelas" Component={TambahKelas}></Route>
        <Route path="/Mata Pelajaran" Component={MaPel}></Route>
        <Route path="/Grafik" Component={Grafik}></Route>
        <Route path="/Materi" Component={Materi}></Route>
        <Route path="/AddMateri" Component={AddMateri}></Route>
        <Route path="/Konsultasi" Component={Konsultasi}></Route>
        <Route path="/Login" Component={Login}></Route>
        <Route path="/Register" Component={Register}></Route>
        <Route path="/Tugas" Component={Tugas}></Route>
      </Routes>
    </div>
  );
}

export default App;
