// export interface IBook {
//   title: string;
//   desc: string;
// }

import axios from "axios";

function BookItems(props: any) {
  const config = {
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem("key")}`,
      "Access-Control-Allow-Methods": "OPTIONS,GET,PUT,POST,DELETE",
      "Access-Control-Allow-Credentials": true,
    },
  };

  const handleFavClick = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const favPayload = {
      book_name: props.title,
      user: {
        id: sessionStorage.getItem("id"),
        userName: sessionStorage.getItem("userName"),
        email: sessionStorage.getItem("email"),
      },
    };
    axios
      .post("http://localhost:8000/addFavorite", favPayload, config)
      .then(() => alert("Favorite added successfully"))
      .catch((e) => alert("Sorry something went wrong"));
  };
  return (
    <>
      <div className="max-w-sm w-[15em] h-full bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 dark:text-white">
        <div className="p-5">
          <h5 className="mb-2 text-base font-bold tracking-tight text-gray-900 dark:text-white">
            {props.title}
          </h5>
          <div className="cursor-pointer" onClick={handleFavClick}>
            <p>Add fav</p>
          </div>
        </div>
      </div>
    </>
  );
}
export default BookItems;
