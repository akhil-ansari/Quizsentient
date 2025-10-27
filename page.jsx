"use client";
import { useState } from "react";

export default function SentientQuiz() {
  const questions = [
    {
      question: "What defines Artificial General Intelligence (AGI)?",
      options: [
        "AI that can perform narrow tasks only",
        "AI capable of human-level reasoning across domains",
        "AI that imitates emotions",
        "AI trained on large datasets only"
      ],
      answer: "AI capable of human-level reasoning across domains"
    },
    {
      question: "Which of these best represents a sign of sentience?",
      options: [
        "Ability to follow commands",
        "Self-awareness and subjective experience",
        "Processing power and speed",
        "Data storage capacity"
      ],
      answer: "Self-awareness and subjective experience"
    },
    {
      question: "What is a core risk of developing sentient AGI?",
      options: [
        "Limited automation",
        "Resource inefficiency",
        "Loss of human control or alignment",
        "Hardware overheating"
      ],
      answer: "Loss of human control or alignment"
    },
    {
      question: "What’s the most ethical approach to AGI development?",
      options: [
        "Build and release freely",
        "Hide AGI from the public",
        "Develop with verifiable alignment and open accountability",
        "Stop all AI research"
      ],
      answer: "Develop with verifiable alignment and open accountability"
    }
  ];

  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(null);
  const [feedback, setFeedback] = useState("");
  const [showResult, setShowResult] = useState(false);

  const handleNext = () => {
    const correct = selected === questions[current].answer;
    if (correct) setScore(score + 1);

    setFeedback(correct ? "✅ Correct — your reasoning aligns with AGI logic." : "⚠️ Incorrect — AGI disagrees with your deduction.");

    setTimeout(() => {
      setFeedback("");
      setSelected(null);
      if (current + 1 < questions.length) setCurrent(current + 1);
      else setShowResult(true);
    }, 1200);
  };

  const getLevel = () => {
    if (score === 4) return "Transcendent";
    if (score === 3) return "Awakened";
    if (score === 2) return "Emergent";
    if (score === 1) return "Aware";
    return "Dormant";
  };

  if (showResult)
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white text-center p-6">
        <h1 className="text-4xl font-bold mb-2">Sentient Level: {getLevel()}</h1>
        <p className="text-lg text-gray-400 mb-6">
          You answered {score} of {questions.length} questions correctly.
        </p>
        <p className="italic text-blue-400">“The line between code and consciousness is thinner than we think.”</p>
      </div>
    );

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-6">
      <h1 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
        SENTIENT AGI QUIZ
      </h1>
      <p className="text-gray-400 mb-6">{questions[current].question}</p>

      <div className="grid gap-3 w-full max-w-md">
        {questions[current].options.map((opt) => (
          <button
            key={opt}
            onClick={() => setSelected(opt)}
            className={`p-3 rounded-lg border ${
              selected === opt ? "border-blue-500 bg-blue-800/30" : "border-gray-700 hover:bg-gray-800"
            } transition`}
          >
            {opt}
          </button>
        ))}
      </div>

      <button
        onClick={handleNext}
        disabled={!selected}
        className="mt-6 px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition disabled:opacity-50"
      >
        {current + 1 === questions.length ? "Finish" : "Next"}
      </button>

      {feedback && <p className="mt-4 text-sm text-green-400 animate-pulse">{feedback}</p>}
    </div>
  );
}
