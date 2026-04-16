import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import questionsAndAnswers from "../data/questionsAndAnswers";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import FormControlLabel from "@mui/material/FormControlLabel";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import RadioGroup from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";
import FormHelperText from "@mui/material/FormHelperText";

function Test() {
  const applicantId = Number(localStorage.getItem("applicantId"));
  const studyingStatus = localStorage.getItem("studyingStatus");
  const applicantsQuestionsAndAnswers =
    studyingStatus === "Graduated"
      ? questionsAndAnswers.graduate
      : questionsAndAnswers.nonGraduate;
  const [selectedId, setSelectedId] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [allSubjectInputsFilled, setAllSubjectInputsFilled] = useState(true);
  const [serverErrorText, setServerErrorText] = useState("");
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
    const selectedAnswer = question.answers.find(
      (item) => item.id === selectedId,
    );
    applicantScore.current[question.trait] += selectedAnswer.points;
    setSelectedId(null);
    if (studyingStatus === "Graduated") {
      fetch(
        `http://localhost:5000/api/applicant/graduate/test-results/${applicantId}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            activityScore: applicantScore.current.activity,
            socialScore: applicantScore.current.social,
            emotionalStabilityScore: applicantScore.current.emotionalStability,
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
        `http://localhost:5000/api/applicant/non-graduate/test-results/${applicantId}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            activityScore: applicantScore.current.activity,
            socialScore: applicantScore.current.social,
            emotionalStabilityScore: applicantScore.current.emotionalStability,
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
  }
  if (question.trait === "subjects") {
    return (
      <div>
        <Typography variant="h2" component="h2">
          Тест на визначення майбутньої професії
        </Typography>
        <Typography variant="h3" component="h2">
          Питання № {currentQuestionIndex + 1} /{" "}
          {applicantsQuestionsAndAnswers.length}
        </Typography>
        <Typography variant="h4" component="h4">
          {question.questionTextSubjects}
        </Typography>
        <Stack>
          <Stack spacing={3} sx={{ pt: 3 }}>
            {question.subjects.map((item) => {
              return (
                <TextField
                  key={item.id}
                  type="number"
                  slotProps={{
                    htmlInput: { min: SUBJECTPOINTSMIN, max: SUBJECTPOINTSMAX },
                  }}
                  name={item.subjectInputNameAttribute}
                  label={item.subjectLabelName}
                  value={subjectsFormData[item.subjectInputNameAttribute]}
                  onChange={handleSubjectInputChange}
                  error={
                    !allSubjectInputsFilled &&
                    (subjectsFormData[item.subjectInputNameAttribute].length ===
                      0 ||
                      parseInt(
                        subjectsFormData[item.subjectInputNameAttribute],
                      ) < SUBJECTPOINTSMIN ||
                      Number(subjectsFormData[item.subjectInputNameAttribute]) >
                        SUBJECTPOINTSMAX ||
                      isNaN(
                        Number(
                          subjectsFormData[item.subjectInputNameAttribute],
                        ),
                      ))
                  }
                  helperText={
                    !allSubjectInputsFilled &&
                    (subjectsFormData[item.subjectInputNameAttribute].length ===
                      0 ||
                      Number(subjectsFormData[item.subjectInputNameAttribute]) <
                        SUBJECTPOINTSMIN ||
                      Number(subjectsFormData[item.subjectInputNameAttribute]) >
                        SUBJECTPOINTSMAX ||
                      isNaN(
                        Number(
                          subjectsFormData[item.subjectInputNameAttribute],
                        ),
                      ))
                      ? `Оцінка з предмету має бути числом в межах від ${SUBJECTPOINTSMIN} до ${SUBJECTPOINTSMAX}`
                      : ``
                  }
                />
              );
            })}
            <FormControl
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Button
                variant="contained"
                sx={{ width: "50%" }}
                onClick={handleAnswerSubmit}
              >
                Наступне питання
              </Button>
            </FormControl>
          </Stack>
        </Stack>
      </div>
    );
  } else {
    return (
      <div>
        <Typography variant="h2" component="h2">
          Тест на визначення майбутньої професії
        </Typography>
        <Typography variant="h3" component="h2">
          Питання № {currentQuestionIndex + 1} /{" "}
          {applicantsQuestionsAndAnswers.length}
        </Typography>
        <Stack spacing={5}>
          <Typography variant="h5">{question.questionTextOne}</Typography>
          <RadioGroup>
            {question.answers.map((item) => {
              return (
                <Box
                  key={item.id}
                  sx={
                    item.id === selectedId
                      ? {
                          border: "1px solid green",
                          borderRadius: "20px",
                          backgroundColor: "lightgreen",
                          display: "flex",
                          justifyContent: "flex-start",
                        }
                      : { display: "flex", justifyContent: "flex-start" }
                  }
                >
                  <FormControlLabel
                    key={item.id}
                    label={item.answerText}
                    value={item.id}
                    checked={selectedId === item.id}
                    onChange={handleAnswerRadioChange}
                    control={<Radio />}
                  />
                </Box>
              );
            })}
          </RadioGroup>
          <Typography variant="h5">{question.questionTextTwo}</Typography>
          <FormControl
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {currentQuestionIndex < applicantsQuestionsAndAnswers.length - 1 ? (
              <Button
                variant="contained"
                sx={{ width: "50%" }}
                onClick={handleAnswerSubmit}
                disabled={!selectedId}
              >
                Наступне питання
              </Button>
            ) : (
              <Button
                variant="contained"
                sx={{ width: "50%" }}
                onClick={handleSummarySubmit}
                disabled={!selectedId}
              >
                Дізнатися результат
              </Button>
            )}
          </FormControl>
          <FormHelperText
            sx={{
              color: "red",
              fontWeight: "bold",
              textAlign: "center",
              fontSize: 30,
            }}
          >
            {!!serverErrorText ? serverErrorText : ""}
          </FormHelperText>
        </Stack>
      </div>
    );
  }
}

export default Test;
