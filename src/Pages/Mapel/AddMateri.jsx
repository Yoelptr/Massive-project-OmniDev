import React from "react";
import Navbar from "../../component/Navbar";
import Sidenav from "../../component/sidenav";
import { AiOutlineUpload } from "react-icons/ai";
import { FaFile, FaFolderOpen } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";

export default function AddMateri() {
  return (
    <>
      <Navbar />
      <div className="flex">
        <Sidenav />
        <div className="flex-1 p-4">
          <div className="grid grid-clos-1 sm:grid-cols-2 p-5 gap-4">
            <div className="ml-5 ">
              <form action="">
                <label htmlFor="Tautan" className="block text-md font-medium text-gray-900">
                  Tambahkan Tautan
                </label>
                <input type="text" name="Tautan" id="Tautan" className="p-2 bg-sky-100 border my-3 border-gray-900/25 h-9 w-full rounded-lg bg-opacity-75" />
                <label htmlFor="Tambahkan-Berkas" className="block text-md font-medium mb-2  text-gray-900">
                  Tambahkan Berkas
                </label>
                <div className="flex justify-center items-center rounded-lg border border-dashed border-gray-900/25 w-full h-[300px]">
                  <div className="flex-col flex justify-center items-center text-center">
                    <AiOutlineUpload size={60} />
                    <div className="mt-4 flex text-sm leading-6 text-gray-600">
                      <label htmlFor="file-upload" className="relative cursor-pointer text-indigo-500  hover:font-medium">
                        <span>Choose a file</span>
                        <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                  </div>
                </div>
              </form>
              <div className="flex">
                <div className="cursor-pointer bg-stone-200 w-fit h-7 rounded mr-3 mt-2 flex items-center ">
                  <FaFile className="mx-2" />
                  <p className="text-sm mr-2 ">1 Berkas Dipilih</p>
                </div>
                <div className="cursor-pointer bg-stone-200 w-fit h-7 rounded mr-2 mt-2 flex items-center ">
                  <AiFillDelete className="mx-2" />
                  <p className="text-sm mr-2">Hapus</p>
                </div>
                <div className="bg-stone-200 w-fit h-7 rounded mr-2 mt-2 flex items-center">
                  <label htmlFor="Pilih-berkas" className="flex items-center cursor-pointer">
                    <input id="Pilih-berkas" name="file-upload" type="file" className="sr-only" />
                    <FaFolderOpen className="mx-2" />
                    <p className="text-sm mr-2">Pilih Berkas</p>
                  </label>
                </div>
              </div>
            </div>
            <div>
              <form action="">
                <label htmlFor="Judul" className="block text-md font-medium   text-gray-900">
                  Judul
                </label>
                <input type="text" name="Judul" id="Judul" className="p-2 bg-sky-100 border my-3 border-gray-900/25 h-9 w-full rounded-lg bg-opacity-75" />
                <label htmlFor="deskripsi" className="block text-sm font-medium leading-6 text-gray-900">
                  Deskripsi
                </label>
                <div className="mt-2">
                  <textarea
                    id="deskripsi"
                    name="deskripsi"
                    rows={3}
                    className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-1 focus:ring-inset focus:ring-sky-300 sm:text-sm sm:leading-6"
                  />
                </div>
              </form>
            </div>
          </div>
          <div className="bg-gray-100 p-5">
            <div className="text-md font-medium b-2">Jadwal Ungahan</div>
            <div className="bg-sky-400 w-fit h-fit rounded p-2 text-white text-center">Selasa, 12 oktober 2023</div>
            <div className="flex justify-end items-end">
              <button type="submit" className="rounded-md bg-sky-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-sky-700">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
