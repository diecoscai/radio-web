import React from "react";

const Footer = () => {
    return(
        <div className="footer_wrapper ms_cover">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-12 col-sm-12">
              <div className="footer_widget footer_about_wrapper ms_cover">
                <div className="wrapper_first_image">
                  <a href="index.html">
                    <img
                      src="images/logo.png"
                      className="img-responsive"
                      alt="logo"
                    />
                  </a>
                </div>
                <div className="abotus_content">
                  <p>
                    Sed do eiusmod tempor unt ut labore et dolore magna liqua.
                    Ut enim ad minim veniam...
                  </p>
                </div>
                <ul className="footer_about_link_wrapper ms_cover">
                  <li>
                    {" "}
                    <i className="fa fa-phone"></i>808 - 111 - 9999
                  </li>
                  <li>
                    {" "}
                    <a href="#">
                      <i className="fa fa-envelope"></i>Tunein@example.com
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a href="#">
                      <i className="fas fa-user-alt"></i>Tunein@support.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12 col-sm-12">
              <div className="footer_widget footer_blog_wrapper ms_cover">
                <h4>usefull links</h4>
                <ul className="footer_about_link_wrapper usefull_linkx ms_cover">
                  <li>
                    {" "}
                    <a href="#">Terms of Use</a>
                  </li>
                  <li>
                    {" "}
                    <a href="#">Privacy Policy </a>
                  </li>
                  <li>
                    {" "}
                    <a href="#">Feedback </a>
                  </li>

                  <li>
                    {" "}
                    <a href="#">Report an issue </a>
                  </li>
                  <li>
                    {" "}
                    <a href="#">Sitemap </a>
                  </li>
                  <li>
                    {" "}
                    <a href="#">FAQ </a>
                  </li>
                  <li>
                    {" "}
                    <a href="#">advertise </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* <div className="col-lg-3 col-md-6 col-12 col-sm-12">
              <div className="footer_widget footer_contact_wrapper ms_cover">
                <h4>download app </h4>
                <p>All type of app’s available for download</p>
                <span>
                  <a href="#">
                    <img
                      src="images/app_btn1.png"
                      className="img-responsive"
                      alt="img"
                    />
                  </a>
                </span>
                <span>
                  <a href="#">
                    <img
                      src="images/app_btn2.png"
                      className="img-responsive"
                      alt="img"
                    />
                  </a>
                </span>
                <span>
                  <a href="#">
                    <img
                      src="images/app_btn3.png"
                      className="img-responsive"
                      alt="img"
                    />
                  </a>
                </span>
              </div>
            </div> */}
            {/* <div className="col-lg-3 col-md-6 col-12 col-sm-12">
              <div className="footer_widget footer_contact_wrapper ms_cover">
                <h4>newsletter</h4>
                <p>Our latest news & Special Offers </p>
                <div className="contect_form_footer ms_cover">
                  <input type="text" name="name" placeholder="name" />
                </div>
                <div className="contect_form_footer ms_cover">
                  <input type="text" name="email" placeholder="Email" />
                </div>
                <div className="lang_apply_btn footer_cont_btn">
                  <ul>
                    <li>
                      <a href="#">
                        {" "}
                        <i className="flaticon-play-button"></i>subscribe
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    );
}

export default Footer;