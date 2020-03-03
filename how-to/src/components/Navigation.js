import React from "react";
import { Link, Route, BrowserRouter as Router } from "react-router-dom";
import PrivateRoute from "../utils/PrivateRoute";
import HowTo from "./HowTo";
import Signup from "./Signup";
import styled from "styled-components";

import Login from "./Login";
import Dashboard from "./Dashboard";

const Navigation = props => {
  const NavBar = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    border-bottom: black solid 2px;
  `;

  return (
    <>
      <NavBar className="navbar">
        <h1>How-To App</h1>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Sign Up</Link>
      </NavBar>
      <Route path="/signup" component={Signup} />
      <Route path="/login" component={Login} />
      <Route path="/dashboard" component={Dashboard} />
    </>
  );
};

export default Navigation;
