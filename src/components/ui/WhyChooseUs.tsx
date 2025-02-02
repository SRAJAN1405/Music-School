"use client";
import React from "react";
import { StickyScroll } from "./sticky-scroll-reveal";

const content = [
  {
    title: "Live Music Classes",
    description:
      "Join live, interactive music classes with expert instructors who guide you step-by-step. Whether you're learning an instrument or improving your vocal skills, our real-time lessons ensure you get immediate feedback, making your learning process more effective and engaging. You can ask questions, practice in front of the instructor, and work on areas that need improvement.",
  },
  {
    title: "Customized Learning Plans",
    description:
      "Our music school offers customized learning plans based on your goals, experience, and the instrument you're learning. Whether you aim to become a professional musician or just want to improve your skills as a hobbyist, our instructors will design a curriculum that matches your pace and needs. This personalized approach helps you stay motivated and make quicker progress.",
  },
  {
    title: "Collaborative Jamming Sessions",
    description:
      "Collaboration is key in music! Our platform allows students to join group jam sessions where they can collaborate with others, learn from different playing styles, and even create music together. Whether you're practicing improvisation, arranging a song, or just having fun, these jam sessions enhance teamwork, improve your skills, and help you develop musical communication.",
  },
  {
    title: "Performance Opportunities",
    description:
      "We believe in the power of performance to boost confidence and accelerate learning. That's why we provide plenty of opportunities for students to perform in front of an audience, whether it's a small student showcase, an online concert, or a larger live event. Performing will help you hone your stage presence, receive constructive feedback, and experience the joy of sharing your music with others.",
  },
];

const WhyChooseUs = () => {
  return (
    <div className="p-0">
      <StickyScroll content={content} />
    </div>
  );
};

export default WhyChooseUs;
