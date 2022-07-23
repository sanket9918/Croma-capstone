import { faMagnifyingGlass, faPlaneDeparture } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function BottomFooter() {
    return (
        <>
            <div className="container p-4 md:p-8 mx-auto">
                <div className="shadow-2xl h-auto rounded-lg ">
                    <div className="flex flex-col md:flex-row justify-around items-center" >
                        <div className="p-8">
                            <h1 className="text-5xl font-bold mt-3 leading-tight">Plan your <br /> journey accordingly</h1>
                            <div className="mt-[2.5em]"><p> <span className="p-2 border rounded-lg shadow-xl"><FontAwesomeIcon icon={faMagnifyingGlass} /></span> Search for more</p></div>
                        </div>
                        <div className="">
                            <i className="text-[10rem]"><FontAwesomeIcon icon={faPlaneDeparture} /></i>
                        </div>
                    </div>
                </div>
            </div></>
    )
}
export default BottomFooter;