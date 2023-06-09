import Link from "next/link";
import React, { useState } from "react";
import Button from "../Button";
import ReactCodeInput from "react-code-input";
import { BsChevronDown } from "react-icons/bs";
import FormFooter from "../FormFooter";

const ForgotPassword = () => {
  const [modal, setModal] = useState(false);

  const props = {
    inputStyle: {
      fontFamily: "monospace",
      margin: "4px",
      MozAppearance: "textfield",
      borderRadius: "5px",
      fontSize: "14px",
      padding: "15px 7px",
      color: "black",
      border: "1px solid lightskyblue",
      textAlign: "center",
    },
    inputStyleInvalid: {
      fontFamily: "monospace",
      margin: "4px",
      MozAppearance: "textfield",
      borderRadius: "5px",
      fontSize: "14px",
      padding: "15px 7px",
      color: "red",
      border: "1px solid red",
      textAlign: "center",
    },
  };

  return (
    <>
      <div className="container">
        <div className="form-heading">
          <div className="logo">
            <h2>klone</h2>
          </div>
          <div className="onboard-link">
            <p>
              <small>
                Don&apos;t have an account?
                <Link href="/auth/sign_up" className="ms-3 text-primary">
                  Register Here
                </Link>
              </small>
            </p>
          </div>
        </div>
        <div className="form-body  my-5">
          <h5>Verify It&apos;s you!</h5>
          <small className="my-3">
            we have sent the verification <br /> to the email{" "}
            <span className="text-primary">steve@gmail.com</span>
          </small>
          <div className="form-input my-4 py-3">
            <div className="react-code-input d-flex">
              <ReactCodeInput
                type="text"
                fields={6}
                className="d-flex mb-5 w-50"
                {...props}
              />
            </div>
            <Button
              text="Submit"
              style={{ backgroundColor: "#234667", color: "white" }}
              className="btn w-50 py-3 fw-bold"
            />
            <div className="other-method my-2 w-50 d-flex justify-content-between">
              <small>Didn&apos;t get code?</small>
              <span
                className="text-primary dropdown"
                onClick={() => setModal(!modal)}
              >
                other options <BsChevronDown />
              </span>
            </div>
          </div>
        </div>
      </div>
      <FormFooter />
    </>
  );
};

export default ForgotPassword;
