import React from "react";
import Edutag from "../assets/edutag.png";

export const Footer = () => {
  return (
    <div>
      <div className="flex justify-center item-center w-full mx-auto mt-16">
        <img src={Edutag} className="h-[150px] w-[300px]" alt="" />
      </div>
      <div>
        <div className="max-w-[1240px] mx-auto py-5 px-4 grid gap-8 text-gray-500">
          <div className="flex justify-between mt-6">
            <div>
              <h6 className="font-medium text-gray-800 pb-3">Tentang Kami :</h6>
              <ul>
                <li className="py-2 text-sm">Tim Pengajar</li>
                <li className="py-2 text-sm">Visi dan Misi</li>
              </ul>
            </div>
            <div>
              <h6 className="font-medium text-gray-800 pb-3">Informasi :</h6>
              <ul>
                <li className="py-2 text-sm">Syarat dan Ketentuan</li>
                <li className="py-2 text-sm">Kebijakan Privasi</li>
                <li className="py-2 text-sm">Hubungi Kami</li>
                <li className="py-2 text-sm">FAQ</li>
              </ul>
            </div>
            <div>
              <h6 className="font-medium text-gray-800 pb-3">Mata Pelajaran :</h6>
              <ul>
                <li className="py-2 text-sm">Matematika</li>
                <li className="py-2 text-sm">Bahasa Inggris</li>
                <li className="py-2 text-sm">Fisika</li>
                <li className="py-2 text-sm">Sejarah</li>
                <li className="py-2 text-sm">Kimia</li>
                <li className="py-2 text-sm">Sosiologi</li>
              </ul>
            </div>
            <div>
              <h6 className="font-medium text-gray-800 pb-3">Pusat Bantuan :</h6>
              <ul>
                <li className="py-2 text-sm">Pusat Bantuan</li>
                <li className="py-2 text-sm">Panduan Pengguna</li>
                <li className="py-2 text-sm">Laporan Masalah</li>
              </ul>
            </div>
            <div>
              <h6 className="font-medium text-gray-800 pb-3">Hak Cipta dan Lisensi :</h6>
              <ul>
                <li className="py-2 text-sm">Hak Cipta</li>
                <li className="py-2 text-sm">Kebijakan Lisensi</li>
                <li className="py-2 text-sm">Disclaimer</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center item-center w-full mt--2 py-3 text-white text-sm h-10 bg-[#0B2640]">2023. All rights reserved made by omnidev</div>
    </div>
  );
};
