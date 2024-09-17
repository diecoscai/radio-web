import React, { useState } from "react";
import RadioByCountryContent from "./RadioByCountryContent";

const RadioListByCountry = () => {
  const [country, setCountry] = useState("all");
  

  const handleCountryChange = (newCountry) => {
    setCountry(newCountry === country ? "all" : newCountry);
  };

  return (
    <div className="treanding_songs_wrapper release_wrapper ms_cover">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <div className="ms_heading_wrapper">
              <h1>Radio Stations by Country</h1>
            </div>
            <div className="relaese_viewall_wrapper">
              <a className={`nav-link ${country === "all" ? "active" : ""}`}
                    onClick={() => handleCountryChange("null")}>
                view all <i className="flaticon-right-arrow"></i>
              </a>
            </div>
            <div className="release_tabs_wrapper">
              <ul className="nav nav-tabs">
                <li className="nav-item">
                  <a
                    className={`nav-link ${country === "esp" ? "active" : ""}`}
                    onClick={() => handleCountryChange("esp")}
                  >
                    Spain
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className={`nav-link ${country === "usa" ? "active" : ""}`}
                    onClick={() => handleCountryChange("usa")}
                  >
                    United States
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-12 col-lg-12 col-md-12">
            <RadioByCountryContent key={country} country={country} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default RadioListByCountry;