import fetch from "isomorphic-fetch";
import cookie from "js-cookie";
import next from "next";
import { API } from "../config";

export const signup = (user) => {
  return fetch(`${API}/api/signup`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      console.log(err);
    });
};

export const signin = (user) => {
  return fetch(`${API}/api/signin`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      console.log(err);
    });
};

export const signout = (user) => {
  removeCookie("token");
  removeLocalStorage("token");
  next();

  return fetch(`${API}/api/signout`, {
    method: "GET",
  })
    .then((res) => {
      return console.log("Signout Successful");
    })
    .catch((err) => {
      console.log(err);
    });
};

export const setCookie = (key, value) => {
  if (process.browser) {
    cookie.set(key, value, {
      expires: 1,
    });
  }
};

export const getCookie = (key) => {
  if (process.browser) {
    cookie.get(key); // `key` is the token
  }
};

export const removeCookie = (key) => {
  if (process.browser) {
    cookie.remove(key, {
      expires: 1,
    });
  }
};

export const setLocalStorage = (key, value) => {
  if (process.browser) {
    localStorage.setItem(key, JSON.stringify(value));
  }
};

export const removeLocalStorage = (key, value) => {
  if (process.browser) {
    localStorage.removeItem(key);
  }
};

export const authenticateUser = (data, next) => {
  setCookie("token", data.token);
  setLocalStorage("user", data.user);
  next();
};

export const isAuth = () => {
  if (process.browser) {
    const checkCookie = getCookie("token");
    if (checkCookie) {
      if (localStorage.getItem("user")) {
        return JSON.parse(localStorage.getItem("user"));
      } else {
        return false;
      }
    }
  }
};
