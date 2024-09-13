import React from "react";
import SliderItem from "./SliderItem";

const SliderContent = () =>{
    return(
        <div className="tab-content">
        <div id="home" className="tab-pane active">
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 pd1">
              <SliderItem/>
            </div>
          </div>
        </div>
      </div>
    );
}

export default SliderContent;