import React from "react";
import Skeleton , { SkeletonTheme } from "react-loading-skeleton";
import ReactPlayer from "react-player";
import "../CSS/Videos.css"

export default function Videos(props) {
  const { result, load } = props;
  let data = result?.results;
  return (
    <>
      <h1 className="text-white text-start mx-5">Related Videos</h1>
      <div className="flex flex-no-wrap  mx-3 shadow-md  relative scroll-none flex-row text-center">
        {!load ? (
          data?.map((res, index) => {
            return (
              <div className="mx-2" key={index}>
                {" "}
                <ReactPlayer
                  className="bdr-10"
                  height={"250px"}
                  width={"420px"}
                  url={`https://www.youtube.com/embed/${
                    res.key ? res.key : "TcMBFSGVi1c"
                  }`}
                  controls
                />
              </div>
            );
          })
        ) : (
          <SkeletonTheme baseColor="#FFFFFF" highlightColor="#E2E8ED">
          <div className="flex flex-row flex-no-wrap">
            {/* <Skeleton variant="rectangular" width={640} height={300} /> */}
            <Skeleton variant="rectangular" width={640} height={300} count={3} />
            
          </div>
        </SkeletonTheme>
        )}
      </div>
    </>
  );
}
