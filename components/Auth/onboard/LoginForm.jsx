import Link from "next/link";
import React, { useState, useEffect } from "react";
import { BsArrowLeft, BsCheckCircle, BsPersonCircle } from "react-icons/bs";
import Input from "./Input";
import Button from "../../Button";
import FormFooter from "../../FormFooter";
import Image from "next/image";

const LoginForm = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordLength, setPasswordLength] = useState(false);
  const [hasSpecialChar, setHasSpecialChar] = useState(false);
  const [hasNumber, setHasNumber] = useState(false);
  const [hasUppercase, setHasUppercase] = useState(false);

  // CHECK IF PASSWORD HAVE SPECIAL CHARACTER
  useEffect(() => {
    const specialCharacters = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    if (!specialCharacters.test(password)) {
      setHasSpecialChar(false);
    } else {
      setHasSpecialChar(true);
    }
  }, [password]);

  // CHECK LENGTH OF PASSWORD
  useEffect(() => {
    if (password.length >= 8) {
      setPasswordLength(true);
    } else {
      setPasswordLength(false);
    }
  }, [password]);

  // CHECK IF PASSWORD HAVE NUMBER
  useEffect(() => {
    var numbers = /[0-9]/;

    if (numbers.test(password)) {
      setHasNumber(true);
    } else {
      setHasNumber(false);
    }
  }, [password]);

  // CHECK IF PASSWORD HAVE UPPERCASE
  useEffect(() => {
    var uppercase = /[A-Z]/;

    if (uppercase.test(password)) {
      setHasUppercase(true);
    } else {
      setHasUppercase(false);
    }
  }, [password]);

  return (
    <>
      <div className="container">
        <div className="form-heading">
          <div className="logo">
            <img src="../../../images/Logo.png" alt="logo" />
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
        <div className="form-body my-5">
          <div className="avatar my-3">
            <Image
              src="/images/UserAvatar.png"
              height={25}
              width={25}
              alt="avatar"
            />
          </div>
          <h5 className="fw-bold" style={{ color: "#234667" }}>
            Welcome back!
          </h5>
          <small className="my-3">please provide all info</small>
          <div className="form-input my-4 py-3">
            <Input
              type="email"
              placeholder="email"
              onchange={(e) => setEmail(e.target.value)}
              value={email}
            />

            <Input
              type="text"
              placeholder="password"
              onchange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <div className="forgot-pass my-3">
              <Link href="/auth/forgot-password">forgot password?</Link>
            </div>
            <Button
              text="Submit"
              style={{ backgroundColor: "#234667", color: "white" }}
              className="btn w-50 py-3 fw-bold"
            />
          </div>
          {password.length > 0 && (
            <div className="validation-check">
              <div>
                <div>
                  <BsCheckCircle
                    className={` ${
                      passwordLength ? "text-success" : "text-danger"
                    }`}
                  />
                  <small
                    className={`mx-2 ${
                      passwordLength ? "text-success" : "text-danger"
                    }`}
                  >
                    At least 8 characters
                  </small>
                </div>
                <div>
                  <BsCheckCircle
                    className={` ${
                      hasSpecialChar ? "text-success" : "text-danger"
                    }`}
                  />
                  <small
                    className={`mx-2 ${
                      hasSpecialChar ? "text-success" : "text-danger"
                    }`}
                  >
                    Has special characters
                  </small>
                </div>
              </div>
              <div>
                <div>
                  <BsCheckCircle
                    className={` ${
                      hasUppercase ? "text-success" : "text-danger"
                    }`}
                  />
                  <small
                    className={`mx-2 ${
                      hasUppercase ? "text-success" : "text-danger"
                    }`}
                  >
                    Has uppercase letter
                  </small>
                </div>
                <div>
                  <BsCheckCircle
                    className={` ${hasNumber ? "text-success" : "text-danger"}`}
                  />
                  <small
                    className={`mx-2 ${
                      hasNumber ? "text-success" : "text-danger"
                    }`}
                  >
                    Has number characters
                  </small>
                </div>
              </div>
            </div>
          )}
        </div>{" "}
        <FormFooter />
      </div>
    </>
  );
};

export default LoginForm;
