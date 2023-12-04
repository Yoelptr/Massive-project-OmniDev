import { Routes, Route } from "react-router-dom";
import Register from "../src/Pages/Register";
import Login from "../src/Pages/Login";
import Beranda from "./Pages/Beranda";
import Kelas from "./Pages/Kelas";
import Jadwal from "./Pages/jadwal";
import MaPel from "./Pages/MaPel";
import Konsultasi from "./Pages/Konsultasi";

import Navbar from "./component/Navbar";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" exact Component={Beranda}></Route>
        <Route path="/Jadwal" Component={Jadwal}></Route>
        <Route path="/Kelas" Component={Kelas}></Route>
        <Route path="/Mata Pelajaran" Component={MaPel}></Route>
        <Route path="/Konsultasi" Component={Konsultasi}></Route>
        <Route path="/Login" Component={Login}></Route>
        <Route path="/Register" Component={Register}></Route>
      </Routes>
    </div>
  );
}

export default App;
