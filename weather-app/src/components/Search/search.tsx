import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer/footer";
import Header from "../Header/header";
import { Scaffold } from "./../Scaffold";

function Search() {
  const [searchInput, setSearchInput] = useState("");

  let navigate = useNavigate();
  return (
    <>
      <div className="min-h-screen">
        <Scaffold>
          <Header />
          <div className="mt-2 md:mt-6 mx-auto text-center ">
            <input
              type="text"
              className="shadow-lg w-3/4 focus:border-none p-6 rounded-lg"
              placeholder="Search you destination"
              onChange={(e) => setSearchInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  navigate(`/${searchInput}`);
                }
              }}
            ></input>
          </div>
        </Scaffold>
      </div>
      <Footer />
    </>
  );
}
export default Search;
