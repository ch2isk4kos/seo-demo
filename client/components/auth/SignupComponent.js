import React, { useState } from "react";
import { signup } from "../../actions/auth";

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

  const handleOnChange = (name) => (e) => {
    console.log(e.target.value);
    setFormData({ ...formData, error: false, [name]: e.target.value });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    console.table({
      name,
      email,
      password,
      error,
      isLoading,
      message,
      showForm,
    });

    // set values in state
    setFormData({ ...formData, isLoading: true, error: false });

    // create new user
    const user = { name, email, password };
    console.log(user);
    signup(user).then((data) => {
      if (data.error) {
        setFormData({ ...formData, error: data.error, isLoading: false });
      } else {
        setFormData({
          ...formData,
          name: "",
          email: "",
          password: "",
          error: "",
          isLoading: false,
          message: data.message,
          showForm: false,
        });
      }
    });
  };

  const signupForm = () => {
    return (
      <form onSubmit={handleOnSubmit}>
        <div className="form-group">
          <input
            className="form-control"
            type="text"
            placeholder="type your name"
            value={name}
            onChange={handleOnChange("name")}
          />
        </div>
        <div className="form-group">
          <input
            className="form-control"
            type="email"
            placeholder="type your email"
            value={email}
            onChange={handleOnChange("email")}
          />
        </div>
        <div className="form-group">
          <input
            className="form-control"
            type="password"
            placeholder="enter a password"
            value={password}
            onChange={handleOnChange("password")}
          />
        </div>
        <div>
          <button className="btn btn-primary">Signup</button>
        </div>
      </form>
    );
  };

  const renderLoading = () =>
    isLoading ? (
      <div className="alert alert-info">
        <h2>Loading...</h2>
      </div>
    ) : (
      ""
    );

  const renderError = () =>
    error ? <div className="alert alert-danger">{error}</div> : "";

  const renderMessage = () =>
    message ? <div className="alert alert-info">{message}</div> : "";

  return (
    <>
      {renderLoading()}
      {renderError()}
      {renderMessage()}
      {showForm && signupForm()}
    </>
  );
};

export default SignupComponent;
