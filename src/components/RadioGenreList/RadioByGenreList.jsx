import { useState, useEffect } from "react";
import { getRadioGenres } from "../../services/RadioServices";
import CarouselComponent from "./CarouselComponent";

const RadioByGenreList = () => {

  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const fetchGenres = async () => {
      const genres = await getRadioGenres();
      setGenres(genres);
    };
    fetchGenres();
  }, []);

  

  return (
    <div className="treanding_songs_wrapper release_wrapper ms_cover">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <div className="ms_heading_wrapper">
              <h1>Radio Stations by Genres</h1>
            </div>
          </div>
          <div className="col-xl-12 col-lg-12 col-md-12">
          {genres.map((genre, index) => (
              <CarouselComponent key={index} genre={genre} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default RadioByGenreList;