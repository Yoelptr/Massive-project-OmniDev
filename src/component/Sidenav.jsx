import React from "react";
import { NavLink } from "react-router-dom";
const Sidenav = () => {
  const SideNav = [
    { nama: "Materi", path: "/Materi" },
    { nama: "Tugas", path: "/Tugas" },
  ];
  return (
    <>
      <section className="flex">
        <div className="max-w-[1240px] w-[350px] h-screen rounded-xl bg-[#1985EA] py-5">
          <div className="flex flex-col items-center justify-center">
            <div className="m-5 mt-10 text-4xl font-medium font-serif">Fisika</div>
            <ul>
              {SideNav.map((smenu, idx) => (
                <NavLink
                  key={idx}
                  to={smenu.path}
                  className={({ isActive }) =>
                    "w-[250px] my-10 h-14 rounded-3xl bg-white flex justify-center items-center " + (isActive ? "bg-amber-300 font-bold" : "text-black hover:text-sky-300")
                  }
                >
                  <div className="">{smenu.nama}</div>
                </NavLink>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Sidenav;
