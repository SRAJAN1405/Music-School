"use client";
import {Meteors} from "@/components/ui/meteors"
import React, { FormEvent, useState } from "react";
function page() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Submitted:", { email, message });
  };

  return (
    <div>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-12 pt-36 relative">
        <div className="max-w-2xl mx-auto p-4 relative z-10">
          <h1 className="text-lg md:text-7xl text-center font-sans font-bold mb-8 text-white ">
            Contact Us
          </h1>
          <div className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto text-center">
            We’d love to hear from you! Whether you have a question about our
            courses, need assistance, or just want to share feedback, feel free
            to reach out. Our team is here to help you.
          </div>
        </div>
        <form
          onSubmit={handleSubmit}
          className="space-y-4 mt-4 max-w-4xl mx-auto"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full p-4 bg-neutral-950 placeholder:text-neutral-700"
            required
          />
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Your message"
            className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full p-4 bg-neutral-950 placeholder:text-neutral-700"
            rows={5}
            required
          ></textarea>
          <div className="flex justify-center">
            <button
              type="submit"
              className="px-6 py-2 rounded-lg bg-teal-500 text-white font-medium hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
        <Meteors  number={40} />
    </div>
  );
}

export default page;
