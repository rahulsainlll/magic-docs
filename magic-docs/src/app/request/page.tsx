"use client";

import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const Container = styled.div`
  margin: 0 auto;
  max-width: 600px;
  padding: 2rem;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  font-family: "Roboto", sans-serif;
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 2rem;
  color: #333;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-weight: 500;
  margin-bottom: 0.5rem;
  color: #555;
`;

const Input = styled(motion.input)`
  padding: 1rem;
  border-radius: 4px;
  border: 1px solid #ccc;
  margin-bottom: 1rem;
  background-color: #f5f5f5;
  transition: all 0.2s ease-in-out;

  &:focus {
    outline: none;
    border-color: #2980b9;
    box-shadow: 0 0 5px rgba(41, 128, 185, 0.3);
  }
`;

const Textarea = styled(motion.textarea)`
  padding: 1rem;
  border-radius: 4px;
  border: 1px solid #ccc;
  margin-bottom: 1rem;
  background-color: #f5f5f5;
  transition: all 0.2s ease-in-out;

  &:focus {
    outline: none;
    border-color: #2980b9;
    box-shadow: 0 0 5px rgba(41, 128, 185, 0.3);
  }
`;

const Button = styled(motion.button)`
  padding: 1rem 2rem;
  border-radius: 4px;
  border: none;
  background-color: #2980b9;
  color: #fff;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #3498db;
  }
`;

const StatusMessageWrapper = styled.p`
  text-align: center;
  margin-top: 1rem;
`;

const RequestDocumentationPage = () => {
  const [email, setEmail] = useState("");
  const [request, setRequest] = useState("");
  const [status, setStatus] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
        email,
        message: request,
      }),
    });

    const result = await response.json();

    if (response.ok) {
      setStatus("Request sent successfully!");
      setSuccess(true);
    } else {
      setStatus(`Failed to send request: ${result.message}`);
      setSuccess(false);
    }
  };

  return (
    <Container>
      <Title>Request Documentation</Title>
      <Form onSubmit={handleSubmit}>
        <Label htmlFor="email">Email:</Label>
        <Input
          whileHover={{ scale: 1.02 }}
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Label htmlFor="request">Documentation Request:</Label>
        <Textarea
          whileHover={{ scale: 1.02 }}
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          id="request"
          value={request}
          onChange={(e) => setRequest(e.target.value)}
          required
        />
        <Button
          whileHover={{ scale: 1.01 }}
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          type="submit"
        >
          Submit
        </Button>
      </Form>
      {status && (
        <StatusMessageWrapper style={{ color: success ? "#2ecc71" : "#e74c3c" }}>
          {status}
        </StatusMessageWrapper>
      )}
    </Container>
  );
};

export default RequestDocumentationPage;