import React, { useState } from "react";
import password from "./password.json";
import "./style.css";
import OtpInput from "react-otp-input";
const Login = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessages, setErrorMessages] = useState({});

  // added a new state to store the value of the OTP input
  const [code, setCode] = useState("");

  // added a new state to store the current Time
  const [currentTime] = useState(new Date().toTimeString());

  const errors = {
    eid: "invalid username",
    pass: "invalid password",
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    const userData = password.find((user) => user.password === code);
    console.log({ userData, currentTime });

    // add window.location.assisgn to redirect to home page

    if (userData) {
      setIsSubmitted(true);
      // window.location.assign("/dashboard");
    } else {
      alert("Invalid password"); // added an alert to show the user that the OTP is invalid
      setCode(""); // reset the OTP input field
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
          <label> LOGIN </label>
          <OtpInput
            value={code}
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
              color: "#171a18",
              fontWeight: "400",
              caretColor: "blue",
            }}
            focusStyle={{
              border: "1px solid #CFD3DB",
              outline: "none",
            }}
            onChange={(otp) => {
              setCode(otp);
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
        <div className="title">Please enter your PASSWORD to continue</div>
        {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
      </div>
    </div>
  );
};
export default Login;
