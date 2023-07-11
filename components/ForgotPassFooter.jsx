import React from "react";

const ForgotPasswordFooter = () => {
  const currentYear = new Date();
  const year = currentYear.getFullYear();
  return (
    <div className="container forgotPassFooter">
      <div className="copyright">&#169; {year} kloned All Rights Reserved</div>
      <div className="policy">
        <p>privacy policy</p>
      </div>
    </div>
  );
};

export default ForgotPasswordFooter;
