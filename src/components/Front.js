import React, { useContext, useState } from "react";
import Crousel from "./Crousel";
import moviecontext from "../context/movie";
import Cards from "./Cards";
import Trailer from "./Trailer";
import BackToTop from "./BackToTop";
import Modals from "./Modal";
import Search from "./Search";


export default function Front() {
  let movies = useContext(moviecontext);
  let { useFetch } = movies;
  const [trend, settrend] = useState("day");
  const [popu, setpopu] = useState("now_playing");
  const [tv, settv] = useState("airing_today");
  const [disc, setdisc] = useState("movie");
  let { data, load } = useFetch(`trending/movie/${trend}?language=en-US`);
  let popular = useFetch(`movie/${popu}?language=en-US&page=1`);
  let discover = useFetch(
    `discover/${disc}?include_adult=false&include_video=true&language=en-US&page=3&sort_by=popularity.desc`
  );
  let upcoming = useFetch("movie/upcoming?language=en-US&page=1");
  let tvair = useFetch(`tv/${tv}?language=en-US&page=1&timezone=india`);

  return (
    <div>
      {/* <BackToTop/> */}
      <Crousel />
      <Cards
        title={"Trending Movies"}
        result={data}
        load={load}
        trends={settrend}
        tabs={["day", "week"]}
        mediatype={"movie"}
      />
      <Cards
        title={"Popular Movies"}
        result={popular.data}
        trends={setpopu}
        load={popular.load}
        tabs={["now_playing", "upcoming", "popular"]}
        mediatype={"movie"}
      />
      <Trailer result={upcoming.data} load={upcoming.load} />
      <Cards
        title={"TV Shows"}
        result={tvair.data}
        trends={settv}
        load={tvair.load}
        tabs={["airing_today", "popular", "top_rated"]}
        mediatype={"tv"}
      />
      
        <Cards
          title={"Discover"}
          result={discover.data}
          load={discover.load}
          trends={setdisc}
          tabs={["movie", "tv"]}
          mediatype={disc}
        />
      
    </div>
  );
}
