import React, { useEffect, useState } from "react";
import { loadState } from "../library/storage";
import { request } from "../request";
import { useNavigate } from "react-router-dom";
import { Aside } from "../components/aside";

export const MessageList = () => {
  const navigate = useNavigate()
  const [data, setData] = useState([]);
  useEffect(() => {
    request.get("/messages").then((res) => {
      setData(res.data);
      console.log(res.data);
    });
  }, []);

  const itemDelete = (id) => {
    request.delete(`/messages/${id}`);

    setData();
  };

 
  return (
    <div className="flex gap-2">
   <Aside />
      <div className="w-[75%] border  bg-blue-600">
        {data?.map((item) => (
          <div key={item.id} className="flex justify-between items-center">
            <ul>
              <li>{item.name}</li>
            </ul>
            <button onClick={() => itemDelete(item.id)}>X</button>
          </div>
        ))}
      </div>
    </div>
  );
};
