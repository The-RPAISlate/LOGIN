import React, { useState } from "react";
import password from "./password.json";
import "./style.css";
import OtpInput from "react-otp-input";
const Login = () => {
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessages, setErrorMessages] = useState({});
  
  const errors = {
    eid: "invalid username",
    pass: "invalid password",
  };
  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { eid, pass } = document.forms[0];

    // Find user login info
    const userData = password.find((user) => user.emp_id === eid.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
        window.location.assign("/dashboard");
      }
    } else {
      // Username not found
      setErrorMessages({ name: "eid", message: errors.eid });
    }
  };


   /// for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );
  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
      <div className="input-container">
          <label>Username </label>
          <input type="password" name="eid" required />
          {renderErrorMessage("eid")}
        </div>
        <div className="input-container">
          <label>OTP Login </label>
          <OtpInput
       
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
          color: "#111",
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
