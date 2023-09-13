import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import moviecontext from "../context/movie";
import DetailsItem from "./DetailsItem";
import Videos from "./Videos";
import Cards from "./Cards";
import Credits from "./Credits";
import Production from "./Production";
import Review from "./Review";

export default function DetailsPage() {
  const details = useContext(moviecontext);
  const { useFetch } = details;
  const { mediatype, id } = useParams();
  let detail = useFetch(`${mediatype}/${id}`);
  let related_videos = useFetch(`${mediatype}/${id}/videos?language=en-US`);
  let recommend = useFetch(
    `${mediatype}/${id}/recommendations?language=en-US&page=1`
  );
  let similar = useFetch(`${mediatype}/${id}/similar?language=en-US&page=1`);
  let credits = useFetch(`${mediatype}/${id}/credits?language=en-US`);
  let review = useFetch(`${mediatype}/${id}/reviews?language=en-US&page=1`)

  let result = detail?.data;
  let videos = related_videos?.data;
  let recom = recommend?.data;
  let Trailer= related_videos?.data?.results?.filter((data)=>(data.type==="Trailer" || data.type==="Teaser")) ;
  let director = credits?.data?.crew?.filter((data)=>data.job==="Director")
  let Writer = credits?.data?.crew?.filter((data)=>data.job==="Writer")
  
  return (
    <div>
      
      <DetailsItem result={result} load={detail?.load} videokey={Trailer?.[0]?.key} director={director} Writer={Writer}/>
      <Credits
        title={"Top Cast"}
        result={credits?.data}
        load={credits?.load}
        mediatype={mediatype}
      />
      <Production
      title={"Production Comapnies"}
      result={result}
      load={detail?.load}
      />
      <Videos result={videos} load={related_videos?.load} />
      <Cards
        title={"Recommendations"}
        result={recom}
        load={recom?.load}
        mediatype={mediatype}
      />
      <Cards
        title={"Similar"}
        result={similar?.data}
        load={similar?.load}
        mediatype={mediatype}
      />
      <Review
      result={review?.data}
      load = {review?.load}
      mediatype={mediatype}
      />
    </div>
  );
}
