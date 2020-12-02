import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import M from "materialize-css";

const Signup = () => {
  const history = useHistory();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const emailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  const handleSignup = (e) => {
    if (!emailFormat.test(email)) {
      M.toast({
        html: "Wrong email format !",
        classes: "red yellow-text",
      });
      return;
    }

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    };

    fetch("/signup", requestOptions)
      .then((response) => response.json())
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
          history.push("/signin");
        }
      })
      .catch((err) => console.log("err", err));
  };

  return (
    <div class="card ">
      <h1 className="brand-logo">Instagram</h1>
      <div class="input-field">
        <input
          id="name"
          type="text"
          class="validate"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label for="name">Name</label>
      </div>
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
      <button class="white-text blue lighten-2 btn" onClick={handleSignup}>
        Sign Up
      </button>

      <h5 class="white-text">
        <Link to="/signin">Already have account? Log in</Link>
      </h5>
    </div>
  );
};

export default Signup;
