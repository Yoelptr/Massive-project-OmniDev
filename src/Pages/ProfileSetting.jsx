// eslint-disable-next-line no-unused-vars
import React from "react";
import Navbar from "../component/Navbar";
const ProfileSeting = () => {
  return (
    <>
      <Navbar />
      <div>
        <div className="w-96 h-96 relative bg-white">
          <div className="w-96 h-96 left-[26px] top-[492px] absolute">
            <div className="w-96 h-96 left-0 top-0 absolute bg-blue-600 rounded-lg" />
            <div className="w-96 h-72 left-[60px] top-[109px] absolute">
              <div className="w-96 h-72 left-0 top-0 absolute bg-white" />
              <div className="w-52 h-6 left-[85px] top-[180.60px] absolute text-center">
                <span style="text-black text-base font-bold font-['Inter']">Choose a File </span>
                <span style="text-zinc-500 text-base font-bold font-['Inter']">or Drag it hare</span>
              </div>
              <div className="w-32 h-44 left-[125px] top-[17.79px] absolute">
                <div className="w-20 h-32 left-[21px] top-[24.63px] absolute"></div>
              </div>
            </div>
            <div className="w-96 h-96 left-[60px] top-[67px] absolute">
              <div className="left-[1001px] top-[34px] absolute">
                <span style="text-black text-xs font-normal font-['Inter']">
                  Syarat pas foto
                  <br />
                  1. Pas foto berwarna
                  <br />
                  2. Kualitas gambar jelas
                  <br />
                  3. Ukuran tidak lebih besar atau sama <br /> dengan 100 KB
                  <br />
                  4. Format *.jpg/*.jpeg
                  <br />
                  5. Ukuran 3:4
                  <br />
                </span>
                <span style="text-red-600 text-xs font-normal font-['Inter']">
                  *Sistem akan menolak jika foto tidak memenuhi
                  <br /> syarat di atas
                </span>
              </div>
              <div className="left-0 top-[22px] absolute text-center text-white text-base font-normal font-['Inter']">Foto (jpg/jpeg, (max. 100 KB) dengan ukuran 3:4</div>
              <div className="w-20 h-6 left-[125px] top-[332px] absolute">
                <div className="w-20 h-6 left-0 top-0 absolute bg-blue-300 rounded" />
                <div className="left-[28px] top-[7px] absolute text-center text-fuchsia-950 text-xs font-normal font-['Inter']">Hapus</div>
                <div className="w-3.5 h-3.5 left-[5.32px] top-[5.32px] absolute"></div>
              </div>
              <div className="w-20 h-6 left-[210px] top-[332px] absolute">
                <div className="w-20 h-6 left-0 top-0 absolute bg-sky-950 rounded" />
                <div className="left-[35px] top-[7px] absolute text-center text-white text-xs font-normal font-['Inter']">Unggah</div>
              </div>
              <div className="w-20 h-6 left-[295px] top-[332px] absolute">
                <div className="w-20 h-6 left-0 top-0 absolute bg-slate-600 rounded" />
                <div className="left-[22px] top-[7px] absolute text-center text-white text-xs font-normal font-['Inter']">Pilih Berkas...</div>
              </div>
              <div className="w-28 h-6 left-0 top-[332px] absolute">
                <div className="w-28 h-6 left-0 top-0 absolute bg-neutral-400 rounded" />
                <div className="left-[33px] top-[6px] absolute text-center text-black text-xs font-normal font-['Inter']">1 Berkas Dipilih</div>
              </div>
              <div className="w-40 h-5 left-[497px] top-0 absolute">
                <div className="left-[24px] top-[2px] absolute text-center text-black text-base font-bold font-['Inter']">Contoh Foto Profil</div>
              </div>
              <div className="w-96 h-64 left-[497px] top-[32px] absolute">
                <img className="w-60 h-64 left-0 top-0 absolute" src="https://via.placeholder.com/241x270" />
                <img className="w-60 h-64 left-[251px] top-0 absolute" src="https://via.placeholder.com/241x270" />
              </div>
            </div>
            <div className="w-80 h-8 left-[39px] top-[11px] absolute">
              <div className="w-44 h-8 left-[151px] top-0 absolute bg-indigo-300 rounded-2xl" />
              <div className="w-32 h-4 left-0 top-[7px] absolute">
                <div className="left-[20px] top-0 absolute text-center text-white text-base font-normal font-['Inter']">Biodata Pribadi</div>
                <div className="w-4 h-4 left-0 top-0 absolute">
                  <div className="w-3 h-3.5 left-[2px] top-[1.33px] absolute"></div>
                </div>
              </div>
            </div>
            <div className="w-28 h-5 left-[219px] top-[17px] absolute">
              <div className="left-[32px] top-0 absolute text-center text-white text-base font-normal font-['Inter']">Pengaturan</div>
              <div className="w-5 h-5 left-0 top-0 absolute"></div>
            </div>
          </div>
          <div className="left-[117px] top-[559px] absolute text-center text-black text-base font-bold font-['Inter']">Pengaturan Foto Profil</div>
          <div className="w-96 h-64 left-[26px] top-[198px] absolute">
            <div className="w-96 h-64 left-0 top-0 absolute bg-blue-600 rounded-2xl shadow" />
            <img className="w-48 h-48 left-[34px] top-[33px] absolute rounded-full" src="https://via.placeholder.com/198x198" />
            <div className="w-80 h-20 left-[254px] top-[78px] absolute">
              <div className="left-0 top-0 absolute text-center text-black text-2xl font-bold font-['Inter']">JOKOWI DODO</div>
              <div className="left-0 top-[44px] absolute text-center text-black text-base font-normal font-['Inter']">NIP. 199802290918839 12 </div>
              <div className="left-0 top-[69px] absolute text-center text-black text-base font-normal font-['Inter']">Pangkat : Pembina utama madya, golongan IV/d</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileSeting;
