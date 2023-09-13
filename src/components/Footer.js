import React from "react";
// import "../Css/Footer.css"
import "../CSS/Footer.css";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
        className="filling"
         
          fill-opacity="1"
          d="M0,224L60,197.3C120,171,240,117,360,122.7C480,128,600,192,720,208C840,224,960,192,1080,181.3C1200,171,1320,181,1380,186.7L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg>
      <div className=" bg-grey1">
        <footer className="text-gray-600 body-font">
          <div className="container px-5  mx-auto">
            <div className="flex flex-wrap md:text-left text-center justify-center order-first">
              <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                <h2 className="title-font font-medium text-red-400 tracking-widest text-sm mb-3">
                  Movies
                </h2>
                <nav className="list-none">
                  <li className="mb-2">
                    <a
                      className="text-white hover:text-gray-800 no-underline"
                      href="/movie/popular"
                    >
                      Popular
                    </a>
                  </li>
                  <li className="mb-2">
                    <a
                      className="text-white hover:text-gray-800 no-underline"
                      href="/movie/top_rated"
                    >
                      Top Rated
                    </a>
                  </li>
                  <li className="mb-2">
                    <a
                      className="text-white hover:text-gray-800 no-underline"
                      href="/movie/upcoming"
                    >
                      Up Coming
                    </a>
                  </li>
                  <li className="mb-2">
                    <a
                      className="text-white hover:text-gray-800 no-underline"
                      href="/movie/now_playing"
                    >
                      {" "}
                      Now Playing
                    </a>
                  </li>
                </nav>
              </div>
              <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                <h2 className="title-font font-medium text-red-400 tracking-widest text-sm mb-3 no-underline">
                  TV Shows
                </h2>
                <nav className="list-none mb-10">
                  <li className="mb-2">
                    <a
                      className="text-white hover:text-gray-800 no-underline"
                      href="/tv/popular"
                    >
                      Popular
                    </a>
                  </li>
                  <li className="mb-2">
                    <a
                      className="text-white hover:text-gray-800 no-underline"
                      href="/tv/Air_Today"
                    >
                      Airing Today
                    </a>
                  </li>
                  <li className="mb-2">
                    <a className="text-white hover:text-gray-800 no-underline" href="/tv/on_TV">
                      On TV
                    </a>
                  </li>
                  <li className="mb-2">
                    <a
                      className="text-white hover:text-gray-800 no-underline"
                      href="/tv/top_rated"
                    >
                      Top Rated
                    </a>
                  </li>
                </nav>
              </div>
              <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                <h2 className="title-font font-medium text-red-400 tracking-widest text-sm mb-3">
                  Uncover More
                </h2>
                <nav className="list-none mb-10">
                  <li className="mb-2">
                    <Link className="text-white hover:text-gray-800 no-underline" to="/">
                      Home
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link className="text-white hover:text-gray-800 no-underline" to="/About">
                      About
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link
                      className="text-white hover:text-gray-800 no-underline"
                      to="/Contact-us"
                    >
                      Contact
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link
                      className="text-white hover:text-gray-800 no-underline"
                      to="/login"
                    >
                      Login
                    </Link>
                  </li>
                </nav>
              </div>
            </div>
          </div>
        </footer>
        <footer className="text-gray-600  body-font px-0">
          <div className="bg-grey1">
            <div className="container px-5 py-2 mx-auto flex items-center sm:flex-row flex-col">
              <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                <img
                  src="https://i.postimg.cc/BZ2QsywZ/image-removebg-preview-16.png"
                  alt="logo"
                  className="css-fill"
                  width={"150"}
                  height={"30"}
                />
              </a>
              <p className="text-sm text-white sm:ml-6 sm:mt-0 mt-4">
                © 2020 Cinescope —
                <a
                  href="https://twitter.com/knyttneve"
                  rel="noopener noreferrer"
                  className="text-white ml-1"
                  target="_blank"
                >
                  @sanjeev
                </a>
              </p>
              <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                <a className="text-red-500">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                  </svg>
                </a>
                <a className="ml-3 text-red-500">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                  </svg>
                </a>
                <a className="ml-3 text-red-500">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <rect
                      width="20"
                      height="20"
                      x="2"
                      y="2"
                      rx="5"
                      ry="5"
                    ></rect>
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                  </svg>
                </a>
                <a className="ml-3 text-red-500">
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="0"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="none"
                      d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                    ></path>
                    <circle cx="4" cy="4" r="2" stroke="none"></circle>
                  </svg>
                </a>
              </span>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
