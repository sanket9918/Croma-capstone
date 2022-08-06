import { useState } from "react";

import { Scaffold } from "./../Scaffold";
import axios from "axios";

interface IResults {
  title: string;
}
function Search() {
  const [searchInput, setSearchInput] = useState("");
  const [resultData, setResultData] = useState<IResults[]>();
  const [loading, setLoading] = useState(false);
  return (
    <>
      <div className="min-h-screen">
        <Scaffold>
          <div className="mt-2 md:mt-6 mx-auto text-center ">
            <input
              type="text"
              className="shadow-lg w-3/4 focus:border-none p-6 rounded-lg"
              placeholder="Search the book/author"
              onChange={(e) => setSearchInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  setLoading(true);
                  axios
                    .get(`https://openlibrary.org/search.json?q=${searchInput}`)
                    .then((e) => setResultData(e.data.docs))
                    .then(() => setLoading(false))
                    .catch(() => alert("Sorry something went wrong."));
                }
              }}
            ></input>
          </div>
          {loading ? (
            <>
              <div className="text-center mt-6 block">
                <h1 className="text-3xl">Loading...</h1>
              </div>
            </>
          ) : (
            <></>
          )}
          <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6 mx-auto">
            {resultData?.map((e) => (
              <>
                <div className="max-w-sm w-[15em] h-full mx-auto bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-5 hover:bg-slate-200">
                  <div className="p-5">
                    <h5 className="mb-2 text-base font-bold tracking-tight text-gray-900 dark:text-white">
                      {e.title}
                    </h5>
                  </div>
                </div>
              </>
            ))}
          </div>
        </Scaffold>
      </div>
    </>
  );
}
export default Search;
