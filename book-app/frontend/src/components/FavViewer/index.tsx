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

  /**
   * Loading widget for the initial placeholder
   */
  const [loading, setLoading] = useState(false);

  const config = {
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem("key")}`,
      "Access-Control-Allow-Methods": "OPTIONS,GET,PUT,POST,DELETE",
      "Access-Control-Allow-Credentials": true,
    },
  };

  /**
   * For deleting the items from the favourite list and relading the favorite items (reload cache)
   * @param id 
   */
  const handleDeleteItem = (id: number) => {
    axios.delete(`http://localhost:8000/deleteFavorite/${id}`, config).then(() => {
      handleFavListLoad()
    }).catch((e) => alert("Sorry fav book couldn't be deleted."))
  }

  /**
   * Function for loading the favourite items from the DB
   */
  const handleFavListLoad = () => {
    axios
      .get(
        `http://localhost:8000/favoriteByUser/${sessionStorage.getItem("id")}`,
        config
      )
      .then((e) => {
        setFavList(e.data);
        setLoading(false);
      })
      .catch((e) => console.log(e));
  }

  /**
   * For initial page load
   */
  useEffect(() => {
    setLoading(true);
    handleFavListLoad();

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
                  <button className="mb-5 p-2 bg-black text-white rounded-lg" onClick={() => handleDeleteItem(e.id)}>Delete</button>
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
