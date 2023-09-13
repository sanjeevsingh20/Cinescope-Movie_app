import React from "react";
import { Link } from "react-router-dom";

export default function Notfound() {
  return (
    <div>
      <div className="flex items-center justify-center h-screen my-24">
        <div className="flex-col space-y-4 text-center">
          <div className="text-fuchsia-600 text-xl font-medium">
            <div className="d-flex justify-center">
              {/* <img
                src="https://i.postimg.cc/MHRpc3Dw/7748166-removebg-preview.png"
                alt="image-removebg-preview-11"
                border="0"
                style={{ height: "300px" }}
              /> */}
               <lottie-player src="https://lottie.host/f8afd9d3-cc2a-4d3a-98b8-f6d2ca88ca69/dZtpsVPFqt.json" speed="1" style={{width: "500px", height: "400px"}} loop  autoplay direction="1" mode="normal">
                </lottie-player>
            </div>
          </div>
          <div className="text-7xl font-bold text-red-700">404</div>
          <div className="text-5xl font-medium text-red-700">
            Page not found
          </div>
          <div className="text-red-500">
            Sorry, the page you're looking for isn't available.
          </div>
          <div className="flex items-center justify-center">
            <Link to="/">
              <div className="bg-fuchsia-600 px-4 py-1 text-red-500 font-medium rounded-lg  hover:scale-105 cursor-pointer">
                Go to Homepage
              </div>
            </Link>
          </div>
        </div>
      </div>
      <script src="https://cdn.tailwindcss.com"></script>
    </div>
  );
}
