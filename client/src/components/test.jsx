import "../styles/test.css";
import { useState, useRef } from "react";
import questionsAndAnswers from "../data/questionsAndAnswers";
import weights from "../data/weights";
function Test() {
  const applicantsQuestionsAndAnswers = questionsAndAnswers.nonGraduate;
  const [selectedId, setSelectedId] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedFlag, setSelectedFlag] = useState(true);
  const [showSummaryFlag, setShowSummaryFlag] = useState(false);
  const [futureJob, setFutureJob] = useState("");
  const applicantScore = useRef({
    activity: 0.0,
    social: 0.0,
    emotionalStability: 0.0,
    structure: 0.0,
    leadership: 0.0,
  });
  const applicantSummaryScore = useRef({
    Backend: 0.0,
    Frontend: 0.0,
    QA: 0.0,
    DevOps: 0.0,
    "Data-Science": 0.0,
    "Data-Engineering": 0.0,
    "Business-Analysis": 0.0,
    "Project-Management": 0.0,
  });
  const question = applicantsQuestionsAndAnswers[currentQuestionIndex];
  const handleAnswerRadioChange = (event) => {
    setSelectedId(event.target.value);
  };
  function handleAnswerSubmit() {
    const checkIsAnswerSelected = !!selectedId;
    setSelectedFlag(checkIsAnswerSelected);
    if (checkIsAnswerSelected) {
      const selectedAnswer = question.answers.find(
        (item) => item.id === selectedId,
      );
      applicantScore.current[question.trait] += selectedAnswer.points;
      setSelectedId(null);
      if (currentQuestionIndex < applicantsQuestionsAndAnswers.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      }
    }
  }
  function handleSummarySubmit() {
    const checkIsAnswerSelected = !!selectedId;
    setSelectedFlag(checkIsAnswerSelected);
    if (checkIsAnswerSelected) {
      const selectedAnswer = question.answers.find(
        (item) => item.id === selectedId,
      );
      applicantScore.current[question.trait] += selectedAnswer.points;
      const applicantTestResults = Object.values(applicantScore.current);
      for (let job in applicantSummaryScore.current) {
        applicantSummaryScore.current[job] = applicantTestResults
          .map(
            (item, index) => applicantTestResults[index] * weights[job][index],
          )
          .reduce((sum, item) => sum + item);
      }
      const jobWinner = Object.keys(applicantSummaryScore.current).reduce(
        (a, b) =>
          applicantSummaryScore.current[a] > applicantSummaryScore.current[b]
            ? a
            : b,
      );
      setFutureJob(jobWinner);
      setShowSummaryFlag(true);
    }
  }
  return (
    <div>
      <h1>Тест на визначення майбутньої професії.</h1>
      <div className="test-header">
        Питання № {currentQuestionIndex + 1} /{" "}
        {applicantsQuestionsAndAnswers.length}
      </div>
      <div className="test-question-header">{question.questionTextOne}</div>
      <div className="answers-container">
        {question.answers.map((answer) => {
          return (
            <div
              key={answer.id}
              className={answer.id === selectedId ? "selected-answer" : ""}
            >
              <input
                id={answer.id}
                type="radio"
                value={answer.id}
                checked={selectedId === answer.id}
                onChange={handleAnswerRadioChange}
              />
              <label htmlFor={answer.id}>{answer.answerText}</label>
            </div>
          );
        })}
        <div className="test-question-header">{question.questionTextTwo}</div>
      </div>
      <div className="test-submit-container">
        {currentQuestionIndex < applicantsQuestionsAndAnswers.length - 1 ? (
          <button onClick={handleAnswerSubmit}>Наступне питання</button>
        ) : (
          <button onClick={handleSummarySubmit}>Дізнатися результат</button>
        )}
      </div>
      <div className="error-not-selected">
        {!selectedFlag && "Ви маєте обрати відповідь!"}
      </div>
      <div className="summary">
        {showSummaryFlag &&
          "Ваша майбутня робота: " + futureJob.replaceAll("-", " ") + "."}
      </div>
    </div>
  );
}

export default Test;
