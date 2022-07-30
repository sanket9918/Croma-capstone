import { useEffect, useRef, useState } from "react";
import BookContainer from "../../../BookContainer/BookContainer";
import BookItems from "../../../BookContainer/BookItems";
import data from "./../../../../mock-data/books.json";
import authors from "./../../../../mock-data/author.json";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Books() {
  return (
    <>
      <div className="mt-6 md:mt-[4em]">
        <h2>Some of the books you may like..</h2>
        <div className="mt-6">
          <BookContainer>
            {data.entries.map((resource, index) => {
              return (
                <div key={index}>
                  <BookItems title={resource.title} />
                </div>
              );
            })}
          </BookContainer>
        </div>
      </div>
      <div className="mt-6 md:mt-[4em]">
        <h2>Some of the authors you may like..</h2>
        <div className="mt-6">
          <BookContainer>
            {authors.docs.map((resource, index) => {
              return (
                <div key={index}>
                  <BookItems title={resource.name} />
                </div>
              );
            })}
          </BookContainer>
        </div>
      </div>
      <div className="mt-6 md:mt-[4em]">
        <h2>Some of the recommended book you may like..</h2>
        <div className="mt-6">
          <BookContainer>
            {authors.docs.map((resource, index) => {
              return (
                <div key={index}>
                  <BookItems title={resource.top_work} />
                </div>
              );
            })}
          </BookContainer>
        </div>
      </div>
    </>
  );
}

export default Books;
