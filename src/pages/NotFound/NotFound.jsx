import React from "react";

const NotFound = () => {
    return (
        <>
        {/* inner Title Start */}
            <div className="indx_title_main_wrapper">
                <div className="title_img_overlay"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div className="indx_title_left_wrapper ms_cover">
                                <h2>404 error</h2>

                                <ul>
                                    <li><a href="#">Home</a> &nbsp;&nbsp;&nbsp;/</li>
                                    <li>404 error</li>
                                </ul>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        {/* inner Title End */}
            {/* error wrapper start */}
            <div className="error_wrapper ms_cover">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <img src="/images/error.png" alt="img" className="img-responsive"/>
                                <div className="error_page_cntnt ms_cover">
                                    <h3>`Sorry, This Page Isn&apos;t available :(`</h3>
                                    <div className="lang_apply_btn home_btn ms_cover">
                                        <ul>
                                            <li>
                                                <a href="/">home page</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* error wrapper End */}
        </>
    );
}

export default NotFound;