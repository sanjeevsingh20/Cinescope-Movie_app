import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Front from "./components/Front";
import Moviestate from "./context/moviestate";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Notfound from "./components/NotFound";
import Movies from "./components/Movies";
import TvShows from "./components/TvShows";
import MovieCategory from "./components/MovieCategory";
import TVCategory from "./components/TVCategory";
import BackToTop from "./components/BackToTop";
import DetailsPage from "./components/DetailsPage";
import About from "./components/About";
import Contact from "./components/Contact";
import Discover from "./components/Discover";

function App() {
  return (
    <Moviestate>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Front />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/movie" element={<Movies />}></Route>
          <Route path="/movie/popular" element={<MovieCategory />}></Route>
          <Route path="/movie/upcoming" element={<MovieCategory  />}></Route>
          <Route path="/movie/trending" element={<MovieCategory  />}></Route>
          <Route path="/movie/now_playing" element={<MovieCategory  />}></Route>
          <Route path="/tv/popular" element={<TVCategory />}></Route>
          <Route path="/tv/Air_Today" element={<TVCategory  />}></Route>
          <Route path="/tv/top_rated" element={<TVCategory  />}></Route>
          <Route path="/tv/on_TV" element={<TVCategory  />}></Route>
          <Route path="/tv" element={<TvShows />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Contact-us" element={<Contact />}></Route>
          <Route path="/:mediatype/:id"  element={<DetailsPage />}></Route>
          <Route path="discover/:mediatype"  element={<Discover />}></Route>
          <Route path="/:mediatype/:category/:id"  element={<DetailsPage />}></Route>
          <Route path="*" element={<Notfound />}></Route>
        </Routes>
        <Footer />
        <BackToTop/>
        
      </Router>
    </Moviestate>
  );
}

export default App;
