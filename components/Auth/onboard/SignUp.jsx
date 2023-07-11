import React from "react";
import Form from "./SignUpForm";
import FormCarousel from "../FormCarousel";

const SignUp = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-4">
            <FormCarousel />
          </div>
          <div className="col-sm-8">
            <Form />
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
