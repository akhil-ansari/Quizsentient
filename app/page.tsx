"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function QuizPage() {
  const questions = [
    {
      question: "What does HTML stand for?",
      options: [
        "Hyper Text Markup Language",
        "Home Tool Markup Language",
        "Hyperlinks and Text Markup Language",
        "Hyper Tech Machine Learning",
      ],
      answer: 0,
    },
    {
      question: "Which programming language runs in a web browser?",
      options: ["C", "Python", "JavaScript", "Java"],
      answer: 2,
    },
    {
      question: "What year was JavaScript launched?",
      options: ["1996", "1995", "1994", "1993"],
      answer: 1,
    },
    {
      question: "Who developed the C programming language?",
      options: ["Dennis Ritchie", "James Gosling", "Guido van Rossum", "Bjarne Stroustrup"],
      answer: 0,
    },
    {
      question: "Which symbol is used for comments in Python?",
      options: ["//", "#", "/* */", "<!-- -->"],
      answer: 1,
    },
    {
      question: "Which of these is not a programming language?",
      options: ["HTML", "CSS", "Python", "C++"],
      answer: 1,
    },
    {
      question: "What does CSS stand for?",
      options: [
        "Cascading Style Sheets",
        "Computer Style Sheets",
        "Colorful Style Sheets",
        "Creative Styling System",
      ],
      answer: 0,
    },
    {
      question: "Which company developed Java?",
      options: ["Microsoft", "Sun Microsystems", "IBM", "Google"],
      answer: 1,
    },
    {
      question: "Which of the following is a backend language?",
      options: ["HTML", "CSS", "Node.js", "Bootstrap"],
      answer: 2,
    },
    {
      question: "What is React primarily used for?",
      options: ["Database Management", "UI Development", "Machine Learning", "Networking"],
      answer: 1,
    },
  ];

  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleNext = () => {
    if (selected === questions[current].answer) setScore(score + 1);
    setSelected(null);
    if (current + 1 < questions.length) {
      setCurrent(current + 1);
    } else {
      setShowResult(true);
    }
  };

  const restartQuiz = () => {
    setCurrent(0);
    setSelected(null);
    setScore(0);
    setShowResult(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-700 to-blue-600 text-white p-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-xl max-w-lg w-full"
      >
        {!showResult ? (
          <>
            <h1 className="text-2xl font-bold mb-6 text-center">
              Question {current + 1} of {questions.length}
            </h1>
            <p className="text-lg mb-4">{questions[current].question}</p>

            <div className="grid gap-3">
              {questions[current].options.map((option, index) => (
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  key={index}
                  onClick={() => setSelected(index)}
                  className={`w-full p-3 rounded-lg border transition ${
                    selected === index
                      ? "bg-purple-600 border-purple-400"
                      : "bg-white/10 border-white/20 hover:bg-white/20"
                  }`}
                >
                  {option}
                </motion.button>
              ))}
            </div>

            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={handleNext}
              disabled={selected === null}
              className={`mt-6 w-full py-3 rounded-lg font-semibold ${
                selected === null
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-green-500 hover:bg-green-600"
              }`}
            >
              {current + 1 === questions.length ? "Finish" : "Next"}
            </motion.button>
          </>
        ) : (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold mb-4">🎉 Quiz Complete!</h2>
            <p className="text-lg mb-6">
              You scored <span className="font-bold text-yellow-400">{score}</span> out of{" "}
              {questions.length}
            </p>
            <button
              onClick={restartQuiz}
              className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold"
            >
              Restart Quiz
            </button>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
