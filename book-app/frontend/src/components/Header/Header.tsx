import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  let navigate = useNavigate();
  const logout = () => {
    sessionStorage.removeItem('key');
    sessionStorage.removeItem('id');
    sessionStorage.removeItem('email');

    navigate("/", {
      replace: true
    })
    window.location.reload()
  }
  return (
    <>
      <div className="flex flex-wrap justify-between items-center mx-auto">
        {/* Logo */}
        <div className="mt-2 md:mt-5 px-2">
          <Link to="/">
            <h1 className="text-3xl font-bold">BookGo.</h1>
            <p className="font-medium">By Sanket</p>
          </Link>
        </div>
        {/* Menu items */}
        <div className="hidden w-full md:block md:w-auto">
          <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
            <li>
              <a
                href="/"
                className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <Link to="/search">
                {" "}
                <a
                  href="/search"
                  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  <i>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                  </i>{" "}
                  Explore
                </a>
              </Link>
            </li>
            {
              sessionStorage.getItem("key")
                ? < li >
                  <p onClick={logout} className="cursor-pointer">LogOut</p>
                </li>
                : <li>
                  <Link to="/login">Login</Link>
                </li>

            }
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header;
