import React, { useState } from "react";
import styled from "styled-components";
import { axiosWithAuth } from '../utils/axiosWithAuth';
import axios from 'axios';

const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
`;

const FormContainer = styled.form`
  width: 50%;
  border-radius: 15px;
  margin: 2%;
  display: flex;
  flex-direction: column;
  border: 5px #016fb9 solid;
  align-items: center;
`;

const StyledButton = styled.button`
  margin: 2%;
  width: 15%;
  color: white;
  border: none;
  border-radius: 15px;
  background-color: #016fb9;
`;

const Login = props => {

  const [login, setLogin] = useState({
    username: '',
    password: ''
  })

  const handleChange = e => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault();
    axios.get('https://how-to-bw2.herokuapp.com').then(res => {
      console.log(res)
    })
    .catch(err => console.log(err))

  }


  return (
    <Container>
      <FormContainer onSubmit={handleSubmit}>
        <h2>Login</h2>
        <label>User Name</label>
        <input type="text" name="username" onChange={handleChange} />

        <label>Password</label>
        <input type="password" name="password" onChange={handleChange}/>

        <StyledButton type="submit">Login</StyledButton>
      </FormContainer>
    </Container>
  );
};

export default Login;
