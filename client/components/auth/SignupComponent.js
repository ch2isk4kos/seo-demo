import React, { useState } from "react";

const SignupComponent = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    error: "",
    isLoading: false,
    message: "",
    showForm: true,
  });

  const {
    name,
    email,
    password,
    error,
    isLoading,
    message,
    showForm,
  } = formData;

  const handleOnChange = (e) => {
    console.log(e.target.value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log("handle on submit clicked");
  };

  const signupForm = () => {
    return (
      <form onSubmit={handleOnSubmit}>
        <div className="form-group">
          <input
            className="form-control"
            type="text"
            placeholder="type your name"
            onChange={handleOnChange}
          />
        </div>
        <div className="form-group">
          <input
            className="form-control"
            type="email"
            placeholder="type your email"
            onChange={handleOnChange}
          />
        </div>
        <div className="form-group">
          <input
            className="form-control"
            type="password"
            placeholder="enter a password"
            onChange={handleOnChange}
          />
        </div>
        <div>
          <button className="btn btn-primary">Submit</button>
        </div>
      </form>
    );
  };

  return (
    <>
      <h2>Sign Up Component</h2>
      {signupForm()}
    </>
  );
};

export default SignupComponent;
