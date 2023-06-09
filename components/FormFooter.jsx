import React from "react";

const FormFooter = () => {
  const currentYear = new Date();
  const year = currentYear.getFullYear();
  return (
    <div className="container form-footer  d-flex justify-content-between">
      <div className="copyright">&#169; {year} kloned All Rights Reserved</div>
      <div className="policy"><p>privacy policy</p></div>
    </div>
  );
};

export default FormFooter;
