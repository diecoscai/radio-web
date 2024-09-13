import React from "react";
import SliderContent from "./SliderContent";

const RadioList = () => {
  return (
    <div className="treanding_songs_wrapper release_wrapper ms_cover">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <div className="ms_heading_wrapper">
              <h1>Radio Stations by Country</h1>
            </div>
            <div className="relaese_viewall_wrapper">
              <a href="#">
                {" "}
                view all <i className="flaticon-right-arrow"></i>
              </a>
            </div>
            <div className="release_tabs_wrapper">
              <ul className="nav nav-tabs">
                <li className="nav-item">
                  {" "}
                  <a
                    className="nav-link active"
                    data-toggle="tab"
                    href="#home"
                  >
                    {" "}
                    Spain
                  </a>
                </li>
                <li className="nav-item">
                  {" "}
                  <a className="nav-link" data-toggle="tab" href="#menu1">
                    United States
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-12 col-lg-12 col-md-12">
            <SliderContent/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RadioList;