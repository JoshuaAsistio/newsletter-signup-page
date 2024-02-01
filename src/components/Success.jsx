import React from "react";
import { Link } from "react-router-dom";

import checkIcon from "../assets/images/icon-success.svg";

import { useSelector } from "react-redux";

const Success = () => {
  const email = useSelector((state) => state.email.email);

  return (
    <div className="success-card">
      <img src={checkIcon} alt="check icon" className="success-card__check" />

      <h1 className="success-card__heading">Thanks for subscribing!</h1>

      <p className="success-card__description">
        A confirmation email has been sent to{" "}
        <span className="success-card__description_span">{email}</span>. Please
        open it and click the button inside to confirm your subscription.
      </p>

      <Link to={"/newsletter-signup-page"} className="success-card__link">
        Dismiss message
      </Link>
    </div>
  );
};

export default Success;
