import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import Question from "./Question";
import { backstoryQuestions } from "../data/backstoryQuestions";

export default function BackstoryQuestionaire({
  character,
  setBackstoryExists,
}) {
  //question management
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(
    backstoryQuestions[currentQuestionIndex]
  );

  //button management
  const [nextButtonExists, setNextButtonExists] = useState(
    currentQuestionIndex < backstoryQuestions.length - 1
  );
  const [previousButtonExists, setPreviousButtonExists] = useState(
    currentQuestionIndex !== 0
  );

  //answer management
  const [answers, setAnswers] = useState(
    new Array(backstoryQuestions.length).fill([])
  );

  useEffect(() => {
    const isNextButtonShown =
      currentQuestionIndex < backstoryQuestions.length - 1;
    const isPreviousButtonShown = currentQuestionIndex !== 0;

    setCurrentQuestion(backstoryQuestions[currentQuestionIndex]);
    setPreviousButtonExists(isPreviousButtonShown);
    setNextButtonExists(isNextButtonShown);
  }, [currentQuestionIndex]);

  function handleSubmit(e) {
    e.preventDefault();
    setBackstoryExists(true);
    console.log("the data has been submitted");
  }

  function handleButtonClick(e) {
    e.preventDefault();

    e.target.value === "next"
      ? setCurrentQuestionIndex(currentQuestionIndex + 1)
      : setCurrentQuestionIndex(currentQuestionIndex - 1);
  }

  function handleAnswer(answer) {
    const newAnswers = [...answers];
    if (newAnswers[currentQuestionIndex].includes(answer)) {
      newAnswers[currentQuestionIndex] = newAnswers[
        currentQuestionIndex
      ].filter((a) => a !== answer);
    } else {
      newAnswers[currentQuestionIndex] = [
        ...newAnswers[currentQuestionIndex],
        answer,
      ];
    }
    setAnswers(newAnswers);
  }

  return (
    <div>
      <h2>Backstory Questionaire for {character}</h2>
      <h4>
        {currentQuestionIndex + 1}/{backstoryQuestions.length}
      </h4>
      <form>
        <Question
          question={currentQuestion}
          index={currentQuestionIndex}
          answers={answers[currentQuestionIndex]}
          setAnswers={handleAnswer}
        />

        <div>
          {previousButtonExists && (
            <button
              className={styles.card}
              value="previous"
              onClick={handleButtonClick}
            >
              Previous
            </button>
          )}

          {nextButtonExists && (
            <button
              className={styles.card}
              value="next"
              onClick={handleButtonClick}
            >
              Next
            </button>
          )}

          {nextButtonExists ? null : (
            <button
              className={styles.card}
              value="submit"
              onClick={handleSubmit}
            >
              Submit
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
