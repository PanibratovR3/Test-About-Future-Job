import "../styles/login.css";
import { useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { useNavigate } from "react-router-dom";
import Stack from "@mui/material/Stack";
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";
import FormHelperText from "@mui/material/FormHelperText";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";

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
      Object.values(requiredFormInputs).every((item) => item.trim().length > 0);
    setAllRequiredFieldsNotEmptyFlag(checkAllRequiredFields);
    if (checkAllRequiredFields) {
      fetch("http://localhost:5000/api/applicant/phone-code", {
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
        .catch((error) => setServerError(error.message));
      const phoneCode = prompt(
        "На ваш аккаунт було надіслано код з 5 цифр. Введіть його, будь-ласка.",
      );
      if (
        phoneCode &&
        !isNaN(Number(phoneCode)) &&
        phoneCode.length === PHONECODELIMIT
      ) {
        fetch("http://localhost:5000/api/applicant/login", {
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
                navigate("/results");
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
          .catch((error) => setServerError(error.message));
      } else {
        setServerError("Не надано код, отриманого з аккаунту Telegram.");
      }
    }
  }
  return (
    <div>
      <Stack spacing={3}>
        <TextField
          name="fullName"
          value={requiredFormInputs.fullName}
          onChange={handleRequiredFormInputChange}
          placeholder="Іванов Іван Іванович"
          label="ПІБ"
          error={
            !allRequiredFieldsNotEmptyFlag &&
            requiredFormInputs.fullName.length === 0
          }
          helperText={
            !allRequiredFieldsNotEmptyFlag &&
            requiredFormInputs.fullName.length === 0
              ? "Не вказано повне ім'я."
              : ""
          }
        />
        <Stack direction="row" spacing={2}>
          <InputLabel htmlFor="phoneNumber">Номер телефону:</InputLabel>
          <PhoneInput
            id="phoneNumber"
            placeholder="0XX XXX XXXX"
            value={phoneNumber}
            name="phoneNumber"
            defaultCountry="UA"
            onChange={setPhoneNumber}
            maxLength={INPUTPHONELIMIT}
          />
        </Stack>
        <FormHelperText
          component="span"
          sx={{ color: "red", textAlign: "center" }}
        >
          {!allRequiredFieldsNotEmptyFlag &&
          (phoneNumber.length === 0 || phoneNumber.length !== PHONELIMIT)
            ? "Не вказано номер телефону."
            : ""}
        </FormHelperText>
        <TextField
          name="dateOfBirth"
          value={requiredFormInputs.dateOfBirth}
          onChange={handleRequiredFormInputChange}
          type="date"
          slotProps={{ inputLabel: { shrink: true } }}
          label="Дата народження"
          error={
            !allRequiredFieldsNotEmptyFlag &&
            requiredFormInputs.dateOfBirth.length === 0
          }
          helperText={
            !allRequiredFieldsNotEmptyFlag &&
            requiredFormInputs.dateOfBirth.length === 0
              ? "Не вказано дату народження"
              : ""
          }
        />
        <TextField
          name="city"
          value={requiredFormInputs.city}
          onChange={handleRequiredFormInputChange}
          label="Місто"
          error={
            !allRequiredFieldsNotEmptyFlag &&
            requiredFormInputs.city.length === 0
          }
          helperText={
            !allRequiredFieldsNotEmptyFlag &&
            requiredFormInputs.city.length === 0
              ? "Не вказано місто."
              : ""
          }
        />
        <TextField
          name="school"
          value={requiredFormInputs.school}
          onChange={handleRequiredFormInputChange}
          label="Школа, де ви навчалися (або навчаєтесь)"
          error={
            !allRequiredFieldsNotEmptyFlag &&
            requiredFormInputs.school.length === 0
          }
          helperText={
            !allRequiredFieldsNotEmptyFlag &&
            requiredFormInputs.school.length === 0
              ? "Не вказана школа."
              : ""
          }
        />
        <FormControl>
          <InputLabel>Статус навчання</InputLabel>
          <Select
            name="studyingStatus"
            value={requiredFormInputs.studyingStatus}
            onChange={handleRequiredFormInputChange}
            label="Статус навчання"
            error={
              !allRequiredFieldsNotEmptyFlag &&
              requiredFormInputs.studyingStatus.length === 0
            }
          >
            <MenuItem value="">Не обрано</MenuItem>
            <MenuItem value={"Studying in 6th grade"}>
              Навчаюсь в 6-му класі
            </MenuItem>
            <MenuItem value={"Studying in 7th grade"}>
              Навчаюсь в 7-му класі
            </MenuItem>
            <MenuItem value={"Studying in 8th grade"}>
              Навчаюсь в 8-му класі
            </MenuItem>
            <MenuItem value={"Studying in 9th grade"}>
              Навчаюсь в 9-му класі
            </MenuItem>
            <MenuItem value={"Studying in 10th grade"}>
              Навчаюсь в 10-му класі
            </MenuItem>
            <MenuItem value={"Studying in 11th grade"}>
              Навчаюсь в 11-му класі
            </MenuItem>
            <MenuItem value={"Graduated"}>Випускник</MenuItem>
          </Select>
          <FormHelperText sx={{ color: "red" }}>
            {!allRequiredFieldsNotEmptyFlag &&
            requiredFormInputs.studyingStatus.length === 0
              ? "Не вказаний статус навчання."
              : ""}
          </FormHelperText>
        </FormControl>
        <FormControl>
          <TextField
            name="password"
            type="password"
            label="Пароль"
            value={password}
            onChange={handlePasswordInputChange}
          />
          <FormHelperText>
            від аккаунту Telegram з метою підтвердження особистості
          </FormHelperText>
        </FormControl>
        <Button variant="contained">Зареєструватися і почати тест</Button>
      </Stack>
      {/* <div className="form-row">
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
      </div> */}
    </div>
  );
}

export default Login;
