import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import MovieBox from "./MovieBox";
import moviecontext from "../context/movie";
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from "./Spinner";
import Filter from "./Filter";
import "../CSS/movie.css"
export default function MovieCategory() {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0") ; //January is 0!
  var nmm = String((today.getMonth() + 1)-2).padStart(2, "0") ; //January is 0!
  var yyyy = today.getFullYear();
  today = yyyy + "-" + mm + "-" + dd;
  var next =  yyyy + "-" + nmm + "-" + dd;
  
  const movies = useContext(moviecontext);
  const { fetchdata, useFetch } = movies;
  const [cat, setcat] = useState("");
  const [adult, setadult] = useState("False");

  const [title, settitle] = useState("");
  const [movie, setmovie] = useState(null);
  const [loading, setloading] = useState(true);
  const [page_no, setpage_no] = useState(1);
  const [language, setlanguage] = useState("");
  const [release1, setrelease1]=useState("")
  const [release2, setrelease2]=useState("")
  const [releasetype, setreleasetype]=useState("")
  const [votecount, setvotecount] = useState("");

  const languages = useFetch(`configuration/languages`);
  let location = useLocation();
  let path = location.pathname;
  useEffect(() => {
    if (path === "/movie/popular") {
      setcat("popularity.desc");
      settitle("Popular Movies");
    }
    if (path === "/movie/upcoming") {
      setcat("primary_release_date.desc");
      settitle("Upcoming Movies");
    }
    if (path === "/movie/trending") {
      setcat("vote_average.desc");
      setcat("popularity.desc");
      setvotecount(200);

      settitle("Top Rated Movies");
    }
    if (path === "/movie/now_playing") {
      setcat("popularity.desc");
      setrelease1(next)
      setrelease2(today)
      setreleasetype(3)
      settitle("New Movies in Theatre");
    }
  }, [cat, votecount]);

  const fetchInitial = () => {
    setloading(true);
    fetchdata(
      `discover/movie?include_adult=${adult}&language=en-US&page=${page_no}&with_original_language=${language}&sort_by=${cat}&vote_count.gte=${votecount}&release_date.gte=${release1}&release_date.lte=${release2}&with_release_type=${releasetype}`
    ).then((res) => {
      setmovie(res);
      setpage_no((prev) => prev + 1);
      setloading(false);
    });
  };
  const fetchnext = () => {
    fetchdata(
      `discover/movie?include_adult=${adult}&language=en-US&page=${page_no}&with_original_language=${language}&sort_by=${cat}&vote_count.gte=${votecount}&release_date.gte=${release1}&release_date.lte=${release2}`
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
    fetchInitial();
  }, [cat, votecount, adult, language,next,today]);
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
          mediatype={"movie"}
          category={title}
        />
      </InfiniteScroll>
    </div>
  );
}
