import React from "react";
import { useNavigate } from "react-router-dom";
import { request } from "../request";
import { loadState } from "../library/storage";

export const Aside = () => {
  const navigate = useNavigate()
  const edit = () => {
    navigate("/app/edit");
  };
  const create = () => {
    navigate("/app/create");
  };

  // request.get(`/users`).then((res) => {
  //   console.log(res.data);
  // })

  const mainUser = loadState("token")
  console.log(mainUser.user.firstname);
  return (
    <div className="w-[25%]">
      <div className=" border  h-[100vh] bg-blue-800 flex items-center justify-center">
        <div className="flex flex-col items-center">
          <button className="border border-black w-full px-10 py-3 my-2">
            Asosiy
          </button>
          <button
            onClick={edit}
            className="border border-black w-full px-10 py-3 my-2"
          >
            Edit
          </button>
          <button
            onClick={create}
            className="border border-black w-full px-10 py-3 my-2"
          >
            Create
          </button>
        </div>
      </div>
    </div>
  );
};
