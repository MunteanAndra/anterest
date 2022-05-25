import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import "./Register.css";
import Form from 'react-bootstrap/Form'

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nume, setNume] = useState("");
  const [prenume, setPrenume] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="Register">
      <Form onSubmit={handleSubmit}>
      <div className="nume">
      <Form.Group size="lg" controlId="nume">
                <Form.Label>Nume</Form.Label>
                <Form.Control
                  autoFocus
                  type="nume"
                  value={nume}
                  onChange={(e) => setNume(e.target.value)}
      />
      </Form.Group>
      </div>
      <div className="prenume">
         <Form.Group size="lg" controlId="prenume">
                   <Form.Label>Prenume</Form.Label>
                   <Form.Control
                     autoFocus
                     type="prenume"
                     value={prenume}
                     onChange={(e) => setPrenume(e.target.value)}
                   />
       </Form.Group>
       </div>
       <div className="email">
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
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
        <div className="buton">
        <Button block size="lg" type="submit" disabled={!validateForm()}>
          Register
        </Button>
        </div>
      </Form>
    </div>
  );
}