import React from "react";
import "../CSS/filter.css"
export default function Switches(props) {
  const { data, trend } = props;
  const ontabchange = (e) => {
    var li = e.currentTarget;
    trend(li.innerText);
   
  };

  return (
    <div>
      <div className="btn-toolbar mx-3 ">
        <div className="btn-group md-col">
          {data?.map((res, index) => {
            return (
              <div className="mx-2 my-2">
                {/* <input
                  type="radio"
                  className="btn btn-default  bg-dark text-white px-2"
                  name="options"
                  id={`${index}`}
                  autocomplete="off"
                  value={res}
                  placeholder={res}
                  onClick={ontabchange}
                />

                <label forHtml="options" className="text-dark ">
                  {(
                    res.split("_")[0] +
                    " " +
                    (res.split("_")[1] ? res.split("_")[1] : "")
                  ).toUpperCase()}
                </label> */}
                <span onClick={ontabchange} vocab="" className="btn btn-default w120p  bg-danger text-white round ">
                {/* {(
                    res.split("_")[0] +
                    " " +
                    (res.split("_")[1] ? res.split("_")[1] : "")
                  ).toUpperCase()} */}
                  {res}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
