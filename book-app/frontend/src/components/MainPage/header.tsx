import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function HeaderMainPage() {
  const [userName, setUserName] = useState("");
  const config = {
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem("key")}`,
      "Access-Control-Allow-Methods": "OPTIONS,GET,PUT,POST,DELETE",
      "Access-Control-Allow-Credentials": true,
    },
  };

  useEffect(() => {
    console.log(config.headers.Authorization);

    axios
      .get(
        `http://localhost:8000/getOneUser/${sessionStorage.getItem("id")}`,
        config
      )
      .then((e) => setUserName(e.data["userName"]))
      .catch((e) => console.log(e));
  }, []);

  return (
    <>
      <div className="mt-3 md:mt-6 lg:mt-[10em]">
        {userName.length > 0 ? (
          <>
            <h1 className="text-3xl block mb-10 font-bold">Hey , {userName}</h1>
            <Link to="/editProfile">
              <button className="mb-5 p-2 bg-black text-white rounded-lg">Edit profile</button>
            </Link>
            <Link to="/favViewer">
              <button className="ml-2 mb-5 p-2 bg-black text-white rounded-lg">View Favourites</button>
            </Link>
          </>
        ) : (
          <div></div>
        )}
        <div className="flex flex-col md:flex-row justify-between items-start">
          <h1 className="text-2xl block">
            Welcome to the <span className="font-bold">Book Emporium</span>
          </h1>
        </div>
      </div>
    </>
  );
}
export default HeaderMainPage;
