import React from "react";

import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { changeEmail } from "../taskActions";
import validator from "validator";

const Form = () => {
  const history = useNavigate();
  const dispatch = useDispatch();
  const email = useSelector((state) => state.email.email);
  const [isValid, setIsValid] = React.useState(true);

  const handleChange = (e) => dispatch(changeEmail(e.target.value));

  const onSubmit = (e) => {
    e.preventDefault();

    if (validator.isEmail(email)) history("success");
    else setIsValid(false);
  };
  return (
    <form className="main__content_form">
      <div>
        <label htmlFor="email">Email Address</label>
        {!isValid && <span>Valid email required</span>}
      </div>

      <input
        type="email"
        placeholder="email@company.com"
        onChange={handleChange}
        value={email || ""}
        style={{
          backgroundColor: isValid ? "transparent" : "hsla(4, 100%, 67%, 0.2)",
          borderColor: isValid ? "var(--Grey)" : "var(--Tomato)",
        }}
        id="email"
      />

      <button onClick={(e) => onSubmit(e)}>
        Subscribe to monthly newsletter
      </button>
    </form>
  );
};

export default Form;
