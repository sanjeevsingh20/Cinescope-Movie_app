import React from "react";
import "../CSS/moviecard.css"
import "../CSS/filter.css"
import { Link } from "react-router-dom";


export default function MovieCards(props) {
    const { title, date, posturl, movieid ,overview,mediatype } = props;
    
    
  return (
    <Link to={`../${mediatype}/${movieid}`} target="_blank"  className="no-underline w-full	">
      <div  className="flex mdcol w-full vh-20 my-2  rounded  bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 flex-row">
        <img
          className=" w-20  -t-lg object-contain mdfill object-left	 md:h-auto md:!rounded-none md:!rounded-l-lg"
          src={posturl}
          alt=""
        />
        <div className="flex  mx-content w-80 flex-col justify-center bg-white justify-start p-6">
          <h5 className="mb-2 text-xl text-dark text-start font-medium text-neutral-800 dark:text-neutral-50">
          {title}
          </h5>
          <span className="text-left mb-2 font-semibold opacity-75">{date}</span>
          <p className="text-justify text-dark dark:text-neutral-200 xltext">
           {overview.slice(0,200)}...
          </p>
          
        </div>
      </div>
      </Link>
  );
}
