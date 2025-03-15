import React, { useState, useEffect } from "react";

const TypingEffect = () => {
  const words = ["Business.", "Retail.", "Events."];
  const baseText = "Cinematic Stories\n for ";
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 100;
    const delayBetweenWords = isDeleting ? 200 : 1500; // 1.5s pause before deleting
    const currentWord = words[wordIndex];

    if (!isDeleting && charIndex < currentWord.length) {
      setTimeout(() => {
        setText(currentWord.slice(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      }, typingSpeed);
    } else if (isDeleting && charIndex > 0) {
      setTimeout(() => {
        setText(currentWord.slice(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      }, typingSpeed);
    } else if (!isDeleting && charIndex === currentWord.length) {
      setTimeout(() => setIsDeleting(true), delayBetweenWords);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
    }
  }, [charIndex, isDeleting, wordIndex]);

  useEffect(() => {
    // Cursor blinking effect
    const cursorInterval = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <h1 className="mt-28 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center whitespace-pre-wrap">
      {baseText}
      <span className="text-[#64AFF4]">{text}</span> 
      <span className={`ml-2 font-thin text-white ${cursorVisible ? "opacity-100" : "opacity-0"}`}>
        |
      </span>
    </h1>
  );
};

export default TypingEffect;
