"use client";
import React from "react";
import { InfiniteMovingCards } from "../components/ui/infinite-moving-cards";

const TestimonialCards = () => {
  const musicSchoolTestimonials = [
    {
      quote:
        "Joining the music school transformed my understanding of music and helped me discover my own sound. The instructors are world-class, providing personalized guidance that boosted my confidence and technique.",
      name: "Alex Johnson",
      title: "Guitar Student",
    },
    {
      quote:
        "The community and support here are unmatched. I've grown not just as a pianist but also as a performer. The lessons are structured yet creative, making learning both fun and effective.",
      name: "Samantha Lee",
      title: "Piano Student",
    },
    {
      quote:
        "I never thought I'd compose my own songs, but this school made it possible! The theory lessons are clear, and the hands-on approach helped me turn my musical ideas into reality.",
      name: "Michael Carter",
      title: "Composition Student",
    },
    {
      quote:
        "The vocal training program refined my technique and boosted my confidence. I can now sing across different genres effortlessly, thanks to expert coaching on breath control and vocal range.",
      name: "Isabella Martinez",
      title: "Vocal Student",
    },
    {
      quote:
        "Learning the violin here has been an incredible journey. The patient instructors and well-structured curriculum helped me progress smoothly and play with confidence.",
      name: "Daniel Kim",
      title: "Violin Student",
    },
    {
      quote:
        "The jazz improvisation course was a game-changer. I now express myself freely on the saxophone, learning advanced techniques that have taken my playing to a whole new level.",
      name: "Olivia Brown",
      title: "Saxophone Student",
    },
    {
      quote:
        "Drumming has always been my dream, and this school made learning so much fun. The lessons are engaging, and the instructors break down rhythms in a way that makes it easy to follow.",
      name: "Ryan Walker",
      title: "Drum Student",
    },
    {
      quote:
        "The recording and production course gave me the skills to create professional-quality music. I now understand sound engineering, mixing, and mastering, and I feel ready to produce my own tracks.",
      name: "Sophia Reynolds",
      title: "Music Production Student",
    },
  ];

  return (
    <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
      <h2 className="text-3xl font-bold text-center mb-8">
        Hear our Harmony: Voices of Success{" "}
      </h2>
      <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl">
          <InfiniteMovingCards
            items={musicSchoolTestimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </div>
  );
};

export default TestimonialCards;
