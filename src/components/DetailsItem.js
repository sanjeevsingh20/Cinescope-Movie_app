import React from "react";
import "../CSS/Deatils.css";
import CircleRating from "./Rating";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import dayjs from "dayjs";
import Modals from "./Modal";
import { useParams } from "react-router-dom";

export default function DetailsItem(props) {
  const { result, load ,videokey ,director,Writer} = props;
  const {mediatype}=useParams()
  const backdrop = result?.backdrop_path
    ? "https://image.tmdb.org/t/p/original" + result.backdrop_path
    : "https://i.postimg.cc/DZgVxKSD/business-financial-concept-with-magnifying-glass-question-mark-yellow-background-flat-lay.jpg";
  const posturl = result?.poster_path
    ? "https://image.tmdb.org/t/p/original" + result.poster_path
    : "https://www.prokerala.com/movies/assets/img/no-poster-available.jpg";
  return (
    <div>
      {!load ? (
        <>
          
          <div className="bg-red relative overflow-hidden md-100">
            <img
              src={backdrop}
              alt=""
              className="object-contain opacity-50 vw-100 mdo-cover mdh-100"
            />
            <div className="poster">
              <div className="flex md-col w-100 h-100">
                <div className="imgs w-30 wh-full">
                  <img src={posturl} alt="" className="h-100 img-poster mdo-contain" />
                </div>
                <div className="flex flex-col w-70 mx-3">
                  <a
                    href={result?.homepage}
                    target="_blank"
                    className="no-underline md-text-center my-2"
                  >
                    <h4 className="text-white">
                      {result?.title || result?.original_name} (
                      {dayjs(result?.release_date).format("YYYY")})
                    </h4>
                  </a>
                  <span className="text-white italic md-text-cem md-text-center">{result?.tagline}</span>
                  <div className="flex flex-wrap md-js-c">
                    {result?.genres?.map((gen, index) => {
                      return (
                        <button
                          className="btn btn-danger text-white mr-2 my-2"
                          key={index}
                        >
                          {gen?.name}
                        </button>
                      );
                    })}
                  </div>

                  <span className="title-font text-dark mtr-20 flex items-center md-mx-auto	mt-3 font-small text-gray-900  ">
                    <strong className="mx-3 absolute my-2 text-white ">
                      {result?.vote_average === 0 ? "NR" : result?.vote_average?.toFixed(1)}
                    </strong>
                    <CircleRating percentage={result?.vote_average * 10} />
                    <Modals videokey={videokey} title={"Watch Trailer"}/>
                  </span>

                  <div className="desc mt-3 my-2">
                    <h3 className="text-white">Overview</h3>
                    <p className="text-white">
                      {result?.overview?.slice(0, 400)}...
                    </p>
                  </div>
                  <div className="more-details  flex flex-row md-col align-start">
                  <span className="text-white my-3  mr-3	">
                      <b>Director:</b> {director?director[0]?.name:"N/A"}
                    </span>
                    <span className="text-white my-3  mr-3	">
                      <b>Writer:</b> {Writer?Writer[0]?.name:"N/A"}
                    </span>
                  </div>
                  <div className="more-details flex flex-row md-col ">
                    <span className="text-white my-3  mr-3	">
                      <b>Status:</b> {result?.status}
                    </span>
                   
                    
                    <span className="text-white my-3 mr-3	">
                    {mediatype==="movie"?<span><b>Runtime: </b>{result?.runtime} min</span>: <span><b>Episodes: </b>{result?.number_of_episodes} Episodes</span>}
                      
                    </span>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <SkeletonTheme baseColor="#FFFFFF" highlightColor="#E2E8ED">
          <div className="flex flex-row">
            <Skeleton variant="rectangular" width={500} height={400} />
            <div className="flex flex-col mx-24">
              <h1>
                <Skeleton
                  variant="rectangular"
                  width={300}
                  height={40}
                  count={2}
                />
              </h1>
              <Skeleton variant="circular" width={30} height={40} />

              <p>
                <Skeleton
                  variant="rectangular"
                  width={300}
                  height={40}
                  count={2}
                />
              </p>
            </div>

            {/* <Skeleton variant="circular" width={40} height={40} /> */}

            {/* <Skeleton variant="rounded" width={210} height={60} /> */}
          </div>
        </SkeletonTheme>
      )}
    </div>
  );
}
