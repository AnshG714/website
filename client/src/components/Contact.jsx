import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function Contact() {
  const onFormSubmit = (e) => {
    e.preventDefault();
    const formData = { name, email, msg };
    setName("");
    setEmail("");
    setMsg("");
    console.log(formData);
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  return (
    <div style={{ width: "60%" }}>
      <Form onSubmit={onFormSubmit}>
        <Form.Group controlId="formGroupName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </Form.Group>
        <Form.Group controlId="formGroupEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </Form.Group>
        <Form.Group controlId="formGroupTextArea">
          <Form.Label>What do you want to say to me?</Form.Label>
          <Form.Control
            as="textarea"
            rows={5}
            onChange={(e) => setMsg(e.target.value)}
            value={msg}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}
