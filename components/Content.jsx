import React from "react";
import Lottie from "lottie-react";
import animation_kloned from "./Lottie-json/animation_kloned";
import Image from "next/image";

const Content = () => (
  <>
    <div className="content">
      <div className="row">
        <div className="col-md-6">
          <div className="rule"></div>
          <div className="content-text ">
            <h1 className="text-white fw-bolder display-3">We Are</h1>
            <h1 className="text-white fw-bolder display-3">Kloned</h1>
            <p className="text-white fw-bold">
              we help connect and create online <br /> advent from your
              businesses
            </p>
          </div>
          <div className="content-btn">
            <button>Get Started Here</button>
          </div>
        </div>
        <div className="col-md-6">
          <div className="lottie">
            <Lottie animationData={animation_kloned} loop={true} />
          </div>
        </div>
      </div>
    </div>
  </>
);

export default Content;
