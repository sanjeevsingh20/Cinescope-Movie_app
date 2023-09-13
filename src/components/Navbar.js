import React from "react";
import { Link } from "react-router-dom";
import "../CSS/Navbar.css";
// Initialization for ES Users
import { Offcanvas, Ripple, initTE } from "tw-elements";

initTE({ Offcanvas, Ripple });
export default function Navbar() {
  return (
    <div className="sticky top-0 z-3 ">
      <div className="z-10 bg-white border-b-2">
        <header className="text-gray-600 body-font ">
          <div className=" mx-auto flex flex-wrap p-1 flex-row js-spc md:flex-row items-center">
            <Link
              className="flex title-font font-medium items-center text-gray-900  md:mb-0"
              to="/"
            >
              <img
                src="https://i.postimg.cc/BZ2QsywZ/image-removebg-preview-16.png"
                alt=""
                width={"150"}
                height={"20"}
              />
            </Link>
            <nav className="md:ml-auto font-normal w23-no	 flex flex-wrap items-center text-blue justify-center">
              <Link
                to="/"
                className="mx-2 hover:text-red-900 text-red-500 text-decoration-none"
              >
                Home
              </Link>

              <div className="btn-group mx-2">
                <a href="/discover/movie">
                  <button
                    type="button"
                    className="btn  rounded-0 text-danger font-weight-bold"
                  >
                    Movies
                  </button>
                </a>

                <button
                  type="button"
                  className="btn btn-danger dropdown-toggle dropdown-toggle-split"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <span className="visually-hidden">Toggle Dropdown</span>
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="/movie/popular">
                      Popular
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/movie/trending">
                      Top Rated
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/movie/upcoming">
                      Up Coming
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="/movie/now_playing">
                      Now Playing
                    </a>
                  </li>
                  
                </ul>
              </div>

              <div className="btn-group mx-2">
                <a href="/discover/tv">
                  <button
                    type="button"
                    className="btn  rounded-0 text-danger font-weight-bold"
                  >
                    TV Shows
                  </button>
                </a>

                <button
                  type="button"
                  className="btn btn-danger dropdown-toggle dropdown-toggle-split"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <span className="visually-hidden">Toggle Dropdown</span>
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="/tv/popular">
                      Popular
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/tv/Air_Today">
                      Airing Today
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/tv/on_TV">
                      On TV
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="/tv/top_rated">
                      Top Rated
                    </a>
                  </li>
                  
                </ul>
              </div>
              <Link
                to="/About"
                className="mx-2 	hover:text-red-900 text-red-500 text-decoration-none"
              >
                About
              </Link>
              <Link
                to="/Contact-us"
                className="mx-2 	hover:text-red-900 text-red-500 text-decoration-none"
              >
                Contact
              </Link>
              <div className="btn-group">
                <button
                  type="button"
                  className="btn  dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <span className="text-red-500">Search</span>
                </button>
                <ul className="dropdown-menu">
                <li>
                    <Link className="dropdown-item" to="/movie">
                      Movies
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/tv">
                      Tv Shows
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
            <div className="btn-group dis-none">
                <button
                  type="button"
                  className="btn  dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <span className="text-red-500">Search</span>
                </button>
                <ul className="dropdown-menu">
                <li>
                    <Link className="dropdown-item" to="/movie">
                      Movies
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/tv">
                      Tv Shows
                    </Link>
                  </li>
                </ul>
              </div>
            <button
              className="btn  dis-none"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasWithBackdrop"
              aria-controls="offcanvasWithBackdrop"
            >
              <i className="fa-solid fa-bars text-red-500"></i>
            </button>
            

            <div
              className="offcanvas offcanvas-start"
              tabIndex="-1"
              id="offcanvasWithBackdrop"
              aria-labelledby="offcanvasWithBackdropLabel"
            >
              <div className="offcanvas-header">
                <h5
                  className="mb-0 font-semibold leading-normal text-red-700"
                  id="offcanvasRightLabel"
                >
                  Cinescope
                </h5>
                <button
                  type="button"
                  className=" text-reset "
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                >
                  <i className="fa-brands fa-x-twitter text-red-500 text-xl"></i>
                </button>
              </div>
              <div className="offcanvas-body">
                <nav className="md:ml-auto font-normal flex-col	 flex flex-wrap items-center text-blue justify-center">
                  <Link
                    to="/"
                    className="my-3 mx-3 hover:text-red-900 text-red-500 text-decoration-none"
                  >
                    Home
                  </Link>

                  <div className="btn-group  my-3">
                    <a href="/discover/movie">
                      <button
                        type="button"
                        className="btn  rounded-0 text-danger font-weight-bold"
                      >
                        Movies
                      </button>
                    </a>

                    <button
                      type="button"
                      className="btn btn-danger dropdown-toggle dropdown-toggle-split"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <span className="visually-hidden">Toggle Dropdown</span>
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="/movie/popular">
                          Popular
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/movie/trending">
                          Top Rated
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/movie/upcoming">
                          Up Coming
                        </a>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <a className="dropdown-item" href="/movie/now_playing">
                          Now Playing
                        </a>
                      </li>
                      
                      
                    </ul>
                  </div>

                  <div className="btn-group  my-3">
                    <a href="/discover/tv">
                      <button
                        type="button"
                        className="btn  rounded-0 text-danger font-weight-bold"
                      >
                        TV Shows
                      </button>
                    </a>

                    <button
                      type="button"
                      className="btn btn-danger dropdown-toggle dropdown-toggle-split"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <span className="visually-hidden">Toggle Dropdown</span>
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="/tv/popular">
                          Popular
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/tv/Air_Today">
                          Airing Today
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/tv/on_TV">
                          On TV
                        </a>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <a className="dropdown-item" href="/tv/top_rated">
                          Top Rated
                        </a>
                      </li>
                      
                    </ul>
                  </div>
                  <Link
                    to="/About"
                    className="mx-2 my-3	hover:text-red-900 text-red-500 text-decoration-none"
                  >
                    About
                  </Link>
                  <Link
                    to="/Contact-us"
                    className="mx-2 my-3	hover:text-red-900 text-red-500 text-decoration-none"
                  >
                    Contact
                  </Link>
                </nav>
              </div>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
}
