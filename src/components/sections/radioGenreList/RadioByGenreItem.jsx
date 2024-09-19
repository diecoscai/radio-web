import React, {useContext} from "react";
import PropTypes from "prop-types";
import { getImageUrl } from "../../../utils/imageUtils";
import RadioContext from "../../../context/RadioContext";


const RadioByCategoryItem = ({ radio }) => {
  const { selectedRadio, setSelectedRadio } = useContext(RadioContext);

  const handleRadioSelect = (e) => {
    e.preventDefault();
    setSelectedRadio(radio);
  };

  const isSelected = selectedRadio && selectedRadio.title === radio.title;

  return (
    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 pd1">
      <div className="treanding_slider_main_box release_box_main_content ms_cover">
        <img src={getImageUrl(radio.img_file)} alt="img" />
        <div className="release_content_artist" >
          <p>
            <a>{radio.title}</a>
          </p>
        </div>
        <div className="ms_treanding_box_overlay release_box_overlay">
          <div className="ms_tranding_box_overlay"></div>
          <div className="tranding_play_icon">
          <a onClick={handleRadioSelect}>
              <i className="flaticon-play-button"></i>
            </a>
          </div>
        </div>
      </div>
    </div>

  );
}

RadioByCategoryItem.propTypes = {
  radio: PropTypes.shape({
    img_file: PropTypes.string.isRequired,
    stream_url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  }).isRequired
};
export default RadioByCategoryItem;