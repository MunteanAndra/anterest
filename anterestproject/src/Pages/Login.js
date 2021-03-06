import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import "./Login.css";
import Form from 'react-bootstrap/Form'
import Axios from 'axios';
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

   const login = () =>{
        Axios.post('http://localhost:3001/login', {
          email: email,
          password: password
        }).then((response)=>{
          console.log(response)
        });
      }

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="Login">
      <Form onSubmit={handleSubmit}>
      <div className="email">
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email          </Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        </div>
        <div className="password">
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        </div>
        <div className="button">
        <Button block size="lg" type="submit" able={!validateForm()} onClick={login}>
          Login
        </Button>
        </div>
      </Form>
    </div>
  );
}