import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "../CSS/cards.css";
import CardsItem from "./CardsItem";
import Spinner from "./Spinner";

import Switches from "./Switches";
export default function Cards(props) {
  const { title, result, load, tabs, trends, mediatype } = props;
  let data = result?.results;

  return (
    <div key={title}>
      <section className="text-gray-600 bg-grey bg-white body-font px-3 my-5">
        <div className="overflow-hidden relative  py-10 px-2 ">
          <div className="flex justify-between	 text-white mb-2">
            <div className="flex justify-center 	 items-center	">
              <h3 className="text-left text-dark">{title || <Skeleton />}</h3>
              <div className="md-none">
              <Switches data={tabs} trend={trends} />
              </div>
             
              <div className="btn-group mx-2 dis-no">
                <div>
                  
                </div>

                <button
                  type="button"
                  className="btn btn-danger dropdown-toggle dropdown-toggle-split"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <span className="visually-hidden">Toggle Dropdown</span>
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <span className="dropdown-item" >
                      
                    <Switches data={tabs} trend={trends} />
                    </span>
                  </li>
                </ul>
              </div>
              
            </div>
            
          </div>

          <div
            className="flex flex-no-wrap   shadow-md overflow-x-scroll relative scroll-none flex-row -mx-4 -mb-10 text-center "
            id="sc-lt"
          >
            {/* {load && <Spinner/>} */}
            {!load ? (
              data?.length === 0 ? (
                <div className="flex justify-center"><h3>NO DATA FOUND</h3></div>
              ) : (
                data?.map((data, index) => {
                  const posturl = data.poster_path
                    ? "https://image.tmdb.org/t/p/original" + data.poster_path
                    : "https://www.prokerala.com/movies/assets/img/no-poster-available.jpg";
                  return (
                    <CardsItem
                      index={index}
                      movieid={data.id}
                      posturl={posturl}
                      rating={
                        data.vote_average === 0
                          ? "NR"
                          : data.vote_average?.toFixed(1)
                      }
                      title={data.original_title || data.original_name}
                      date={data.release_date}
                      mediatype={mediatype}
                    />
                  );
                })
              )
            ) : (
              <div className="container">
                <Spinner width={"400px"} height={"500px"} />
              </div>
            )}
          </div>
          {/* <div
            className="absolute	top-25 right-0"
            id="left-side"
            onClick={transx}
          >
            <i className="fa-solid fa-greater-than"></i>
          </div>
          <div className="absolute	top-25 left-0" onClick={transy}>
            <i className="fa-solid fa-less-than"></i>
          </div> */}
        </div>
      </section>
    </div>
  );
}
