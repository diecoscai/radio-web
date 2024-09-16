import React from "react";

const SliderItem = () => {
    return(
        <div className="treanding_slider_main_box release_box_main_content ms_cover">
        <img src="images/rel.png" alt="img" />
        <div className="release_content_artist">
          <p>
            <a href="#">Jabariya Jodi</a>
          </p>
          <p className="various_artist_text">
            <a href="#">Various Artists</a>
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
    );
}

export default SliderItem;