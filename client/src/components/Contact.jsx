import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import Toast from "react-bootstrap/Toast";
import * as axios from "axios";
import "./Contact.css";

export default function Contact() {
  const onFormSubmit = (e) => {
    e.preventDefault();
    const formData = { name, email, message: msg };
    setLoading(true);
    axios
      .post("/send", formData)
      .then(() => {
        setName("");
        setEmail("");
        setMsg("");
        setLoading(false);
        setShowToast(true);
        setSubmitMsg("Successfully sent email!");
      })
      .catch((err) => setSubmitMsg("Error: " + err));
    console.log(formData);
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [submitMsg, setSubmitMsg] = useState("");

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
            required
          />
        </Form.Group>
        <Form.Group controlId="formGroupEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
        </Form.Group>
        <Form.Group controlId="formGroupTextArea">
          <Form.Label>What do you want to say to me?</Form.Label>
          <Form.Control
            as="textarea"
            rows={5}
            onChange={(e) => setMsg(e.target.value)}
            value={msg}
            required
          />
        </Form.Group>
        <Button
          style={{ backgroundColor: loading && "lightblue" }}
          variant="primary"
          type="submit"
          disabled={loading}
        >
          {loading && (
            <Spinner
              style={{ marginRight: 10 }}
              animation="grow"
              variant="info"
              size="sm"
            />
          )}
          {loading ? "Loading..." : "Submit"}
        </Button>
      </Form>

      <Toast
        onClose={() => setShowToast(false)}
        show={showToast}
        delay={3000}
        autohide
        style={{
          position: "fixed",
          bottom: 20,
          right: "5%",
        }}
      >
        <Toast.Body>{submitMsg}</Toast.Body>
      </Toast>
    </div>
  );
}
