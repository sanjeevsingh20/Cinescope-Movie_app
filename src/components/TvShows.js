import React, { useContext, useState, useEffect } from "react";
import Spinner from "./Spinner";
import MovieItems from "./MovieItems";
import moviecontext from "../context/movie";
import Search from "./Search";
import Filter from "./Filter";
import InfiniteScroll from "react-infinite-scroll-component";

export default function TvShows() {
  const movies = useContext(moviecontext);
  const { fetchdata } = movies;
  const [adult, setadult] = useState("False");
  const [item, setitem] = useState("a");
  
  const [movie, setmovie] = useState(null);
  const [loading, setloading] = useState(true);
  const [page_no, setpage_no] = useState(1);
  const fetchInitial = () => {
    setloading(true);
    fetchdata(
      `search/tv?query=${item}&include_adult=${adult}&language=en-US&page=${page_no}`
    ).then((res) => {
      setmovie(res);
      setpage_no((prev) => prev + 1);
      setloading(false);
    });
  };
  const fetchnext = () => {
    fetchdata(
      `search/tv?query=${item}&include_adult=${adult}&language=en-US&page=${page_no}`
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
  }, [item, adult]);
  return (
    <div className="px-3 min-h-screen">
      <div className="flex flex-col justify-center">
        <h1 className="text-white text-center">TV Shows</h1>
        <Search item={setitem} title={"TV Shows"} page_no={setpage_no} />
      </div>
      <div className="flex flex-col">
        <div className="flex flex-col items-end">
          <Filter
            dataset={["True", "False"]}
            type={"radio"}
            title={"Adult"}
            adult={setadult}
            page_no={setpage_no}
          />
        </div>
        <InfiniteScroll
          dataLength={movie?.results?.length || []}
          next={fetchnext}
          hasMore={page_no <= movie?.total_pages}
          loader={<Spinner />}
        >
          <MovieItems result={movie} load={loading} mediatype={"tv"} />
        </InfiniteScroll>
      </div>
    </div>
  );
}
