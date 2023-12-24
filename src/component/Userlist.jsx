import { React } from "react";
import { AiFillDelete } from "react-icons/ai";
export default function Userlist({ data, handleDelete, dataSearch }) {
  return (
    <div>
      {data
        .filter((item) => {
          return dataSearch.toLowerCase() === "" ? item : item.nama.toLowerCase().includes(dataSearch) || item.nomorID.toLowerCase().includes(dataSearch);
        })
        .map((students) => {
          return (
            <div key={students.id} className="bg-white w-[550px] h-14 justify-between rounded-3xl shadow flex item-center my-5">
              <div className="flex items-center">
                <span className="flex ml-5 before:mr-2 items-center before:bg-gray-500 before:h-[18px] before:w-[2px] "> </span>
                <span className="flex ml-4 text-xl font-medium">{students.nama}</span>
              </div>
              <div className="flex justify-center mx-2 my-auto">
                <AiFillDelete onClick={() => handleDelete(students.id)} className="flex mx-1 my-auto justify-center cursor-pointer" />
              </div>
            </div>
          );
        })}
    </div>
  );
}
