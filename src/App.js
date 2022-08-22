import React, { useState } from "react";
import password from "./password.json";
import "./style.css";
import OtpInput from "react-otp-input";
const Login = () => {
  const [code, setCode] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleChange = (code) => setCode(code);
   
  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleChange}>
        <div className="input-container">
          <label>OTP Login </label>
          <OtpInput
        value={isSubmitted ? "123456" : ""}
        onChange={code}
        numInputs={6}
        separator={<span style={{ width: "8px" }}></span>}
        isInputNum={true}
        shouldAutoFocus={true}
        inputStyle={{
          border: "1px solid transparent",
          borderRadius: "8px",
          width: "54px",
          height: "54px",
          fontSize: "12px",
          color: "#000",
          fontWeight: "400",
          caretColor: "blue"
        }}
        focusStyle={{
          border: "1px solid #CFD3DB",
          outline: "none"
        }}
      />
          </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );

  return (
    <div className="app">
      <div className="login-form">
        <div className="title">Sign In</div>
        {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
      </div>
    </div>
  );
};
export default Login;
