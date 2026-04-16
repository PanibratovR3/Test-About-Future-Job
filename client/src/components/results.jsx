import weights from "../data/weights";
import { useRef, useEffect, useState } from "react";
import "../styles/results.css";
import CircularProgress from "@mui/material/CircularProgress";
import FormHelperText from "@mui/material/FormHelperText";
import Typography from "@mui/material/Typography";

function Results() {
  const applicantId = Number(localStorage.getItem("applicantId"));
  const testScoreResult = useRef(null);
  function useFetchResultsOfTest(url) {
    const [loadingResultsFlag, setLoadingResultsFlag] = useState(true);
    const [resultsError, setResultsError] = useState(null);
    useEffect(() => {
      fetch(url, {
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Помилка серверу.");
          }
          return response.json();
        })
        .then((response) => {
          if (response.success) {
            testScoreResult.current = response.score;
          } else {
            throw new Error(response.reason);
          }
        })
        .catch((error) => setResultsError(error.message))
        .finally(() => setLoadingResultsFlag(false));
    }, [url]);
    return { loadingResultsFlag, resultsError };
  }
  const { loadingResultsFlag, resultsError } = useFetchResultsOfTest(
    `http://localhost:5000/api/applicant/test-results/${applicantId}`,
  );
  if (loadingResultsFlag) {
    return (
      <div>
        <CircularProgress />
      </div>
    );
  } else if (resultsError) {
    return (
      <div>
        <FormHelperText
          sx={{
            color: "red",
            fontWeight: "bold",
            textAlign: "center",
            fontSize: 50,
          }}
        >
          {resultsError}
        </FormHelperText>
      </div>
    );
  } else {
    const futureJobsResult = {};
    for (let job in weights) {
      futureJobsResult[job] = Object.values(testScoreResult.current)
        .map((item, index) => weights[job][index] * item)
        .reduce((previousSum, item) => previousSum + item);
    }
    const sortedJobsDesc = Object.keys(futureJobsResult).sort(
      (a, b) => futureJobsResult[b] - futureJobsResult[a],
    );
    return (
      <div>
        <Typography variant="h2" component="h2">
          Результати тесту.
        </Typography>
        <Typography variant="body1" sx={{ fontSize: 20, fontStyle: "italic" }}>
          Ваша майбутня робота: {sortedJobsDesc[0].replaceAll("-", " ")}
        </Typography>
        <Typography variant="body1" sx={{ fontSize: 20, fontStyle: "italic" }}>
          Або: {sortedJobsDesc[1].replaceAll("-", " ")}.
        </Typography>
      </div>
    );
  }
}

export default Results;
