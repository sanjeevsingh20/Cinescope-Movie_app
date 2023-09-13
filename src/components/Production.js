import React, { useRef } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Spinner from "./Spinner";

export default function Production(props) {
  const { title, result, load } = props;
 

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
              result?.production_companies?.length == 0 ? (
                <h3 className="mx-3">No Production Company Found</h3>
              ) : (
                result?.production_companies?.map((data, index) => {
                  const posturl = data.logo_path
                    ? "https://image.tmdb.org/t/p/original" + data?.logo_path
                    : "https://i.postimg.cc/HL1RCxzS/marjan-blan-P-El-BJi8-YY-unsplash.jpg";
                  return (
                    <div key={index}>
                      <div className=" h-3/4 mb-10 px-4 mt-10">
                        <div className="rounded-lg imw-100 h-20 overflow-hidden">
                          <img
                            alt="content"
                            className="object-fit object-center  object-fill	 h-full w-full"
                            src={posturl}
                          />
                        </div>

                        <span className="title-font ft-20 flex flex-column justify-start text-dark -my-5 text-sm text-gray-900  ">
                          <p className="mt-4 mb-0">{data?.name}</p>
                          
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
          
        </div>
      </section>
    </div>
  );
}
