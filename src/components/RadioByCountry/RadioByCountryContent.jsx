import { useEffect, useState } from "react";
import RadioByCountryItem from "./RadioByCountryItem";
import PropTypes from "prop-types";
import { getRadioByCountry, getTrendingRadios } from "../../services/RadioServices";
import useWindowWidth from "../../utils/useWindowWidth";
import RadioByCountryCarousel from "./RadioByCountryCarousel";
const RadioByCountryContent = ({ country }) => {
  const [radios, setRadios] = useState([]);
  const windowWidth = useWindowWidth();

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

  
  const renderRadiosComponent = () => {
    if (windowWidth <= 1024) {
      console.log("radiosASD: ", radios);
      return <RadioByCountryCarousel radios={radios.slice(0, 12)} />
    }else{
      return radios.slice(0, 12).map((item, index) => (
        <RadioByCountryItem key={index} radio={item} />
      ));
    }
  }

  return (
    <div className="tab-content">
      <div id="home" className="tab-pane active">
        <div className="row">
          {renderRadiosComponent()}
        </div>
      </div>
    </div>
  );
}

RadioByCountryContent.propTypes = {
  country: PropTypes.string,
};

export default RadioByCountryContent;