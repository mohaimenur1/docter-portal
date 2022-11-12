/** @format */

import React from "react";
import Doc from "./img/doc.png";
import Tw from "./img/tw.png";
import App from "./img/app.png";
import "./InfoCard.css";

const InfoCard = () => {
  return (
    <div className="container mt-5">
      {/* <div className='col-lg-4'>
        <div className='h-100 p-5 rounded-3'>
          <div className='info-img'></div>
          <div className='info-details'>
            <h1 className='fw-bold  bannner-text-color'>24/7</h1>
            <p>We are here for you. Any time any where.</p>
          </div>
        </div>
      </div> */}
      <div className="row">
        <div className="col-lg-4">
          <div
            className="card mb-3 d-flex justify-content-center align-items-center"
            style={{ maxWidth: "540px", minHeight: "140px" }}
          >
            <div className="row g-0">
              <div className="col-md-4 d-flex justify-content-center align-items-center p-2">
                <img
                  src={Doc}
                  alt="Trendy Pants and Shoes"
                  className="img-fluid rounded-start"
                />
              </div>
              <div className="col-md-8">
                <div className="card-body d-flex flex-column justify-content-center">
                  <h5 className="card-title info-card-text">
                    Best docters in the city
                  </h5>
                  <p className="card-text">
                    Our docter have Fcps, mcps , mphill with great life time
                    experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* card 2 */}
        <div className="col-lg-4">
          <div
            className="card mb-3 d-flex justify-content-center align-items-center"
            style={{ maxWidth: "540px", minHeight: "140px" }}
          >
            <div className="row g-0">
              <div className="col-md-4 col-md-4 d-flex justify-content-center align-items-center p-2">
                <img
                  src={Tw}
                  alt="Trendy Pants and Shoes"
                  className="img-fluid rounded-start"
                />
              </div>
              <div className="col-md-8">
                <div className="card-body d-flex flex-column justify-content-center">
                  <h5 className="card-title info-card-text">24/7</h5>
                  <p className="card-text">Get your service with no hassel</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* card 3 */}
        <div className="col-lg-4">
          <div
            className="card mb-3 d-flex justify-content-center align-items-center"
            style={{ maxWidth: "540px", minHeight: "140px" }}
          >
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={App}
                  alt="Trendy Pants and Shoes"
                  className="img-fluid rounded-start"
                />
              </div>
              <div className="col-md-8">
                <div className="card-body d-flex flex-column justify-content-center">
                  <h5 className="card-title info-card-text">
                    Appoinment Portal
                  </h5>
                  <p className="card-text">
                    Get your Appoinment easily through our portal
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
