import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <div id="aboutUs" className="section-padding">
        <div className="container">
          <div className="page-title text-center">
            <h1>About Us</h1>
            <hr className="pg-titl-bdr-btm" />
          </div>
          <div className="row">
            <div className="col-md-6 ">
              <div className="service-box">
                <div className="service-text1">
                  <h3>Financial and technology expertise</h3>
                  <p className="fontStyle">
                    Our team combines financial and technology expertise to
                    create web-based research tools, which help clients optimise
                    the timing of their trades.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="service-box">
                <div className="service-text1">
                  <h3>Free web tools</h3>
                  <p className="fontStyle">
                    Our web tools do not require software installation and are
                    free of cost, free of licensing requirements and respect the
                    privacy of you and your data.
                  </p>
                </div>
              </div>
            </div>
            <div className="page-title text-center">
              <h1>Our Commitments</h1>

              <hr className="pg-titl-bdr-btm" />
            </div>
          </div>

          <div className="row" id="portfolio-wrapper">
            <div className="row">
              <div className="col-md-4 ">
                <div className="service-box">
                  <div className="service-text1">
                    <h3>Free to Use</h3>
                    <p className="fontStyle">
                      Our web tools are free to use – make use of them as you
                      see fit.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="service-box">
                  <div className="service-text1">
                    <h3>Unrestricted and Unlimited</h3>
                    <p className="fontStyle">
                      Our tools can be used for any purpose – there are no
                      licensing restrictions or requirements for attribution.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="service-box">
                  <div className="service-text1">
                    <h3>No Client Data Retention</h3>
                    <p className="fontStyle">
                      Any data provided by clients is deleted after processing
                      to protect your privacy – data persistence can be
                      explicitly requested at your discretion.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
