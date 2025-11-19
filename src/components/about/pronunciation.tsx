import { useState } from "react";

type PronunciationProps = {
  text: string;
  phonetic: string;
};

export const Pronunciation = ({ text, phonetic }: PronunciationProps) => {
  const [isSpeaking, setIsSpeaking] = useState(false);

  const speak = () => {
    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.8;
      utterance.pitch = 1;

      utterance.onstart = () => setIsSpeaking(true);
      utterance.onend = () => setIsSpeaking(false);
      utterance.onerror = () => setIsSpeaking(false);

      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <button
      onClick={speak}
      className="inline-flex items-center gap-2 group cursor-pointer hover:opacity-70 transition-opacity"
      aria-label={`Hear pronunciation of ${text}`}
    >
      <span className="text-lg md:text-2xl opacity-60">[{phonetic}]</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`w-5 h-5 md:w-6 md:h-6 opacity-60 group-hover:opacity-100 transition-all ${
          isSpeaking ? "animate-pulse" : ""
        }`}
      >
        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
        <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
      </svg>
    </button>
  );
};
