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
  const [nextButtonExists, setNextButtonExists] = useState(true);
  const isNextButtonShown =
    currentQuestionIndex < backstoryQuestions.length - 1;
  const isPreviousButtonShown = currentQuestionIndex !== 0;
  const [previousButtonExists, setPreviousButtonExists] = useState(false);

  //answer management
  const [answers, setAnswers] = useState(
    new Array(backstoryQuestions.length).fill([])
  );

  useEffect(() => {
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
      newAnswers[currentQuestionIndex].push(answer);
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

        {previousButtonExists ? (
          <button
            className={styles.card}
            value="previous"
            onClick={handleButtonClick}
          >
            Previous
          </button>
        ) : null}

        {nextButtonExists ? (
          <button
            className={styles.card}
            value="next"
            onClick={handleButtonClick}
          >
            Next
          </button>
        ) : null}

        {nextButtonExists ? null : (
          <button className={styles.card} value="submit" onClick={handleSubmit}>
            Submit
          </button>
        )}
      </form>
    </div>
  );
}
