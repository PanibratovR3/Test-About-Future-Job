import "../styles/login.css";
import { useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [requiredFormInputs, setRequiredFormInputs] = useState({
    fullName: "",
    dateOfBirth: "",
    city: "",
    school: "",
    studyingStatus: "",
  });
  const [allRequiredFieldsNotEmptyFlag, setAllRequiredFieldsNotEmptyFlag] =
    useState(true);
  const [password, setPassword] = useState("");
  const [serverError, setServerError] = useState(null);
  const PHONELIMIT = 13;
  const INPUTPHONELIMIT = 12;
  const PHONECODELIMIT = 5;
  const navigate = useNavigate();
  const handleRequiredFormInputChange = (event) => {
    const { name, value } = event.target;
    setRequiredFormInputs({
      ...requiredFormInputs,
      [name]: value,
    });
  };
  const handlePasswordInputChange = (event) => {
    setPassword(event.target.value);
  };
  function handleSubmit() {
    const checkAllRequiredFields =
      !!phoneNumber &&
      phoneNumber.length === PHONELIMIT &&
      Object.values(requiredFormInputs).every((item) => item.length > 0);
    setAllRequiredFieldsNotEmptyFlag(checkAllRequiredFields);
    if (checkAllRequiredFields) {
      fetch("http://localhost:5000/api/applicants/phone-code", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ applicantPhoneNumber: phoneNumber }),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Помилка сервера.");
          }
          return response.json();
        })
        .then((response) => console.log(response))
        .catch(() => setServerError("Помилка сервера."));
      const phoneCode = prompt(
        "На ваш аккаунт було надіслано код з 5 цифр. Введіть його, будь-ласка.",
      );
      if (
        phoneCode &&
        !isNaN(Number(phoneCode)) &&
        phoneCode.length === PHONECODELIMIT
      ) {
        fetch("http://localhost:5000/api/applicants/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            applicantFullName: requiredFormInputs.fullName,
            applicantPhoneNumber: phoneNumber,
            applicantDateOfBirth: requiredFormInputs.dateOfBirth,
            applicantCity: requiredFormInputs.city,
            applicantSchool: requiredFormInputs.school,
            applicantStudyingStatus: requiredFormInputs.studyingStatus,
            applicantPassword: password,
            applicantPhoneCode: phoneCode,
          }),
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error("Помилка сервера.");
            }
            return response.json();
          })
          .then((response) => {
            if (response.success) {
              if (
                "hasCompletedTest" in response &&
                !response.hasCompletedTest
              ) {
                localStorage.setItem(
                  "applicantId",
                  String(response.applicantId),
                );
                localStorage.setItem("studyingStatus", response.studyingStatus);
                navigate("/test");
              } else if (
                "hasCompletedTest" in response &&
                response.hasCompletedTest
              ) {
                localStorage.setItem(
                  "applicantId",
                  String(response.applicantId),
                );
                localStorage.setItem("studyingStatus", response.studyingStatus);
                navigate("/finish");
              } else {
                localStorage.setItem(
                  "applicantId",
                  String(response.applicantId),
                );
                localStorage.setItem("studyingStatus", response.studyingStatus);
                navigate("/test");
              }
            } else {
              setServerError(response.reason);
            }
          })
          .catch(() => setServerError("Помилка сервера."));
      } else {
        setServerError("Не надано код, отриманого з аккаунту Telegram.");
      }
    }
  }
  return (
    <div>
      <div className="form-row">
        <label htmlFor="fullName">
          ПІБ:<span className="required">*</span>{" "}
        </label>
        <input
          id="fullName"
          name="fullName"
          value={requiredFormInputs.fullName}
          onChange={handleRequiredFormInputChange}
          placeholder="Іванов Іван Іванович"
        />
      </div>
      <div className="form-row">
        <label htmlFor="phoneNumber">
          Номер телефону:<span className="required">*</span>
        </label>
        <PhoneInput
          id="phoneNumber"
          placeholder="0XX XXX XXXX"
          value={phoneNumber}
          name="phoneNumber"
          defaultCountry="UA"
          onChange={setPhoneNumber}
          maxLength={INPUTPHONELIMIT}
        />
      </div>
      <div className="form-row">
        <label htmlFor="dateOfBirth">
          Дата народження:<span className="required">*</span>{" "}
        </label>
        <input
          type="date"
          id="dateOfBirth"
          name="dateOfBirth"
          value={requiredFormInputs.dateOfBirth}
          onChange={handleRequiredFormInputChange}
          placeholder="Іванов Іван Іванович"
        />
      </div>
      <div className="form-row">
        <label htmlFor="city">
          Місто:<span className="required">*</span>{" "}
        </label>
        <input
          id="city"
          name="city"
          value={requiredFormInputs.city}
          onChange={handleRequiredFormInputChange}
        />
      </div>
      <div className="form-row">
        <label htmlFor="school">
          Школа, де ви навчалися (навчаєтесь):
          <span className="required">*</span>{" "}
        </label>
        <input
          id="school"
          name="school"
          value={requiredFormInputs.school}
          onChange={handleRequiredFormInputChange}
        />
      </div>
      <div className="form-row">
        <label htmlFor="studyingStatus">
          Статус навчання:<span className="required">*</span>
        </label>
        <select
          value={requiredFormInputs.studyingStatus}
          onChange={handleRequiredFormInputChange}
          id="studyingStatus"
          name="studyingStatus"
        >
          <option value={""}>Не обрано</option>
          <option value={"Studying in 6th grade"}>Навчаюсь в 6-му класі</option>
          <option value={"Studying in 7th grade"}>Навчаюсь в 7-му класі</option>
          <option value={"Studying in 8th grade"}>Навчаюсь в 8-му класі</option>
          <option value={"Studying in 9th grade"}>Навчаюсь в 9-му класі</option>
          <option value={"Studying in 10th grade"}>
            Навчаюсь в 10-му класі
          </option>
          <option value={"Studying in 11th grade"}>
            Навчаюсь в 11-му класі
          </option>
          <option value={"Graduated"}>Випускник</option>
        </select>
      </div>
      <div className="form-row">
        <label htmlFor="password">
          Пароль<sup>1</sup>:
        </label>
        <input
          id="password"
          name="password"
          type="password"
          value={password}
          onChange={handlePasswordInputChange}
        />
      </div>
      <div className="error-field">
        {!allRequiredFieldsNotEmptyFlag &&
          "Усі обов'язкові поля мають бути заповнені."}
      </div>
      <div className="server-error-field">{serverError ? serverError : ""}</div>
      <div className="form-row-button">
        <button onClick={handleSubmit}>Зареєструватися і почати тест</button>
      </div>
      <div className="information">
        <span className="required">*</span> - обов'язковe до заповнення
      </div>
      <div className="information">
        1 - від аккаунту Telegram з метою підтвердження особистості
      </div>
    </div>
  );
}

export default Login;
