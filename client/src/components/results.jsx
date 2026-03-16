import weights from "../data/weights";
import { useRef, useEffect, useState } from "react";
import "../styles/results.css";

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
    `http://localhost:5000/api/applicants/test-results/${applicantId}`,
  );
  if (loadingResultsFlag) {
    return (
      <div>
        <p>Завантаження даних.</p>
      </div>
    );
  } else if (resultsError) {
    return (
      <div>
        <div className="results-server-error">{resultsError}</div>
      </div>
    );
  } else {
    const futureJobsResult = {};
    for (let job in weights) {
      futureJobsResult[job] = Object.values(testScoreResult.current)
        .map((item, index) => weights[job][index] * item)
        .reduce((previousSum, item) => previousSum + item);
    }
    const futureJob = Object.keys(futureJobsResult).reduce((a, b) =>
      futureJobsResult[a] > futureJobsResult[b] ? a : b,
    );
    return (
      <div>
        <div className="results-main-header">Результати тесту.</div>
        <div className="results-job-winner-text">
          Ваша майбутня робота: {futureJob.replaceAll("-", " ")}.
        </div>
      </div>
    );
  }
}

export default Results;
