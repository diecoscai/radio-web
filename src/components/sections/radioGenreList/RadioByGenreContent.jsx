import { useState, useEffect } from "react";
import RadioByCategoryItem from "./RadioByGenreItem";
import { getRadioByGenre } from "../../../services/RadioServices";
import { getTrendingRadios } from "../../../services/RadioServices";
import PropTypes from "prop-types";

const RadioByGenreContent = ({ genre }) => {

    const [radios, setRadios] = useState([]);
    
    useEffect(() => {
        getRadioByGenre(genre).then(setRadios);
    }, [genre]);

    useEffect(() => {
        const fetchRadios = async () => {
          try {
            const result = genre === "all" || genre === "null"
              ? await getTrendingRadios()
              : await getRadioByGenre(genre);
            setRadios(result);
          } catch (error) {
            console.error("Error fetching radios:", error);
          }
        };
    
        fetchRadios();
      }, [genre]);

      
    return (
        <div className="tab-content">
            <div id="home" className="tab-pane active">
                <div className="row">
                    {radios && radios.slice(0, 12).map((item, index) => (
                        <RadioByCategoryItem key={index} radio={item} />
                    ))}
                </div>
            </div>
        </div>

);
}

RadioByGenreContent.propTypes = {
    genre: PropTypes.string.isRequired,
};

export default RadioByGenreContent;

