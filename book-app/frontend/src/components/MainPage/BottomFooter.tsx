import {
  faMagnifyingGlass,
  faQuestion,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function BottomFooter() {
  return (
    <>
      <div className="shadow-2xl h-auto rounded-lg mt-8">
        <div className="flex flex-col md:flex-row justify-around items-center">
          <div className="p-8">
            <h1 className="text-5xl font-bold mt-3 leading-tight">
              Wanna see
              <br /> more results?
            </h1>
            <div className="mt-[2.5em]">
              <p>
                {" "}
                <span className="p-2 border rounded-lg shadow-xl">
                  <Link to="/search">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                  </Link>
                </span>{" "}
                Search for more
              </p>
            </div>
          </div>
          <div className="">
            <i className="text-[10rem]">
              <FontAwesomeIcon icon={faQuestion} />
            </i>
          </div>
        </div>
      </div>
    </>
  );
}
export default BottomFooter;
