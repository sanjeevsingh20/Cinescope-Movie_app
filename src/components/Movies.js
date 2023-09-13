import React, { useContext, useEffect, useState } from "react";

import MovieItems from "./MovieItems";
import moviecontext from "../context/movie";
import Search from "./Search";
import Filter from "./Filter";
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from "./Spinner";
import "../CSS/filter.css"

export default function Movies() {
  const movies = useContext(moviecontext);
  const { fetchdata } = movies;
  const [item, setitem] = useState("a");
  const [adult, setadult] = useState("False");
  const [movie, setmovie] = useState(null);
  const [loading, setloading] = useState(true);
  const [page_no, setpage_no] = useState(1);

  const fetchInitial = () => {
    
    setloading(true);
    fetchdata(
      `search/movie?query=${item}&include_adult=${adult}&language=en-US&page=${page_no}`
    ).then((res) => {
      setmovie(res);
      setpage_no((prev) => prev + 1);
      setloading(false);
    });
  };
  const fetchnext = () => {
    fetchdata(
      `search/movie?query=${item}&include_adult=${adult}&language=en-US&page=${page_no}`
    ).then((res) => {
      if (movie.results) {
        setmovie({
          ...movie,
          results: [...movie?.results, ...res.results],
        });
      } else {
        setmovie(res);
      }
      setpage_no((prev) => prev + 1);
    });
  };
  useEffect(() => {
    // setpage_no(1)
    fetchInitial();
  }, [item,adult]);
  return (
    <div className="px-10 mdpx-3 min-h-screen" >
      <div className="flex flex-col justify-center">
        <h1 className="text-white text-center	">Movies</h1>
        <Search item={setitem} title={"Movies"} page_no={setpage_no} />
      </div>
      <div className="flex flex-col">
        <div className="flex flex-col items-end ">
          <Filter
            dataset={["True", "False"]}
            type={"radio"}
            title={"Adult"}
            adult={setadult}
            page_no={setpage_no}
          />
        </div>
        <InfiniteScroll
        className="overflow-hidden"
          dataLength={movie?.results?.length || []}
          next={fetchnext}
          hasMore={page_no <= movie?.total_pages}
          loader={<Spinner />}
        >
          <MovieItems result={movie} load={loading} mediatype={"movie"} />
        </InfiniteScroll>
      </div>
    </div>
  );
}
