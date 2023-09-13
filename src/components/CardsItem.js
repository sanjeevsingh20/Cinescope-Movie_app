import React from "react";
import CircleRating from "./Rating";
import "../CSS/cards.css";
import { Link } from "react-router-dom";

export default function CardsItem(props) {
  
  const { index, rating, title, date, posturl, movieid, mediatype } = props;
  // const show=()=>{
  //     navigate(`${mediatype}/${movieid}`)
  // }
  return (
    <Link to={`../../../${mediatype}/${movieid}`} relative="path" className="no-underline">
      <div key={index}>
        <div className=" h-3/4 mb-10 px-4 mdpx mt-10">
          <div className="rounded-lg w-200 h-64 overflow-hidden">
            <img
              alt="content"
              className="object-fit object-center h-full w-full"
              src={posturl}
            />
          </div>
          <span className="title-font text-dark mtr-20 flex items-center	justify-center font-small text-gray-900  ">
            <strong className="mx-1 absolute my-1  ">{rating}</strong>
            <CircleRating percentage={rating * 10} />
          </span>
          <span className="no-underline title-font ft-20 flex flex-column justify-start text-dark -my-5 text-sm text-gray-900  ">
            <p className="mt-4 mb-0">{title.slice(0, 23)}..</p>
            <p className="mt-1">{date}</p>
          </span>
        </div>
      </div>
    </Link>
  );
}
