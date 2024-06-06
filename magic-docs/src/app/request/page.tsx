"use client";
import Footer from "@/pages/footer";
import React, { useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import emailjs from 'emailjs-com';
import { FormEvent, ChangeEvent } from 'react';



export default function Write() {
  const [formData, setFormData] = useState({
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await fetch('https://formspree.io/f/xeqybnde', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });
    if (response.ok) {
      setSubmitted(true);
      setFormData({ email: '', message: '' });
    } else {
      console.error('Form submission error');
    }
  };

  return (
    <div>
      <div className="py-8 pb-8 px-12 divide-y">
        <div className="max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto">
          <h1 className="font-medium text-3xl text-gray-900 mb-4">
            Request your needed documentation !
          </h1>
          <p className="text-xl max-w-prose text-muted-foreground mb-4">
            Welcome to our community! MagicDocs is a platform where users can
            request the needed documentation for assistance for free!
            Whether you're a student struggling with some tool or techstack , or a 
            developer needing a easy to understand documentation about some topic ,
             we welcome you to join us.
          </p>
          <h2 className="font-medium text-2xl antialiased text-gray-900 mb-2">
            How It Works
          </h2>
          <ol className="list-decimal pl-6 mb-4 text-lg">
            <li className="mb-2">
              <span className="subpixel-antialiased">
               Access and fill the form:
              </span>{" "}
              Begin by filling the form below where you can ask for the topic or framework you need help with.
            </li>

            <li className="mb-2">
              <span className="subpixel-antialiased">Be clear and specific:</span>{" "}
               Fill a clear explanation of the framework you need help with and fill your email credentials to send us a request.
            </li>
          </ol>
          <p className="text-lg">
            Start requesting the topic or framework you need help with today 
            and we will get back to you as soon as possible.
          </p>
          <form onSubmit={handleSubmit} className="mt-6">
            <label className="block">
              Email:
              <input type="email" name="email" value={formData.email} onChange={handleChange} required className="mt-1 w-full h-8 px-2 rounded-md bg-white text-black border-transparent focus:border-gray-500 focus:bg-white focus:ring-0" />
            </label>
            <label className="block mt-4">
              Message:
              <textarea name="message" value={formData.message} onChange={handleChange} required className="mt-1 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"></textarea>
            </label>
          <button
  type="submit"
  className="mt-4 bg-white-500 text-black py-2 px-4 rounded-md shadow-md shadow-gray-400 hover:border-black "
>
  Submit
</button>
          </form>
          {submitted && <p className="mt-4 text-green-600">Thank you for your message!</p>}
        </div>
      </div>
      <div className="mt-10">
        <Footer />
      </div>
    </div>
  );
}

