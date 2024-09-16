import React from "react";
import PropTypes from "prop-types";
import { getImageUrl } from "../../../utils/imageUtils";

const RadioByCountryItem = ({ radio }) => {
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
            <a href="#">
              <i className="flaticon-play-button"></i>
            </a>
          </div>
        </div>
      </div>
    </div>

  );
}

RadioByCountryItem.propTypes = {
  radio: PropTypes.shape({
    img_file: PropTypes.string.isRequired,
    stream_url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  }).isRequired
};
export default RadioByCountryItem;