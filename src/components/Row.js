import { useState, useEffect } from "react";
import axios from "../axios";
import './Row.scss';
const baseImgUrl = "https://image.tmdb.org/t/p/original";


const Row = ({ title, fetchUrl, isLarge }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function data() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    data();
  }, [fetchUrl]);

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row-posters">
        {movies.map((movie) => {
          return (
            <img
              src={`${baseImgUrl}${isLarge ? movie.poster_path : movie.backdrop_path}`}
              className={`row-poster ${isLarge && "row_posterLarge"}`}
              key={movie.id}
              alt={movie.original_name}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Row;
