import React from 'react'
import CircleRating from "./Rating";
import "./css/cards.css";
export default function CardsItem(props) {
  const {index,rating ,title,date,posturl}=props
  return (
    <div>
       <div className=" h-3/4 mb-10 px-4 mt-10" key={index}>
                    <div className="rounded-lg w-200 h-64 overflow-hidden">
                      <img
                        alt="content"
                        className="object-fit object-center h-full w-full"
                        src={posturl}
                      />
                    </div>
                    <span className="title-font text-dark mtr-20 flex items-center	justify-center font-small text-gray-900  ">
                      <strong className="mx-1 absolute my-1">
                        {rating}
                      </strong>
                      <CircleRating percentage={rating * 10} />
                    </span>
                    <span className="title-font ft-20 flex flex-column justify-start text-dark -my-5 text-sm text-gray-900  ">
                      <p className="mt-4 mb-0">{title}</p>
                      <p className="mt-1">{date}</p>
                    </span>
                  </div>
    </div>
  )
}
