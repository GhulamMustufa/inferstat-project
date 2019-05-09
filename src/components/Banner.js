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
                    <div id="sendmessage">Your message has been sent. Thank you!</div>
            <div id="errormessage" />
            <div className="form-sec">
              <form action method="post" role="form" className="contactForm">
                <div className="col-md-12 form-group">
                  <input
                    type="text"
                    name="name"
                    className="form-control text-field-box"
                    id="name"
                    placeholder="Your Name"
                    data-rule="minlen:4"
                    data-msg="Please enter at least 4 chars"
                  />
                  <div className="validation" />
                </div>
                <div className="col-md-12 form-group">
                  <input
                    type="email"
                    className="form-control text-field-box"
                    name="email"
                    id="email"
                    placeholder="Your Email"
                    data-rule="email"
                    data-msg="Please enter a valid email"
                  />
                  <div className="validation" />
                </div>
                <div className="col-md-12 form-group">
                  <input
                    type="text"
                    className="form-control text-field-box"
                    name="subject"
                    id="subject"
                    placeholder="Company"
                    data-rule="minlen:4"
                    data-msg="Please enter at least 8 chars of subject"
                  />
                  <div className="validation" />
                </div>
                <div className="col-md-12 form-group">
                  <textarea
                    className="form-control text-field-box"
                    name="message"
                    rows={5}
                    data-rule="required"
                    data-msg="Please write something for us"
                    placeholder="Cover Letter"
                    defaultValue={""}
                  />
                  <div className="validation" />
                  <button
                    className="button-medium"
                    id="contact-submit"
                    type="submit"
                    name="contact"
                  >
                    Submit Now
                  </button>
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
