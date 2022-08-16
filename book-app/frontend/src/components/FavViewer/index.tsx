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
              
              <div className="mx-auto">
                <div className="flex justify-between items-center">
                  <h3 key={e.id} className="text-xl mb-3 font-bold">
                    - {e.book_name}
                  </h3>
                  <button className="mb-5 p-2 bg-black text-white rounded-lg" onClick={(e1: React.SyntheticEvent) => {
                    e1.preventDefault();
                    axios.delete(`http://localhost:8000/deleteFavorite/${e.id}`, config).then((res) => {
                      alert("Fav book is deleted")
                      window.location.reload();
                    }).catch((e) => alert("Sorry fav book couldn't be deleted."))
                  }}>Delete</button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </Scaffold>
  );
}
export default FavoriteViewer;
