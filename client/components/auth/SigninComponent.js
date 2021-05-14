import React, { useState } from "react";
import Router from "next/router";
import { signin, authenticateUser } from "../../actions/auth";

const SigninComponent = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    error: "",
    isLoading: false,
    message: "",
    showForm: true,
  });

  const { email, password, error, isLoading, message, showForm } = formData;

  const handleOnChange = (name) => (e) => {
    console.log(e.target.value);
    setFormData({ ...formData, error: false, [name]: e.target.value });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    console.table({
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
    const user = { email, password };
    console.log(user);
    signin(user).then((data) => {
      if (data.error) {
        setFormData({ ...formData, error: data.error, isLoading: false });
      } else {
        // save user token to cookie

        // save user info to localstorage

        // authenticate user
        authenticateUser(data, () => {
          Router.push("/");
        });
      }
    });
  };

  const signinForm = () => {
    return (
      <form onSubmit={handleOnSubmit}>
        <div className="form-group">
          <input
            className="form-control"
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={handleOnChange("email")}
          />
        </div>
        <div className="form-group">
          <input
            className="form-control"
            type="password"
            placeholder="*******"
            value={password}
            onChange={handleOnChange("password")}
          />
        </div>
        <div>
          <button className="btn btn-primary">Signin</button>
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
      {showForm && signinForm()}
    </>
  );
};

export default SigninComponent;
