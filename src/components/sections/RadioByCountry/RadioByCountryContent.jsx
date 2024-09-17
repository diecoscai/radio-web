import React, { useEffect, useState } from "react";
import RadioByCountryItem from "./RadioByCountryItem";
import PropTypes from "prop-types";
import { getRadioByCountry, getTrendingRadios } from "../../../services/RadioServices";

const RadioByCountryContent = ({ country }) => {
  const [radios, setRadios] = useState([]);

  useEffect(() => {
    const fetchRadios = async () => {
      try {
        const result = country === "all" || country === "null"
          ? await getTrendingRadios()
          : await getRadioByCountry(country);
        setRadios(result);
      } catch (error) {
        console.error("Error fetching radios:", error);
      }
    };

    fetchRadios();
  }, [country]);


  return (
    <div className="tab-content">
      <div id="home" className="tab-pane active">
        <div className="row">
          {radios && radios.slice(0, 12).map((item, index) => (
            <RadioByCountryItem key={index} radio={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

RadioByCountryContent.propTypes = {
  country: PropTypes.string,
};

export default RadioByCountryContent;