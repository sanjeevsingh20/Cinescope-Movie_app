
import React, { useContext, useEffect, useState } from "react";

import MovieItems from "./MovieItems";
import moviecontext from "../context/movie";
import Filter from "./Filter";
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from "./Spinner";
import "../CSS/filter.css"
import { useParams } from "react-router-dom";

export default function Discover() {
const { mediatype } = useParams();
  const movies = useContext(moviecontext);
  const { fetchdata ,useFetch} = movies;
  const [item, setitem] = useState("a");
  const [adult, setadult] = useState("False");
  const [movie, setmovie] = useState(null);
  const [loading, setloading] = useState(true);
  const [page_no, setpage_no] = useState(1);
  const [language , setlanguage]=useState("")
  const languages = useFetch(`configuration/languages`)

  const fetchInitial = () => {
    setpage_no(1)
    setloading(true);
    fetchdata(
      `discover/${mediatype}?include_adult=${adult}&language=en-US&sort_by=popularity.desc&page=${page_no}&with_original_language=${language}`
    ).then((res) => {
      setmovie(res);
      setpage_no((prev) => prev + 1);
      setloading(false);
    });
  };
  const fetchnext = () => {
    fetchdata(
      `discover/${mediatype}?include_adult=${adult}&language=en-US&sort_by=popularity.desc&page=${page_no}&with_original_language=${language}`
    ).then((res) => {
      if (movie?.results) {
        setmovie({
          ...movie,
          results: [...movie?.results, ...res?.results],
        });
      } else {
        setmovie(res);
      }
      setpage_no((prev) => prev + 1);
    });
  };
  useEffect(() => {
    fetchInitial();
  }, [item,adult,mediatype,language]);
  return (
    <div className="px-10 mdpx-3 min-h-screen" >
      <div className="flex flex-col justify-center">
        <h1 className="text-white text-center	">{mediatype.toUpperCase()}</h1>
        
      </div>
      <div className="flex flex-col">
        <div className="flex flex-row mdcols justify-end	items-end ">
          <Filter
            dataset={["True", "False"]}
            type={"radio"}
            title={"Adult"}
            adult={setadult}
            page_no={setpage_no}
          />
          <Filter
            dataset={["True"]}
            languages ={languages?.data}
            type={"select"}
            title={"Language"}
            language={setlanguage}
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
          <MovieItems result={movie} load={loading} mediatype={mediatype} />
        </InfiniteScroll>
      </div>
    </div>
  );
}
