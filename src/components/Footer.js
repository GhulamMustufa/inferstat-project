import React, { Component } from "react";

export class Footer extends Component {
  render() {
    return (
      <div>
        <footer className="footer section-padding">
          <div className="container">
            <div className="row">
              <div
                style={{ visibility: "visible", animationName: "zoomIn" }}
                className="col-sm-12 text-center wow zoomIn"
              >
                <h3>Contact us on</h3>
                <div className="footer_social row">
                  <div className="col-md-6 contact">
                  <span className="iconwrap"><a className="" href="#">
                      <i className="far fa-envelope fa-lg" />
                    </a></span>
                    
                    <h4 className="cont">enquiries@inferstat.com</h4>
                  </div>

                  <div className="col-md-6 contact">
                  <span className="iconwrap"><a className="" href="#">
                      <i className="fas fa-phone fa-lg" />
                    </a></span>
                    
                    <h4 className="cont"> +44(0)20 8068 9563</h4>
                  </div>
                </div>
              </div>
              {/*- END COL */}
            </div>
            {/*- END ROW */}
          </div>
          {/*- END CONTAINER */}
        </footer>
        <div className="footer-bottom">
          <div className="container">
            <div
              style={{ visibility: "visible", animationName: "zoomIn" }}
              className="col-md-12 text-center wow zoomIn"
            >
              <div className="footer_copyright">
                <p> © Copyright, All Rights Reserved.</p>
                <div className="credits">
                  {/*
              All the links in the footer should remain intact.
              You can delete the links only if you purchased the pro version.
              Licensing information: https://bootstrapmade.com/license/
              Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/buy/?theme=Tempo
            */}
                  InferStat Ltd, Company number, England & Wales: 10831365.
                  Plaza 9, KD Tower, Hemel Hempstead HP1 1FW 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
