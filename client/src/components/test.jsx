import "../styles/test.css";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import questionsAndAnswers from "../data/questionsAndAnswers";
// import weights from "../data/weights";
function Test() {
  const applicantId = Number(localStorage.getItem("applicantId"));
  const studyingStatus = localStorage.getItem("studyingStatus");
  const applicantsQuestionsAndAnswers =
    studyingStatus === "Graduated"
      ? questionsAndAnswers.graduate
      : questionsAndAnswers.nonGraduate;
  const [selectedId, setSelectedId] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedFlag, setSelectedFlag] = useState(true);
  const [allSubjectInputsFilled, setAllSubjectInputsFilled] = useState(true);
  const [serverErrorText, setServerErrorText] = useState("");
  // const [showSummaryFlag, setShowSummaryFlag] = useState(false);
  // const [futureJob, setFutureJob] = useState("");
  const [subjectsFormData, setSubjectsFormData] = useState({
    math: "",
    physics: "",
  });
  const navigate = useNavigate();

  const applicantScore = useRef({
    activity: 0.0,
    social: 0.0,
    emotionalStability: 0.0,
    structure: 0.0,
    leadership: 0.0,
  });
  // const applicantSummaryScore = useRef({
  //   Backend: 0.0,
  //   Frontend: 0.0,
  //   QA: 0.0,
  //   DevOps: 0.0,
  //   "Data-Science": 0.0,
  //   "Data-Engineering": 0.0,
  //   "Business-Analysis": 0.0,
  //   "Project-Management": 0.0,
  // });
  const SUBJECTPOINTSMIN = 1;
  const SUBJECTPOINTSMAX = 12;
  const question = applicantsQuestionsAndAnswers[currentQuestionIndex];

  const handleAnswerRadioChange = (event) => {
    setSelectedId(event.target.value);
  };

  const handleSubjectInputChange = (event) => {
    const { name, value } = event.target;
    setSubjectsFormData({
      ...subjectsFormData,
      [name]: value,
    });
  };

  function handleAnswerSubmit() {
    if (question.trait === "subjects") {
      const checkFormDataFilled = Object.values(subjectsFormData).every(
        (item) =>
          !!item &&
          !isNaN(parseInt(item)) &&
          parseInt(item) >= SUBJECTPOINTSMIN &&
          parseInt(item) <= SUBJECTPOINTSMAX,
      );
      setAllSubjectInputsFilled(checkFormDataFilled);
      if (checkFormDataFilled) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      }
    } else {
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
  }

  function handleSummarySubmit() {
    const checkIsAnswerSelected = !!selectedId;
    setSelectedFlag(checkIsAnswerSelected);
    if (checkIsAnswerSelected) {
      const selectedAnswer = question.answers.find(
        (item) => item.id === selectedId,
      );
      applicantScore.current[question.trait] += selectedAnswer.points;
      if (studyingStatus === "Graduated") {
        fetch(
          `http://localhost:5000/api/applicants/graduate/test-results/${applicantId}`,
          {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              activityScore: applicantScore.current.activity,
              socialScore: applicantScore.current.social,
              emotionalStabilityScore:
                applicantScore.current.emotionalStability,
              structureScore: applicantScore.current.structure,
              leadershipScore: applicantScore.current.leadership,
              mathScore: Number(subjectsFormData.math),
              physicsScore: Number(subjectsFormData.physics),
            }),
          },
        )
          .then((response) => {
            if (!response.ok) {
              throw new Error("Помилка сервера.");
            }
            return response.json();
          })
          .then((response) => {
            if (response.success) {
              navigate("/results");
            } else {
              throw new Error(response.reason);
            }
          })
          .catch((error) => setServerErrorText(error.message));
      } else {
        fetch(
          `http://localhost:5000/api/applicants/non-graduate/test-results/${applicantId}`,
          {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              activityScore: applicantScore.current.activity,
              socialScore: applicantScore.current.social,
              emotionalStabilityScore:
                applicantScore.current.emotionalStability,
              structureScore: applicantScore.current.structure,
              leadershipScore: applicantScore.current.leadership,
            }),
          },
        )
          .then((response) => {
            if (!response.ok) {
              throw new Error("Помилка сервера.");
            }
            return response.json();
          })
          .then((response) => {
            if (response.success) {
              navigate("/results");
            } else {
              throw new Error(response.reason);
            }
          })
          .catch((error) => setServerErrorText(error.message));
      }
      // const applicantTestResults = Object.values(applicantScore.current);
      // for (let job in applicantSummaryScore.current) {
      //   applicantSummaryScore.current[job] = applicantTestResults
      //     .map(
      //       (item, index) => applicantTestResults[index] * weights[job][index],
      //     )
      //     .reduce((sum, item) => sum + item);
      // }
      // const jobWinner = Object.keys(applicantSummaryScore.current).reduce(
      //   (a, b) =>
      //     applicantSummaryScore.current[a] > applicantSummaryScore.current[b]
      //       ? a
      //       : b,
      // );
      // setFutureJob(jobWinner);
      // setShowSummaryFlag(true);
    }
  }
  if (question.trait === "subjects") {
    return (
      <div>
        <div className="test-main-header">
          Тест на визначення майбутньої професії.
        </div>
        <div className="test-header">
          Питання № {currentQuestionIndex + 1} /{" "}
          {applicantsQuestionsAndAnswers.length}
        </div>
        <div className="test-subject-header">{question.questionText}</div>
        <div className="subjects-container">
          {question.subjects.map((item) => {
            return (
              <div className="subjects-row" key={item.id}>
                <label htmlFor={item.id}>{item.subjectLabelName}:</label>
                <input
                  id={item.id}
                  type="number"
                  min={SUBJECTPOINTSMIN}
                  max={SUBJECTPOINTSMAX}
                  name={item.subjectInputNameAttribute}
                  value={subjectsFormData[item.subjectInputNameAttribute]}
                  onChange={handleSubjectInputChange}
                />
              </div>
            );
          })}
        </div>
        <div className="test-submit-container">
          <button onClick={handleAnswerSubmit}>Наступне питання</button>
        </div>
        <div className="error-not-filled">
          {!allSubjectInputsFilled &&
            "Усі поля по предметам мають бути заповнені (від 1 до 12) !"}
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div className="test-main-header">
          Тест на визначення майбутньої професії.
        </div>
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
        <div className="server-error">
          {!!serverErrorText && serverErrorText}
        </div>
      </div>
    );
  }
}

export default Test;
