import React, { useContext } from "react";
import moviecontext from "../context/movie";
import Spinner from "./Spinner";
import TrailerItem from "./TrailerItem";
import "../CSS/Videos.css";
export default function Trailer(props) {
  let movies = useContext(moviecontext);
  const { useFetch } = movies;
  let video_keys;
  const { result} = props;

  let data = result?.results;
  let movieid = data?.map((res) => {
    return res.id;
    //
  });
  let trail1 = useFetch(
    `movie/${movieid ? movieid[4] : 23467}/videos?language=en-US`
  );
  let trail2 = useFetch(
    `movie/${movieid ? movieid[8] : 23467}/videos?language=en-US`
  );
  let trail3 = useFetch(
    `movie/${movieid ? movieid[12] : 23467}/videos?language=en-US`
  );
  let trail4 = useFetch(
    `movie/${movieid ? movieid[3] : 23467}/videos?language=en-US`
  );

  let trail5 = useFetch(
    `movie/${movieid ? movieid[7] : 23467}/videos?language=en-US`
  );

  let trail6 = useFetch(
    `movie/${movieid ? movieid[13] : 23467}/videos?language=en-US`
  );

  video_keys = [trail1, trail2, trail3, trail4, trail5, trail6];
  return (
    <div className="px-10 mdpx">
      <div className="flex justify-between	 text-white mb-2">
        <h3 className="text-left text-white">New Release Trailer</h3>
        
      </div>
      <div className="w-100 px-2">
        <div className=" px-3 flex flex-no-wrap   shadow-md overflow-x-scroll relative scroll-none flex-row -mx-4 -mb-10 text-center ">
          {!trail1.load ? (
            video_keys?.map((data, index) => {
              return <TrailerItem result={data} index={index} />;
            })
          ) : (
            <div className="container">
              <Spinner />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
