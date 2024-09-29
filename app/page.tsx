"use client"; // Ensure this is a client component

import Image from "next/image";
import { FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";

// LazyLoad component
const LazyLoad = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing once it becomes visible
        }
      },
      { threshold: 0.1 }, // Trigger when 10% of the item is visible
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div ref={ref}>
      {isVisible ? children : <div style={{ minHeight: "20px" }} />}{" "}
      {/* Placeholder for spacing */}
    </div>
  );
};

// Update AnimatedText to accept an array of words
const AnimatedText = ({ words }) => {
  return (
    <div>
      {words.map((word, wordIndex) => (
        <div key={wordIndex} className="flex justify-center">
          {word.split("").map((letter, letterIndex) => (
            <span
              key={letterIndex}
              className="opacity-0 animate-fadeIn"
              style={{
                animationDelay: `${wordIndex * 1000 + letterIndex * 50}ms`,
                display: "inline-block",
              }}
            >
              {letter}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
};

const LinkedInIcon = () => (
  <a
    href="https://www.linkedin.com/in/xycjustin/"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 text-blue-600 hover:text-blue-800"
  >
    <FaLinkedin size={24} />
    LinkedIn
  </a>
);

const EmailIcon = () => (
  <a
    href="mailto:xycjustin@hotmail.com"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-gray-600"
  >
    <FaEnvelope size={24} />
    Email
  </a>
);

const PhoneIcon = () => (
  <a
    href="tel:7782397162"
    rel="noopener noreferrer"
    className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-white-600"
  >
    <FaPhone size={19} />
    My Number
  </a>
);

export default function Home() {
  const words = ["Entrepreneur", "Husband", "Leader"];

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center justify-center">
        <Image
          className="dark:invert"
          src="/justin-modified.png" // Reference your local image
          alt="My Local Image"
          width={180}
          height={480} // Adjust width and height as needed
          priority
        />

        {/* LazyLoad component for the animated text */}
        <LazyLoad>
          <ol className="text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
            <AnimatedText words={words} />
          </ol>
          {/* YouTube Video */}
          <div className="mt-6">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/prIkKXyWgsw"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg" // Add rounded edges
            ></iframe>
          </div>
        </LazyLoad>
      </main>

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <footer className="row-start-5 flex gap-10 flex-wrap items-center justify-center">
          {/* Render the Icon Components */}
          <LinkedInIcon />
          <EmailIcon />
          <PhoneIcon />
        </footer>
      </footer>
    </div>
  );
}
