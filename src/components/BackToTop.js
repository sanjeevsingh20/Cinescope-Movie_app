import React, { useEffect, useState } from "react";
import { Ripple, initTE } from "tw-elements";

export default function BackToTop() {
  initTE({ Ripple });

  const [typo , settypo]=useState("hidden")

  const scrollFunction = () => {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      settypo(" ")
    } else {
      settypo("hidden")
    }
   
  };
  const backToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

useEffect(()=>{
  window.addEventListener("scroll", scrollFunction);
})
  

  return (
    <button
      type="button"
      dataTeRippleInit
      dataTeRippleColor="light"
      className={`fixed bottom-5 right-5 ${typo} rounded-full bg-red-600 p-3 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg`}
      id="btn-back-to-top"
      onClick={backToTop}
    >
      <i className="fa-solid fa-jet-fighter-up"></i>
    </button>
  );
}
