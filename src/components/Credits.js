import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "../CSS/cards.css";
import Spinner from "./Spinner";

export default function Credits(props) {
  const { title, result, load } = props;
  let data = result?.cast;

  return (
    <div key={title}>
      <section className="text-gray-600 bg-white body-font px-3 mb-5">
        <div className="overflow-hidden relative  py-4 px-2 ">
          <div className="flex justify-between	 text-white mb-2">
            <div className="flex justify-center	 items-center	">
              <h3 className="text-left text-dark">{title || <Skeleton />}</h3>
            </div>
          </div>

          <div
            className="flex flex-no-wrap   shadow-md overflow-x-scroll relative scroll-none flex-row -mx-4 -mb-10 text-center "
            id="sc-lt"
          >
            {/* {load && <Spinner/>} */}
            {!load ? (
              data?.length === 0 ? (
                <h3 className="mx-3">NO DATA FOUND</h3>
              ) : (
                data?.map((data, index) => {
                  const posturl = data.profile_path
                    ? "https://image.tmdb.org/t/p/original" + data?.profile_path
                    : "https://i.postimg.cc/yxr9FDWs/man-with-wooden-frame.jpg";
                  return (
                    <div key={index}>
                      <div className=" h-3/4 mb-10 px-4 mt-10">
                        <div className="rounded-lg imw-100 h-30 overflow-hidden">
                          <img
                            alt="content"
                            className="object-contain object-center rounded-full object-fill	 h-full w-full"
                            src={posturl}
                          />
                        </div>

                        <span className="title-font ft-20 flex flex-column justify-start text-dark -my-5 text-sm text-gray-900  ">
                          <p className="mt-4 mb-0">{data?.original_name}</p>
                          <p className="mt-1">{data?.character}</p>
                        </span>
                      </div>
                    </div>
                  );
                })
              )
            ) : (
              <div className="container">
                <Spinner width={"400px"} height={"500px"} />
              </div>
            )}
          </div>
          {/* <div
            className="absolute	top-25 right-0"
            id="left-side"
            onClick={transx}
          >
            <i className="fa-solid fa-greater-than"></i>
          </div>
          <div className="absolute	top-25 left-0" onClick={transy}>
            <i className="fa-solid fa-less-than"></i>
          </div> */}
        </div>
      </section>
    </div>
  );
}
