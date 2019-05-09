import React, { Component } from "react";

export class Career extends Component {
  render() {
    return (
      <div id="careers" className="section-padding">
        <div className="container">
          <div className="page-title text-center">
            <h1>Careers Opportunities</h1>
            <p className="fontStyle">
              Inferstat have great career opportunities for potential
              individuals
            </p>
            <hr className="pg-titl-bdr-btm" />
          </div>

          <div className="row" id="portfolio-wrapper">
            <div className="row">
              <div className="col-md-4 ">
                <div className="service-box">
                  <div className="service-text1">
                    <h3>Change How Markets Trade</h3>
                    <p className="fontStyle">
                      Help our clients through the development of cutting edge
                      technology for trade optimisation. Define best practice.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="service-box">
                  <div className="service-text1">
                    <h3>Harness Your Potential</h3>
                    <p className="fontStyle">
                      We will customise your role to focus on your preferred
                      specialisations or develop you in new areas. Do what you
                      most enjoy.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="service-box">
                  <div className="service-text1">
                    <h3>Achieve Life Objectives </h3>
                    <p className="fontStyle">
                      We offer flexible working approaches to suit your needs.
                      We will support your career objectives alongside other
                      life goals.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="job">
              <div className="col-md-6">
                <div className="team-info">
                  <div className="service-icon1">
                    <i className="fab fa-react fa-5x" />
                  </div>
                  <div className="fig-caption1">
                    <h3>ReactJS Developer</h3>
                    <div className="col-md-12 bannerButtons bannerButtons1">
                      <a
                        href="#"
                        className="btn btn-banner btn-banner1"
                        data-toggle="modal"
                        data-target="#myModal"
                      >
                        View Role
                        <i className="fa fa-send" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div id="myModal" class="modal fade" role="dialog">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <button type="button" class="close" data-dismiss="modal">
                        &times;
                      </button>
                      <h2 class="modal-title">ReactJS Developer</h2>
                    </div>
                    <div class="modal-body">
                      <p className="fontStyle">
                        React JS Developer to assist development of our web
                        tools.
                      </p>
                      <p className="fontStyle">Core Activities</p>
                      <ul class="list-group">
                        <li class="list-group-item fontStyle">
                          React JS development
                        </li>
                        <li class="list-group-item fontStyle">
                          UI / UX design
                        </li>
                      </ul>
                      <p className="fontStyle">Beneficial Experience</p>
                      <ul class="list-group">
                        <li class="list-group-item fontStyle">
                          Python/Flask, HTML, CSS, PHP
                        </li>
                        <li class="list-group-item fontStyle">
                          Experience with AWS and GCP
                        </li>
                      </ul>
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

              <div className="col-md-6">
                <div className="team-info">
                  <div className="service-icon1">
                    <i className="fas fa-database fa-5x" />
                  </div>
                  <div className="fig-caption1">
                    <h3>Data Scientist</h3>
                    <div className="col-md-12 bannerButtons bannerButtons1">
                      <a
                        href="#"
                        className="btn btn-banner btn-banner1"
                        data-toggle="modal"
                        data-target="#myModal1"
                      >
                        View Role
                        <i className="fa fa-send" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div id="myModal1" class="modal fade" role="dialog">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <button type="button" class="close" data-dismiss="modal">
                        &times;
                      </button>
                      <h4 class="modal-title">Data Scientist</h4>
                    </div>
                    <div class="modal-body">
                      <p className="fontStyle">
                        Data Scientist, developing the algorithms behind new
                        research tools using data analysis and machine learning.
                      </p>
                      <p className="fontStyle">Core Activities</p>
                      <ul class="list-group">
                        <li class="list-group-item fontStyle">
                          Data analysis with Python and NumPy
                        </li>
                        <li class="list-group-item fontStyle">
                          Bayesian statistics
                        </li>
                      </ul>
                      <p className="fontStyle">Beneficial Experience</p>
                      <ul class="list-group">
                        <li class="list-group-item fontStyle">
                          Relevant academic qualifications (MSc, PhD) in a
                          quantitative field
                        </li>
                        <li class="list-group-item fontStyle">
                          Big data architectures (Hadoop or Spark)
                        </li>
                        <li class="list-group-item fontStyle">
                          Mathematic finance theory and/or financial market
                          experience
                        </li>
                      </ul>
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

            <div className="page-title text-center">
              <h1>Apply Now</h1>
              <hr className="pg-titl-bdr-btm" />
            </div>
            <div className="row">
              <div className="col-md-6 ">
                <div className="service-box">
                  <div className="service-text1">
                    <h3>Further Information</h3>
                    <p className="fontStyle">
                      Want some more information on careers?
                      <a>Drop us an email.</a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="service-box">
                  <div className="service-text1">
                    <h3>Submit Details Directly</h3>
                    <p className="fontStyle">
                      Please provide a brief cover letter and your CV. We will
                      be in touch.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-12 bannerButtons bannerButtons1">
                <a
                  href="#"
                  className="btn btn-banner1"
                  data-toggle="modal"
                  data-target="#myModal2"
                >
                  Submit Details
                  <i className="fa fa-send" />
                </a>
              </div>

              <div id="myModal2" class="modal fade" role="dialog">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <button type="button" class="close" data-dismiss="modal">
                        &times;
                      </button>
                      <h4 class="modal-title">Join The Team. Apply Now.</h4>
                    </div>
                    <div class="modal-body">
                      <div id="sendmessage">
                        Your message has been sent. Thank you!
                      </div>
                      <div id="errormessage" />
                      <div className="form-sec">
                        <form
                          action
                          method="post"
                          role="form"
                          className="contactForm"
                        >
                          <div className="col-md-12 form-group">
                            <input
                              type="text"
                              name="name"
                              className="form-control text-field-box"
                              id="name"
                              placeholder="First Name"
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
                              placeholder="Last Name"
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
                              placeholder="Email"
                              data-rule="minlen:8"
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
                            <div class="form-group">
                              <label for="exampleFormControlFile1">
                                CV attachment
                              </label>
                              <input
                                type="file"
                                class="form-control-file"
                                id="exampleFormControlFile1"
                              />
                            </div>
                            <div class="form-group">
                              <div class="col-md-12">
                                <div class="checkbox">
                                  <label>
                                    <input type="checkbox" name="remember" /> I
                                    consent to InferStat Ltd storing my
                                    submitted information, so that they can
                                    respond to my application.
                                  </label>
                                </div>
                              </div>
                            </div>
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

export default Career;
