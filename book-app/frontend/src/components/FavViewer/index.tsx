import axios from "axios";
import { useEffect, useState } from "react";
import { Scaffold } from "../Scaffold";

export interface IFav {
  id: number;
  book_name: string;
}
function FavoriteViewer() {
  const [favList, setFavList] = useState<IFav[]>([
    { id: 0, book_name: "fetching" },
  ] as IFav[]);
  const [loading, setLoading] = useState(false);
  const config = {
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem("key")}`,
      "Access-Control-Allow-Methods": "OPTIONS,GET,PUT,POST,DELETE",
      "Access-Control-Allow-Credentials": true,
    },
  };
  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `http://localhost:8000/favoriteByUser/${sessionStorage.getItem("id")}`,
        config
      )
      .then((e) => {
        console.log(e.data);

        setFavList(e.data);
        setLoading(false);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <Scaffold>
      <div className="mt-3 md:mt-6 lg:mt-[10em]">
        <h1 className="text-3xl">Your favorites</h1>

        <div className="mt-10">
          {loading ? (
            <p>Loading...</p>
          ) : (
            favList.map((e) => (
              <h3 key={e.id} className="text-xl mb-3 font-bold">
                - {e.book_name}
              </h3>
            ))
          )}
        </div>
      </div>
    </Scaffold>
  );
}
export default FavoriteViewer;