import { Link } from "react-router-dom";
import { Scaffold } from "./components/Scaffold";

function Error() {
    return (
        <>
            <Scaffold>
                <div className="flex flex-col justify-center items-center">
                    <h1 className="text-3xl font-bold">
                        Oops...something went wrong
                    </h1>
                    <Link to="/" replace={true}>
                        <button className="h-auto bg-black text-white font-bold p-3 rounded-xl mt-10">
                            Go to main page
                        </button></Link>
                </div>
            </Scaffold>
        </>
    )
}
export default Error;