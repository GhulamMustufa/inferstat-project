import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

export class Banner extends Component {
  render() {
    return (
      <div id="banner" className="section-padding">
        <div className="container">
          <div className="row">
            <div className="jumbotron">
              <h1 className="small">
                Automating the final step of trading decisions
              </h1>

              <p className="big">InferStat offers predictive research tools</p>
              <div className="col-md-12 bannerButtons">
                <Link
                  to="aboutUs"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="btn btn-banner"
                >
                  About Us
                  <i className="fa fa-send" />
                </Link>
                <a
                  href="#"
                  className="btn btn-banner"
                  data-toggle="modal"
                  data-target="#myModal3"
                >
                  Beta SignUp
                  <i className="fa fa-send" />
                </a>
              </div>

              <div id="myModal3" class="modal fade" role="dialog">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <button type="button" class="close" data-dismiss="modal">
                        &times;
                      </button>
                      <h3 class="modal-title">Inferstat Beta SignUp</h3>
                    </div>
                    <div class="modal-body">
                      <div id="mc_embed_signup">
                        <form
                          action="https://gmail.us20.list-manage.com/subscribe/post?u=5f73921cf79c449c65411ca5f&id=063d151c2f"
                          method="post"
                          id="mc-embedded-subscribe-form"
                          name="mc-embedded-subscribe-form"
                          className="validate"
                          target="_blank"
                          noValidate
                        >
                          <div id="mc_embed_signup_scroll">
                            <div className="indicates-required">
                              <span className="asterisk">*</span> indicates
                              required
                            </div>
                            <div className="mc-field-group">
                              <label htmlFor="mce-FNAME">
                                First Name <span className="asterisk">*</span>
                              </label>
                              <input
                                type="text"
                                placeholder="enter first name"
                                name="FNAME"
                                className="required"
                                id="mce-FNAME"
                              />
                            </div>
                            <div className="mc-field-group">
                              <label htmlFor="mce-LNAME">
                                Last Name <span className="asterisk">*</span>
                              </label>
                              <input
                                type="text"
                                placeholder="enter last name"
                                name="LNAME"
                                className="required"
                                id="mce-LNAME"
                              />
                            </div>
                            <div className="mc-field-group">
                              <label htmlFor="mce-EMAIL">
                                Email Address{" "}
                                <span className="asterisk">*</span>
                              </label>
                              <input
                                type="email"
                                placeholder="enter email"
                                name="EMAIL"
                                className="required email"
                                id="mce-EMAIL"
                              />
                            </div>
                            <div className="mc-field-group size1of2">
                              <label htmlFor="mce-MMERGE4">Phone Number </label>
                              <input
                                type="text"
                                name="MMERGE4"
                                className
                                placeholder="enter phone number"
                                id="mce-MMERGE4"
                              />
                            </div>
                            <div className="mc-field-group">
                              <label htmlFor="mce-MMERGE3">Company </label>
                              <input
                                type="text"
                                placeholder="enter company name"
                                name="MMERGE3"
                                className
                                id="mce-MMERGE3"
                              />
                            </div>
                            <div id="mce-responses" className="clear">
                              <div
                                className="response"
                                id="mce-error-response"
                                style={{ display: "none" }}
                              />
                              <div
                                className="response"
                                id="mce-success-response"
                                style={{ display: "none" }}
                              />
                            </div>{" "}
                            {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups*/}
                            <div
                              style={{ position: "absolute", left: "-5000px" }}
                              aria-hidden="true"
                            >
                              <input
                                type="text"
                                name="b_5f73921cf79c449c65411ca5f_063d151c2f"
                                tabIndex={-1}
                                defaultValue
                              />
                            </div>
                            <div className="clear">
                              <input
                                type="submit"
                                defaultValue="Subscribe"
                                name="subscribe"
                                id="mc-embedded-subscribe"
                                className="button"
                              />
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-default"
                        data-dismiss="modal"
                      >
                        Close
                      </button>
                    </div>
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

export default Banner;
