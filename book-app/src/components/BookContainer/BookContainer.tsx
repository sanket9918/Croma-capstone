import { useEffect, useRef, useState } from "react";
import BookItems from "./BookItems";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface IBookItems {
  children: React.ReactNode;
}

function BookContainer({ children }: IBookItems) {
  const maxScrollWidth = useRef(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carousel = useRef<HTMLInputElement>(null);

  const movePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  const moveNext = () => {
    if (
      carousel.current !== null &&
      carousel.current.offsetWidth * currentIndex <= maxScrollWidth.current
    ) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const isDisabled = (direction: string) => {
    if (direction === "prev") {
      return currentIndex <= 0;
    }

    if (direction === "next" && carousel.current !== null) {
      return (
        carousel.current.offsetWidth * currentIndex >= maxScrollWidth.current
      );
    }

    return false;
  };

  useEffect(() => {
    if (carousel !== null && carousel.current !== null) {
      carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex;
    }
  }, [currentIndex]);

  useEffect(() => {
    maxScrollWidth.current = carousel.current
      ? carousel.current.scrollWidth - carousel.current.offsetWidth
      : 0;
  }, []);
  return (
    <div className="relative overflow-hidden">
      <div className="flex justify-between absolute top left w-full h-full">
        <button
          onClick={movePrev}
          className=" text-white w-10 h-full text-center opacity-100 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
          disabled={isDisabled("prev")}
        >
          <div className="w-10 h-10 rounded-full flex justify-center items-center bg-black text-white">
            <i>
              <FontAwesomeIcon icon={faArrowLeft} />
            </i>
          </div>
          {/* <span className="sr-only">Prev</span> */}
        </button>
        <button
          onClick={moveNext}
          className=" text-white w-10 h-full text-center opacity-100 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
          disabled={isDisabled("next")}
        >
          <div className="w-10 h-10 rounded-full flex justify-center items-center bg-black text-white">
            <i>
              <FontAwesomeIcon icon={faArrowRight} />
            </i>
          </div>
          {/* <span className="sr-only">Next</span> */}
        </button>
      </div>
      <div
        ref={carousel}
        className="carousel-container relative flex gap-6 overflow-hidden scroll-y scroll-smooth snap-x snap-mandatory touch-pan-x z-0"
      >
        {children}
      </div>
    </div>
  );
}

export default BookContainer;
