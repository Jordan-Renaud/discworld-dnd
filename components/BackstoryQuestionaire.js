import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import Question from "./Question";
import { backstoryQuestions } from "../data/backstoryQuestions";

export default function BackstoryQuestionaire({
  character,
  setBackstoryExists,
}) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(
    backstoryQuestions[currentQuestionIndex]
  );
  const [nextButtonExists, setNextButtonExists] = useState(true);
  const [previousButtonExists, setPreviousButtonExists] = useState(false);
  const isNextButtonShown =
    currentQuestionIndex < backstoryQuestions.length - 1;
  const isPreviousButtonShown =
    currentQuestionIndex !== 0 &&
    currentQuestionIndex < backstoryQuestions.length - 1;

  useEffect(() => {
    setCurrentQuestion(backstoryQuestions[currentQuestionIndex]);
    setPreviousButtonExists(isPreviousButtonShown);
    setNextButtonExists(isNextButtonShown);
  }, [currentQuestionIndex]);

  function handleSubmit(e) {
    e.preventDefault();
    console.log("the data has been submitted");
  }

  function handleButtonClick(e) {
    e.preventDefault();

    e.target.value === "next"
      ? setCurrentQuestionIndex(currentQuestionIndex + 1)
      : setCurrentQuestionIndex(currentQuestionIndex - 1);
  }

  return (
    <div>
      <h2>Backstory Questionaire for {character}</h2>
      <h4>
        {currentQuestionIndex + 1}/{backstoryQuestions.length}
      </h4>
      <form>
        <ul>
          <Question question={currentQuestion} index={currentQuestionIndex} />
        </ul>
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

        {nextButtonExists || previousButtonExists ? null : (
          <button className={styles.card} value="submit" onClick={handleSubmit}>
            Submit
          </button>
        )}
      </form>
    </div>
  );
}
