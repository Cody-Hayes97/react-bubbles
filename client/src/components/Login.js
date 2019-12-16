import React, { useState, useEffect } from "react";
import axios from "axios";

const Login = props => {
  const [login, setLogin] = useState({
    username: "",
    password: ""
  });

  const handleChange = e => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value
    });
  };

  useEffect(() => {
    localStorage.removeItem("token");
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    axios.post("http://localhost:5000/api/login", login).then(res => {
      localStorage.setItem("token", res.data.payload);
      props.history.push("/protected");
    });
  };
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          onChange={handleChange}
          placeholder="Username"
          value={login.username}
        />
        <input
          type="text"
          name="password"
          onChange={handleChange}
          placeholder="Password"
          value={login.password}
        />
        <button type="submit">Log in</button>
        <button
          onClick={e => {
            e.preventDefault();
            localStorage.removeItem("token");
          }}
        >
          Log out
        </button>
      </form>
    </>
  );
};

export default Login;
