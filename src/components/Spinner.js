import React from "react";
import loading from "./loading.gif";

export default function Spinner(props) {
  const { width, height } = props;
  return (
    <div className="w-full flex justify-center">
      <img src={loading} alt="" />
    </div>
  );
}
