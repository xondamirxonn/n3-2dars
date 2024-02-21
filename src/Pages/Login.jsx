import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { request } from "../request";
import { toast } from "react-toastify";
import { saveState } from "../library/storage";

export const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const Submit = async (e) => {
    e.preventDefault();
    if (!email) return toast("Email yoz", { theme: "colored", type: "error" });
    if (!password)
      return toast("Parol yoz", { theme: "colored", type: "error" });
    if (password.length <= 5)
      return toast("Parol kamida 6ta bolish kerak", {
        theme: "colored",
        type: "error",
      });
    request
      .post("/login", {
        email,
        password,
      })
      .then((res) => {
        saveState("token", res.data);
        console.log(res.data);
        navigate("/app", { replace: true });
      })
      .catch((error) => {
        toast(error.response.data, {theme: "colored", type: "error"})
        console.log(error);
        localStorage.clear("token")
      });
  };

  return (
    <div>
      <form
        onSubmit={Submit}
        className=" border w-96 h-[30vh]  p-4 mx-auto border-black mt-44 rounded-md ]"
      >
        <input
          className="border border-gray-500 w-full rounded-md p-2 mt-4"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="border border-gray-500 w-full mt-2 rounded-md p-2 "
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="border w-full mt-3 rounded-md bg-green-700 p-2">
          Add
        </button>
      </form>
    </div>
  );
};
