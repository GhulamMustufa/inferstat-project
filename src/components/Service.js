import React, { Component } from 'react'

export class Service extends Component {
  render() {
    return (
        <div id="partners" className="section-padding">
        <div className="container">
          <div className="row">
            <div className="page-title text-center">
              <h1>Partners</h1>
              <h3>Partnership Opportunities</h3>
              <p>InferStat welcomes partners interested in utilising or investing in our technology.</p>
              <hr className="pg-titl-bdr-btm" />
            </div>
            <div className="col-md-6">
              <div className="service-box">
                <div className="service-icon"><i className="fas fa-dollar-sign" /></div>
                <div className="service-text">
                  <h3>Investors</h3>
                  <p> InferStat Ltd is intending to undertake an SEIS funding round in April 2019, with a potential EIS follow-up round later that year. We welcome interest from funds and individuals looking to invest in early-stage start ups. Please contact us if participation would be of interest.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="service-box">
                <div className="service-icon"><i className="fa fa fa-code" /></div>
                <div className="service-text">
                  <h3>Technology </h3>
                  <p> InferStat Ltd can provide access to the underlying APIs that support our web tools to partners, through long term licensing agreements for use in institutional investment frameworks or analytics. Please contact us to discuss options.</p>
                </div>
              </div>
            </div>
           
          </div>
        </div>
      </div>
    )
  }
}

export default Service
