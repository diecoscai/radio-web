import { useContext, useCallback } from "react";
import PropTypes from "prop-types";
import RadioContext from "../../context/RadioContext";
import config from "../../config";

const CarouselItem = ({ radio }) => {
  const { selectedRadio, setSelectedRadio } = useContext(RadioContext);

  const handleRadioSelect = useCallback((e) => {
    e.preventDefault();
    setSelectedRadio(radio);
  }, [radio, setSelectedRadio]);

  const isSelected = selectedRadio && selectedRadio.title === radio.title;

  const getImageUrl = (filename) => {
    return `${config.API_URL}/images/${filename}`;
  };

  return (
    <div className="item">
      <div className="treanding_slider_main_box ms_cover">
        <img src={getImageUrl(radio.img_file)} alt="img" />
        <div className="ms_treanding_box_overlay">
          <div className="ms_tranding_box_overlay"></div>
          <div className="tranding_play_icon">
            <a onClick={handleRadioSelect}>
              <i className="flaticon-play-button"></i>
            </a>
          </div>
          <div className="tranding_title">{radio.title}</div>
        </div>
      </div>
    </div>
  );
};

CarouselItem.propTypes = {
  radio: PropTypes.shape({
    img_file: PropTypes.string.isRequired,
    stream_url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  }).isRequired
};

export default CarouselItem;