"use client";
import Link from "next/link";
import { useState } from "react";
import { quiz } from "~/server/quizzData/quizzData";

export default function WaitingQuizz() {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(false);
  const [checked, setChecked] = useState(false);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState<number | null>(
    null
  );
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState({
    score: 0,
    correctAnswer: 0,
    wrongAnswers: 0,
  });

  const { questions } = quiz;
  const questionData = questions[activeQuestion];

  if (!questionData) {
    return <div>There are no more questions.</div>;
  }

  const { question, answers, correctAnswer } = questionData;

  // Select and check answer
  const onAnswerSelected = (answer: string, idx: number) => {
    setChecked(true), setSelectedAnswerIndex(idx);
    if (answer === correctAnswer) {
      setSelectedAnswer(true);
      console.log("true");
    } else {
      setSelectedAnswer(false);
      console.log("false");
    }
  };

  // Calculate score and increment to next question
  const nextQuestion = () => {
    setSelectedAnswerIndex(null);
    setResult((prev) =>
      selectedAnswer
        ? {
            ...prev,
            score: prev.score + 5,
            correctAnswer: prev.correctAnswer + 1,
          }
        : {
            ...prev,
            wrongAnswers: prev.wrongAnswers + 1,
          }
    );
    if (activeQuestion !== questions.length - 1) {
      setActiveQuestion((prev) => prev + 1);
    } else {
      setActiveQuestion(0);
      setShowResult(true);
    }
    setChecked(false);
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="p-15 h-5/6 w-4/6 items-center justify-center rounded-xl bg-bg1">
        <div className="fixed right-3 top-3">
          <Link
            className="rounded-lg bg-[#000925] p-2 font-semibold text-white"
            href="/input/waiting/waiting"
          >
            Back:
          </Link>
        </div>

        <div>
          <div className="flex h-48 w-full flex-col items-center justify-center">
            <span className="text-[#000925]" style={{ fontSize: "35px" }}>
              Heres a short quiz while we create your course:
            </span>
            <br></br>
            <h2 className="text-[#000925]" style={{ fontSize: "45px" }}>
              Question: {activeQuestion + 1}
              <span>/{questions.length}</span>
            </h2>
          </div>
          <div className="flex h-96 flex-col items-center justify-center">
            {!showResult ? (
              <div className="mt-4 h-96 w-1/2 rounded-xl p-2 opacity-80">
                {" "}
                <h3 className="p-1 text-xl">
                  {questions?.[activeQuestion]?.question}
                </h3>
                {answers.map((answer: string, idx: number) => (
                  <li 
                    key={idx}
                    onClick={() => onAnswerSelected(answer, idx)}
                    className={ 
                      `li-quizz-class ${selectedAnswerIndex === idx ? "li-quizz-class-selected" : "li-quizz-class-hover"}`
                    }
                  >
                    <span>{answer}</span>
                  </li>
                ))}
                {checked ? (
                  <button
                    onClick={nextQuestion}
                    className="rounded-lg border border-blue-700 bg-[#000925] px-4 py-2 font-bold text-white hover:bg-green-700"
                  >
                    {activeQuestion === question.length - 1
                      ? "See results?"
                      : "Next Question?"}
                  </button>
                ) : (
                  <button onClick={nextQuestion} disabled>
                    {/* {" "}
                    {activeQuestion === question.length - 1
                      ? "See results?"
                      : "Next Question?"} */}
                  </button>
                )}
              </div>
            ) : (
              <div className="mt-4 flex w-96 flex-col items-center justify-center rounded bg-white p-8 opacity-80">
                <h3 className="text-4xl text-[#000925] underline">Results:</h3>
                <br></br>
                <h3 className="text-xl">
                  Overall {(result.score / 25) * 100}%
                </h3>
                <p>
                  Questions answered: <span>{questions.length}</span>
                </p>
                <p>
                  Correct Answers: <span>{result.correctAnswer}</span>
                </p>
                <p>
                  Wrong Answers: <span>{result.wrongAnswers}</span>
                </p>
                <p>
                  Total Score: <span>{result.score} out of 25.</span>
                </p>
                <button
                  className="mt-5 w-1/2 rounded-lg bg-gradient-to-b from-red-300 to-blue-800 p-2 text-lg font-bold text-black opacity-80"
                  onClick={() => window.location.reload()}
                >
                  Reload Quiz
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
