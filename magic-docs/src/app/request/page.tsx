"use client";
import Footer from "@/pages/footer";
import React, { useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import emailjs from "emailjs-com";
import { FormEvent, ChangeEvent } from "react";
import { Confetti } from "@/components/magicui/confetti";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";


export default function Write() {
  const [formData, setFormData] = useState({
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleClick = () => {
    const end = Date.now() + 3 * 1000; // 3 seconds
    const colors = ["#a786ff", "#fd8bbc", "#eca184", "#f8deb1"];

    const frame = () => {
      if (Date.now() > end) return;

      Confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        startVelocity: 60,
        origin: { x: 0, y: 0.5 },
        colors: colors,
      });
      Confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        startVelocity: 60,
        origin: { x: 1, y: 0.5 },
        colors: colors,
      });

      requestAnimationFrame(frame);
    };

    frame();
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await fetch("https://formspree.io/f/xeqybnde", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    if (response.ok) {
      setSubmitted(true);
      setFormData({ email: "", message: "" });
      handleClick();
    } else {
      console.error("Form submission error");
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
            request the needed documentation for assistance for free! Whether
            you're a student struggling with some tool or techstack , or a
            developer needing a easy to understand documentation about some
            topic , we welcome you to join us.
          </p>
          <h2 className="font-medium text-2xl antialiased text-gray-900 mb-2">
            How It Works
          </h2>
          <ol className="list-decimal pl-6 mb-4 text-lg">
            <li className="mb-2">
              <span className="subpixel-antialiased">
                Access and fill the form:
              </span>{" "}
              Begin by filling the form below where you can ask for the topic or
              framework you need help with.
            </li>

            <li className="mb-2">
              <span className="subpixel-antialiased">
                Be clear and specific:
              </span>{" "}
              Fill a clear explanation of the framework you need help with and
              fill your email credentials to send us a request.
            </li>
          </ol>
          <p className="text-lg">
            Start requesting the topic or framework you need help with today and
            we will get back to you as soon as possible. Here are some examples
            of topics you can request:
          </p>
          {/* <ul className="list-disc pl-6 mb-4 text-lg">
            <li>AWS Quickstart guides</li>
            <li>GPT-3 generated poetry</li>
          </ul> */}

          <form onSubmit={handleSubmit} className="mt-6">
            <label className="block">
              Email:
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 w-full "
              />
            </label>
            <label className="block mt-4">
              Message:
              <Textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="mt-1 w-full "
              ></Textarea>
            </label>
            <Button
              type="submit"
              variant="outline"
              className="font-mono gap-2 mt-2"
            >
              Submit
            </Button>
          </form>
          {submitted && (
            <p className="mt-4 text-green-600">Thank you for your message!</p>
          )}
        </div>
      </div>

      <div className="py-8 px-12 divide-y">
        <div className="max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto">
          <div>
            <h2 className="font-medium text-2xl antialiased text-gray-900 mb-2">
              Connect with Our Team
            </h2>
            <p className="text-lg">
              If you have any doubts or need assistance, feel free to reach out
              to our team members:
            </p>
            <ul className="list-disc  mt-2">
              <div className="flex gap-4">
                <li className="flex items-center mb-4">
                  <Avatar>
                    <AvatarImage src="rahul.png" alt="@shadcn" />
                    <AvatarFallback>RS</AvatarFallback>
                  </Avatar>
                  <a
                    href="https://x.com/Rahulsainlll"
                    className="underline ml-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Rahul Sain
                  </a>
                </li>

                <li className="flex items-center mb-4">
                  <Avatar>
                    <AvatarImage src="kairvee.png" alt="@shadcn" />
                    <AvatarFallback>KV</AvatarFallback>
                  </Avatar>
                  <a
                    href="https://x.com/kairveee"
                    className="underline ml-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Kairvee
                  </a>
                </li>
              </div>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-2">
        <Footer />
      </div>
    </div>
  );
}
