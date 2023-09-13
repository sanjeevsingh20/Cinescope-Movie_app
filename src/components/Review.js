import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "../CSS/Videos.css"
export default function Review(props) {
  const { result, load, mediatype } = props;
  const data = result?.results;
  return (
    <div>
      <div className="min-w-screen min-h-50 bg-gray-50 flex items-center justify-center">
        <div className="w-full bg-white border-t border-b border-gray-200 px-5 md-px py-5 md:py-5 text-gray-800">
          <div className="w-full max-w-6xl mx-auto">
            <div className="text-center max-w-xl mx-auto">
              <h3 className="font-bold mb-2 text-gray-600">
                What people are saying.
              </h3>
              
              <div className="text-center mb-10">
                <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
                <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
                <span className="inline-block w-40 h-1 rounded-full bg-indigo-500"></span>
                <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
                <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
              </div>
            </div>
            <div className="-mx-3 md:flex items-start flex-wrap justify-center">
              {!load ? (
                data?.length !== 0 ? (
                  data?.map((data, index) => {
                    const authorimg = data?.author_details?.avatar_path
                      ? "https://image.tmdb.org/t/p/original" +
                        data?.author_details?.avatar_path
                      : "https://i.postimg.cc/zB3m0cs1/60111.jpg";
                    return (
                      <div className="px-3  overflow-hidden">
                        <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                          <div className="w-full flex mb-4 items-center">
                            <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                              <img src={authorimg} alt="" />
                            </div>
                            <div className="flex-grow pl-3">
                              <h6 className="font-bold text-sm uppercase text-gray-600">
                                {data?.author}
                              </h6>
                            </div>
                          </div>
                          <div className="w-full">
                            <p className="text-base	 leading-tight">
                              <span className="text-lg leading-none italic font-bold text-gray-400 mr-1">
                                "
                              </span>
                              {data?.content?.slice(0, 300)}
                              <span className="text-lg leading-none italic font-bold text-gray-400 ml-1">
                                "
                              </span>
                              <span>
                                ... <a href={data?.url}>Read More</a>
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })
                ) : (
                    <h3 className="font-bold mb-2 text-center	 text-gray-600">
                    No Review Found
                  </h3>
                )
              ) : (
                <SkeletonTheme baseColor="#FFFFFF" highlightColor="#E2E8ED">
                  <div className="flex flex-row">
                    <Skeleton variant="rectangular" width={500} height={400} />
                    <Skeleton variant="rectangular" width={500} height={400} />
                    <Skeleton variant="rectangular" width={500} height={400} />
                  </div>
                </SkeletonTheme>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
