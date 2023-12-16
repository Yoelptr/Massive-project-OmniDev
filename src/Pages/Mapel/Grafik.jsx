import React from "react";
import Navbar from "../../component/Navbar";
import Sidenav from "../../component/sidenav";
import BarChart from "../../component/BarChart";
// import { useState } from "react";

export default function Grafik() {
  return (
    <>
      <Navbar />
      <div className="flex">
        <Sidenav />
        <div className="flex-1 p-4">
          <h1 className="text-3xl font-medium mb-1 bg-sky-500 text-center w-full rounded h-fit">Vektor</h1>
          <div className="mb-1">
            <select name="sudentgrafik" id="sudentgrafik" className="border border-gray-300 w-[100px]">
              <option value="">Mita</option>
              <option value="">Yuda</option>
              <option value="">Bayu</option>
            </select>
          </div>
          <div className="w-full h-[300px]">
            <BarChart />
          </div>
          <div className="w-full p-3 mt-2 bg-sky-500">
            <div className="text-md font-medium">
              <h1>Nama : Mita</h1>
              <h1>Kelas : Mipa 12</h1>
              <div className="flex mt-1">
                {" "}
                <div className="w-12 h-12 mr-2  bg-gray-200 rounded flex justify-center items-center text-lg"> 1</div>
                <div className="w-12 h-12 mx-2  bg-red-500 rounded flex justify-center items-center text-lg"> 2</div>
                <div className="w-12 h-12 mx-2 bg-gray-200 rounded flex justify-center items-center text-lg"> 3</div>
                <div className="w-12 h-12 mx-2 bg-gray-200 rounded flex justify-center items-center text-lg"> 4</div>
              </div>
              <div className="flex mt-2 h">
                <textarea
                  id="deskripsi"
                  name="deskripsi"
                  rows={3}
                  className="block w-4/5 rounded-md border-1 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-400 focus:ring-1 focus:ring-inset focus:ring-sky-300 sm:text-sm sm:leading-6"
                />
                <div className="ml-1 w-1/5 h-[200px] flex justify-center items-center text-4xl bg-slate-100">90</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
