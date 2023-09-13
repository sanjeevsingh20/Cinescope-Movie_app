import React, { useState } from "react";
import "../CSS/filter.css";

export default function Filter(props) {
  const { dataset, type, title, tabs, adult, page_no, language, languages } =
    props;
  const [state, setstate] = useState("");
  const [lang, setlang] = useState("Select");
  const onchange = (e) => {
    setstate(e.target.value);
  };
  const handle = (e) => {
    if (e.keyCode == 13) {
      tabs(state);
    }
  };
  const handleclick = (e) => {
    var li = e.currentTarget;
    page_no(1);
    adult(li.innerText);
  };
  const handleselect = (e) => {
    var li = e.currentTarget;
    setlang(li.innerText);
  };

  const handlevalue = (e) => {
    page_no(1);
    language(e.target.value);
  };

  return (
    <div className="flex w-25 mx-2 h-20  my-2 shadow rounded  bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 flex-col">
      <h6 className="text-center">{title}</h6>
      <div className="flex  w-full h-full py-2 flex-row justify-center bg-white justify-start ">
        {dataset.map((data) => {
          if (type === "search") {
            return (
              <input
                type="search"
                onChange={onchange}
                onKeyDown={handle}
                className="w-full h-full outline-none	px-3 border-b-2	"
                placeholder={`Include ${data}`}
              />
            );
          }
          if (type === "radio") {
            return (
              <div className="w100p mx-1">
                <span
                  className="w-100 cursor-pointer round btn btn  bg-danger text-white"
                  onClick={handleclick}
                >
                  {data}
                </span>
              </div>
            );
          }
          if (type === "select") {
            return (
              <div className="w-50">
                <select
                  className="form-select"
                  aria-label="Default select example"
                  onChange={handlevalue}
                >
                  <option selected className="text-dark" disabled>
                    {lang}
                  </option>
                  {languages?.map((data) => {
                    return (
                      <option
                        value={data?.iso_639_1}
                        onClick={handleselect}
                        className="text-dark"
                      >
                        {data.english_name}
                      </option>
                    );
                  })}
                </select>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}
