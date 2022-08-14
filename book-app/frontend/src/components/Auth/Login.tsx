import { useState } from "react";
import { Link } from "react-router-dom";
import { Scaffold } from "../Scaffold";

function Login() {
  const [userName, SetUserName] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <Scaffold>
        <div className="flex justify-center items-center min-h-screen">
          <div className="max-w-md h-auto bg-white shadow-lg rounded-2xl p-6  w-full">
            <h1 className="font-bold text-2xl">Login</h1>
            <form action="" className="mt-10">
              <label className="text-xl font-medium mt-8">Username</label>
              <input
                type="text"
                name="userName"
                placeholder="john@xyz.com"
                onChange={(e) => SetUserName(e.target.value)}
                className="block rounded-xl shadow-lg mt-4 mb-10 w-full h-12 p-2"
              />
              <label className="text-xl font-medium mt-10">Password</label>
              <input
                type="password"
                name="password"
                placeholder="password"
                onChange={(e) => setPassword(e.target.value)}
                className="block rounded-xl shadow-lg mt-4 w-full h-12 p-2"
              />
              <div className="flex justify-between items-center">
                <button className="h-auto bg-black text-white font-bold p-3 rounded-xl mt-10">
                  Submit
                </button>
                <Link to="/register">
                  <p className="mt-10">Register</p>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </Scaffold>
    </>
  );
}
export default Login;
