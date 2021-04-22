import { useState, useEffect } from "react";
import axios from "../axios";
import requests from "../request";
import "./Banner.scss";
import { AiFillCaretRight } from "react-icons/ai";
import { AiOutlineInfoCircle } from "react-icons/ai";

const Banner = (props) => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const req = await axios.get(requests.fetchNetflixOriginals); // return movie array but we need one for banner
      const randomInt = Math.floor(Math.random() * req.data.results.length) + 1; // it generates random int between 1 to length of results
      setMovie(req.data.results[randomInt]); // random movie for banner
    };

    fetchData();
  }, []);

  return (
    <div
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPositio: "center center",
        height: "85vh",
        position: "relative",
        top: "0",
        left: "0",
        marginTop: "-30px",
      }}
    >
      <div className="banner-content">
        <h1 className="banner-title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <h2 className="banner-description">{movie?.overview}</h2>
        <div className="banner-buttons-wrapper">
          <button className="left-button banner-buttons">
            <AiFillCaretRight className="right-arrow-icon" size={"35"} />
            <span className="play-button">Play</span>
          </button>
          <button className="right-button banner-buttons">
            <AiOutlineInfoCircle
              className="info-icon"
              color="white"
              size={"35"}
            />
            <span>More info</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
