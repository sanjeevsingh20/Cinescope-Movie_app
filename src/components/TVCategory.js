import React, { useContext, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import MovieBox from "./MovieBox";
import moviecontext from "../context/movie";
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from "./Spinner";
import "../CSS/movie.css"
import Filter from "./Filter";


export default function TVCategory() {
  const movies = useContext(moviecontext);
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var nextdd = String(today.getDate()+7).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0") ; //January is 0!
  var yyyy = today.getFullYear();
  var nextyear =  today.getFullYear() +1;
  today = yyyy + "-" + mm + "-" + dd;
  var next =  yyyy + "-" + mm + "-" + nextdd;
  var year = nextyear + "-" + mm + "-" + dd;
  const { useFetch, fetchdata } = movies;
  const [cat, setcat] = useState("");

  const [movie, setmovie] = useState(null);
  const [loading, setloading] = useState(true);
  const [page_no, setpage_no] = useState(1);
  const [title,settitle]=useState("")
  const [adult, setadult] = useState("False");
  const [language, setlanguage] = useState("");
  const [air,setair]=useState("")
  const [nextair,setnextair]=useState("")

  const [votecount, setvotecount] = useState("");
  const languages = useFetch(`configuration/languages`);

  let location = useLocation();
  let path = location.pathname;
  useEffect(() => {
    if (path === "/tv/popular") {
      setcat("popularity.desc");
      settitle("Popular TV Shows")
    }
    if (path === "/tv/Air_Today") {
      setcat("popularity.desc");
      setair(today)
      setnextair(today)
      settitle("TV Shows Airing Today")
      
    }
    if (path === "/tv/on_TV") {
      setcat("popularity.desc");
      setair(today)
      setnextair(next)
      settitle("TV Shows on AIR")
    }
    if (path === "/tv/top_rated") {
      setcat("vote_average.desc");
      setvotecount(100)
      setnextair(nextyear)
      settitle("TV Rated Tv Shows")
    }
  }, [cat]);
  const fetchInitial = () => {
    setloading(true);
    fetchdata(
      `discover/tv?include_adult=${adult}&language=en-US&page=${page_no}&with_original_language=${language}&sort_by=${cat}&vote_count.gte=${votecount}&air_date.gte=${air}&air_date.lte=${nextair}`
    ).then((res) => {
      setmovie(res);
      setpage_no((prev) => prev + 1);
      setloading(false);
    });
  };
  const fetchnext = () => {
    fetchdata(
      `discover/tv?include_adult=${adult}&language=en-US&page=${page_no}&with_original_language=${language}&sort_by=${cat}&vote_count.gte=${votecount}&air_date.gte=${air}&air_date.lte=${nextair}`
    ).then((res) => {
      if (movie.results) {
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
  }, [cat, votecount, adult, language,today,next]);
  return (
    <div className="px-2 bg-white min-h-screen">
      <h1 className="text-red-500 text-center py-3">{title}</h1>
      <div className="flex flex-row flex-wrap mdcols justify-end	items-end overflow-hidden ">
          <Filter
            dataset={["True", "False"]}
            type={"radio"}
            title={"Adult"}
            adult={setadult}
            page_no={setpage_no}
          />
          <Filter
          dataset={["True"]}
          languages={languages?.data}
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
        <MovieBox
          title={title}
          data={movie}
          load={loading}
          page_no={page_no}
          mediatype={"tv"}
          category={title}
        />
      </InfiniteScroll>
    </div>
  );
}
