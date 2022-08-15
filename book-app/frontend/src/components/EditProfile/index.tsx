import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Scaffold } from "../Scaffold";

function EditProfile() {
  const [userName, SetUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const config = {
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem("key")}`,
      "Access-Control-Allow-Methods": "OPTIONS,GET,PUT,POST,DELETE",
      "Access-Control-Allow-Credentials": true,
    },
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const user = {
      id: sessionStorage.getItem("id"),
      userName: userName,
      email: email,
      password: password,
    };
    axios
      .put("http://localhost:8000/user", user, config)
      .then(() => {
        alert("User updated");
      })
      .catch((e) => {
        alert("User cannot be updated");
      });
  };

  useEffect(() => {
    console.log(config.headers.Authorization);

    axios
      .get(
        `http://localhost:8000/getOneUser/${sessionStorage.getItem("id")}`,
        config
      )
      .then((e) => {
        SetUserName(e.data["userName"]);
        setEmail(e.data["email"]);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <>
      <Scaffold>
        <div className="mt-3 md:mt-6 lg:mt-[10em]">
          <h1 className="text-3xl">Edit Profile</h1>
          <form method="POST" className="mt-10" onSubmit={handleSubmit}>
            <label className="text-xl font-medium mt-8">Username</label>
            <input
              type="text"
              name="userName"
              placeholder={userName}
              onChange={(e) => SetUserName(e.target.value)}
              className="block rounded-xl shadow-lg mt-4 mb-10 w-full h-12 p-2"
            />
            <label className="text-xl font-medium mt-10">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter the new password"
              onChange={(e) => setPassword(e.target.value)}
              className="block rounded-xl shadow-lg mt-4 mb-10 w-full h-12 p-2"
            />
            <label className="text-xl font-medium mt-10">Email</label>
            <input
              name="email"
              type="email"
              placeholder={email}
              onChange={(e) => setEmail(e.target.value)}
              className="block rounded-xl shadow-lg mt-4   w-full h-12 p-2"
            />
            <div className="flex justify-between items-center">
              <button className="h-auto bg-black text-white font-bold p-3 rounded-xl mt-10">
                Submit
              </button>
            </div>
          </form>
        </div>
      </Scaffold>
    </>
  );
}

export default EditProfile;
