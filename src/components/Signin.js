import React, { useState, useEffect, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { UserContext } from "../App";
import M from "materialize-css";

const Signin = () => {
  const { state, dispatch } = useContext(UserContext);
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignin = (e) => {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    };

    fetch("/signin", requestOptions)
      .then((res) => res.json())
      .then((result) => {
        if (result.error) {
          M.toast({
            html: result.error,
            classes: "red yellow-text",
          });
        } else {
          M.toast({
            html: result.message,
            classes: "green lighten-1 white-text",
          });
          localStorage.setItem("token", result.token);
          localStorage.setItem("user", JSON.stringify(result.user));
          dispatch({ type: "USER", payload: result.user });
          history.push("/");
        }
      })
      .catch((err) => console.log("err", err));
  };

  return (
    <div class="card ">
      <h1 className="brand-logo">Instagram</h1>
      <div class="input-field">
        <input
          id="email"
          type="email"
          class="validate"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label for="email">Email</label>
      </div>
      <div class="input-field">
        <input
          id="password"
          type="password"
          class="validate"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label for="password">Password</label>
      </div>
      <button class="white-text blue lighten-2 btn" onClick={handleSignin}>
        Sign In
      </button>
      <h5 class="white-text">
        <Link to="/signup">Don't have account? Sign up</Link>
      </h5>
    </div>
  );
};

export default Signin;
