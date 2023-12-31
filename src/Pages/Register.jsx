import React from "react";
import LogoEs from "../assets/edusmart_logo1.png";
import LogoEs2 from "../assets/edusmart_logo2.png";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  return (
    <div className="bg-[#1985EA]">
      <div className="grid grid-clos-1 sm:grid-cols-2 h-screen w-full ">
        <div className="flex flex-col justify-center bg-white md:rounded-r-3xl lg:rounded-r-3xl">
          <form action="" className="max-w-[350px] w-full mx-auto  py-3">
            <div className="flex justify-center py-1">
              <img className="h-35 w-35" src={LogoEs} />
            </div>
            <div className="flex flex-col py-2 leading-tight">
              <input className="border p-2 bg-sky-100 bg-opacity-75 rounded-lg" placeholder="Nama Lengkap" type="text" />
            </div>
            <div className="flex flex-col py-1">
              <input className="border p-2 bg-sky-100 bg-opacity-75 rounded-lg" placeholder="Nomer Handphone" type="number" />
            </div>
            <div className="flex flex-col py-2">
              <input className="border p-2 bg-sky-100 bg-opacity-75 rounded-lg" placeholder="Tanggal Lahir" type="date" />
            </div>
            <div className="flex flex-col py-2">
              <input className="border p-2 bg-sky-100 bg-opacity-75 rounded-lg" placeholder="Email" type="email" />
            </div>
            <div className="flex flex-col py-2">
              <input className="border p-2 bg-sky-100 bg-opacity-75 rounded-lg" placeholder="Password" type="password" />
            </div>
            <button onClick={() => navigate("/Login")} className="border w-full my-5 py-2 bg-[#1985EA] text-white rounded-lg">
              Log in
            </button>
            <p className="flex justify-center">
              Sudah Punya Akun?{" "}
              <a href="/Login" className="text-sky-500">
                {" "}
                Login
              </a>
            </p>
          </form>
        </div>
        <div className="hidden sm:block">
          <div className="inline-flex justify-center items-center h-full w-full">
            <img className="h-25 w-25 shrink-0" src={LogoEs2} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
