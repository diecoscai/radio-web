import React, { useContext } from "react";
import PropTypes from "prop-types";
import RadioContext from "../../context/RadioContext";

const TrendingItem = ({ radio }) => {
  const { selectedRadio, setSelectedRadio } = useContext(RadioContext);

  const handleRadioSelect = (e) => {
    e.preventDefault();
    setSelectedRadio(radio);
  };
  
  const isSelected = selectedRadio && selectedRadio.title === radio.title;
  
  return (
    <div className={`item ${isSelected ? 'selected' : ''}`}>
      <div className="treanding_slider_main_box ms_cover">
        <img src={radio.img_url} alt={radio.title} />
        <div className="ms_treanding_box_overlay">
          <div className="ms_tranding_box_overlay"></div>
          <div className="tranding_play_icon">
            <a href={radio.stream} onClick={handleRadioSelect}>
              <i className={`flaticon-${isSelected ? 'pause' : 'play'}-button`}></i>
            </a>
          </div>
          <div className="tranding_title">{radio.title}</div>
        </div>
      </div>
    </div>
  );
};

TrendingItem.propTypes = {
  radio: PropTypes.shape({
    img_url: PropTypes.string.isRequired,
    stream: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  }).isRequired
};

export default TrendingItem;