import React from "react";

const AdBanner = () => {
  return (
    <>
      <div
        className="add_banner_wrapper ms_cover"
        style={{ marginTop: "30px" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="add_banner_img_wrapper ms_cover">
                <a href="#">
                  <img
                    src="images/add2.png"
                    className="img-responsive"
                    alt="img"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdBanner;