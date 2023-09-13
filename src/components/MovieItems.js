import React from "react";
import Spinner from "./Spinner";
import MovieCards from "./MovieCards";

export default function MovieItems(props) {
  const { result, load, mediatype } = props;
  let data = result?.results;
  return (
    <div
      className=" flex flex-col w-full my-2 justify-center items-end	shadow-md  -mb-10 text-center"
      id="sc-lt"
    >
      {/* {load && <Spinner/>} */}
      {!load ? (
        data?.length == 0 ? (
          <div className="flex justify-center text-white mx-5"><h3> NO DATA FOUND</h3></div>
        ) : (
          data?.map((data, index) => {
            const posturl = data.poster_path
              ? "https://image.tmdb.org/t/p/original" + data.poster_path
              : "https://www.prokerala.com/movies/assets/img/no-poster-available.jpg";
            return (
              <MovieCards
                index={index}
                movieid={data.id}
                posturl={posturl}
                overview={data.overview}
                title={data.original_title || data.original_name}
                date={data.release_date || data.first_air_date}
                mediatype={mediatype}
              />
            );
          })
        )
      ) : (
        <div className="flex justify-center w-full">
          <Spinner />
        </div>
      )}
    </div>
  );
}
