import React from "react";
import Spinner from "./Spinner";
import "../CSS/discover.css";
import { Link } from "react-router-dom";

export default function MovieBox(props) {
  const {  data, load, mediatype, category } = props;
  let result = data?.results;

  return (
    <div>
      <div className="d-grid columns5  justify-center align-items-start flex-wrap">
        {!load ? (
          result?.length !== 0 ? (
            result?.map((data, index) => {
              const posturl = data.poster_path
                ? "https://image.tmdb.org/t/p/original" + data.poster_path
                : "https://www.prokerala.com/movies/assets/img/no-poster-available.jpg";
              return (
                <div className="card w-90 mx-2 my-3 col-md-2 h-27 no-underline	" key={index}>
                  <Link
                    to={`../../${mediatype}/${category}/${data.id}`}
                    relative="path"
                    className="no-underline"
                    target="_blank"
                    
                  >
                    <img
                      src={posturl}
                      className="card-img-top object-contain "
                      alt="..."
                    />
                   
                    <div className="card-body bg-white">
                      <h5 className="card-title text-dark no-underline	 font-bold ft-12">
                        {(data.original_title || data.original_name).slice(
                          0,
                          25
                        )}
                      </h5>
                      <span className="card-text text-dark no-underline	 text-left mb-2 font-semibold opacity-75">
                        {data.release_date || data.first_air_date}
                      </span>
                    </div>
                  </Link>
                </div>
              );
            })
          ) : (
            <div className="flex justify-center my-3">
              {" "}
              <h4>No Data Found</h4>
            </div>
          )
        ) : (
          <div className="container">
            <Spinner width={"400px"} height={"500px"} />
          </div>
        )}
      </div>
    </div>
  );
}
