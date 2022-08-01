import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import Question from "./Question";
import { backstoryQuestions } from "../data/backstoryQuestions";

function formatRepsonse(questions, userAnswers, userOwnChoiceAnswers) {
  const response = questions.map((questionData, index) => {
    const updatedUserAnswers = userAnswers[index].map((updatedUserAnswer) =>
      updatedUserAnswer.replace("Own choice", userOwnChoiceAnswers[index])
    );
    return { question: questionData.question, answers: updatedUserAnswers };
  });

  return response;
}

export default function BackstoryQuestionaire({
  character,
  setBackstoryExists,
}) {
  // Question useStates
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const currentQuestion = backstoryQuestions[currentQuestionIndex];

  // Answer useStates
  const [answers, setAnswers] = useState(
    new Array(backstoryQuestions.length).fill([])
  );
  const [ownChoiceAnswers, setOwnChoiceAnswers] = useState(
    new Array(backstoryQuestions.length).fill("")
  );
  // Button useStates
  const nextButtonExists = currentQuestionIndex < backstoryQuestions.length - 1;
  const previousButtonExists = currentQuestionIndex !== 0;
  const submitButtonExists =
    currentQuestionIndex === backstoryQuestions.length - 1;

  // Updates answers
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

  // Updates own choice answers
  function handleOwnChoice(answer) {
    const newAnswers = [...ownChoiceAnswers];
    newAnswers[currentQuestionIndex] = answer;
    setOwnChoiceAnswers(newAnswers);
  }

  function handleNavigation(e) {
    setCurrentQuestionIndex(
      currentQuestionIndex + (e.target.value === "next" ? 1 : -1)
    );
  }

  function handleSubmit(e) {
    e.preventDefault();
    setBackstoryExists(true);
    console.log("the data has been submitted");
    console.log(formatRepsonse(backstoryQuestions, answers, ownChoiceAnswers));
  }

  return (
    <div>
      {console.log("Current Question Index", currentQuestionIndex)}
      {console.log("Current Question", currentQuestion)}
      <h2>Backstory Questionaire for {character}</h2>
      <h4>
        {currentQuestionIndex + 1}/{backstoryQuestions.length}
      </h4>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          submitButtonExists
            ? handleSubmit(e)
            : handleNavigation({ target: { value: "next" } });
        }}
      >
        <Question
          question={currentQuestion}
          index={currentQuestionIndex}
          answers={answers[currentQuestionIndex]}
          setAnswers={handleAnswer}
          ownChoice={ownChoiceAnswers[currentQuestionIndex]}
          setOwnChoice={handleOwnChoice}
        />

        <div>
          {submitButtonExists && (
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
      <div>
        {previousButtonExists && (
          <button
            className={styles.card}
            value="previous"
            onClick={handleNavigation}
          >
            Previous
          </button>
        )}

        {nextButtonExists && (
          <button
            className={styles.card}
            value="next"
            onClick={handleNavigation}
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
}
