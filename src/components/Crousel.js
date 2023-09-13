import React from "react";
import "../CSS/login.css";
export default function Crousel() {
  return (
    <div className="">
      <div
        id="carouselExampleCaptions"
        className="carousel slide "
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://assets.vogue.in/photos/5ce412599cc0c0b8f5f9b4bf/master/pass/Everything-you-need-to-know-before-watching-Marvel-movies-this-year.jpg"
              className="d-block w-100 vh80"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://i.ytimg.com/vi/iQ1X9N2o_UA/maxresdefault.jpg"
              className="d-block w-100 vh80"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="http://images6.fanpop.com/image/photos/34500000/Transformers-transformers-34551857-1920-1200.jpg"
              className="d-block w-100 vh80"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
