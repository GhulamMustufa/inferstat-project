import React, { Component } from "react";

export class Contact extends Component {
  render() {
    return (
      <div id="contact" className="section-padding">
        <div className="container">
          <div className="row">
            <div className="page-title text-center">
              <h1>Contact</h1>
              <p className="fontStyle">
                You can contact us by filling the form below{" "}
              </p>
              <hr className="pg-titl-bdr-btm" />
            </div>
            <div id="sendmessage">Your message has been sent. Thank you!</div>
            <div id="errormessage" />
            <div className="form-sec">
              <form action method="post" role="form" className="contactForm">
                <div className="col-md-4 form-group">
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
                <div className="col-md-4 form-group">
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
                <div className="col-md-4 form-group">
                  <input
                    type="text"
                    className="form-control text-field-box"
                    name="subject"
                    id="subject"
                    placeholder="Subject"
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
                    placeholder="Message"
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
        </div>
      </div>
    );
  }
}

export default Contact;
