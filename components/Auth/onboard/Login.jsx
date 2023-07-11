import React from "react";
import LoginForm from "./LoginForm";
import FormCarousel from "../../FormCarousel";

const SignUp = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-4">
          <FormCarousel />
        </div>
        <div className="col-sm-4"></div>
        <div className="col-sm-8">
          <div className="col-sm-4">
            <FormCarousel />
          </div>
          <div className="col-sm-8" style={{ position: "relative" }}>
            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
