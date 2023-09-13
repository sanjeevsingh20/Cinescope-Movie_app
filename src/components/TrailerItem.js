import React from "react";
import ReactPlayer from "react-player/lazy";
import "../CSS/Videos.css"
export default function TrailerItem(props) {
  const { result, index } = props;
  let keys = result.data?.results?.filter((data)=>(data.type=="Trailer" || data.type=="Teaser"));
  return (
    <div className=" mx-2" key={index}>
      <ReactPlayer
        className="bdr-10"
        height={"250px"}
        width={"420px"}
        url={`https://www.youtube.com/embed/${
          keys ? keys[0].key : "TcMBFSGVi1c"
        }`}
        controls
      />
    </div>
  );
}
