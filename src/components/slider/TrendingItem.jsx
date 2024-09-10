import React from "react";
import PropTypes from "prop-types";

const TrendingItem = ({radio}) => {
    return (
      <div className="item">
        <div className="treanding_slider_main_box ms_cover">
          <img src={radio.img_url} alt="img" />
          <div className="ms_treanding_box_overlay">
            <div className="ms_tranding_box_overlay"></div>
            <div className="tranding_play_icon">
              <a href={radio.stream}>
                <i className="flaticon-play-button"></i>
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