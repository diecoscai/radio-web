import React, { useState, useEffect } from "react";
import RadioByGenreContent from "./RadioByGenreContent";
import { getRadioGenres } from "../../../services/RadioServices";

const RadioByGenreList = () => {

  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("all");

  useEffect(() => {
    const fetchGenres = async () => {
      const genres = await getRadioGenres();
      setGenres(genres);
    };
    fetchGenres();
  }, []);

  const handleGenreChange = (newGenre) => {
    setSelectedGenre(newGenre);
  };

  return (
    <div className="treanding_songs_wrapper release_wrapper ms_cover">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <div className="ms_heading_wrapper">
              <h1>Radio Stations by Genres</h1>
            </div>
            <div className="relaese_viewall_wrapper">
              <a 
                className={`nav-link ${selectedGenre === "all" ? "active" : ""}`}
                onClick={() => handleGenreChange("all")}
              >
                view all <i className="flaticon-right-arrow"></i>
              </a>
            </div>
            <div className="release_tabs_wrapper">
              <ul className="nav nav-tabs">
                {genres.map((genre) => (
                  <li className="nav-item" key={genre}>
                    <a
                      className={`nav-link ${selectedGenre === genre ? "active" : ""}`}
                      onClick={() =>
                        handleGenreChange(genre)
                      }
                    >
                      {genre}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-xl-12 col-lg-12 col-md-12">
            <RadioByGenreContent key={`genre-${selectedGenre}`} genre={selectedGenre} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default RadioByGenreList;