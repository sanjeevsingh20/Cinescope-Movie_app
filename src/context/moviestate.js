import moviecontext from "./movie";
import TMDB_TOKEN from "../Config/Credential";
import { useEffect, useState } from "react";
const Moviestate = (props) => {
  const Base_url = "https://api.themoviedb.org/3/";
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: "Bearer " + TMDB_TOKEN,
    },
  };
  const fetchdata = async (url) => {
    try {
      const data  = await fetch(Base_url + url, options);
      const json = await data.json()
      return json;
    } catch (error) {
      console.log(error);
    }
  };

  const useFetch = (url) => {
    const [data, setdata] = useState(null);
    const [load, setload] = useState(null);
    const [err, seterr] = useState(null);
    useEffect(() => {
      setload(true);
      fetchdata(url)
        .then((response) => {
        
          setdata(response);
          setload(false);
        })
        .catch((error) => {
          setload(false);
          seterr(error);
        });
    }, [url]);
    return { data, load, err };
  };
  return (
    <moviecontext.Provider value={{useFetch,fetchdata}}>
      {props.children}
    </moviecontext.Provider>
  );
};

export default Moviestate