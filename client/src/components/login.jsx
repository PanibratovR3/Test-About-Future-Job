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
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";

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
  const [showDialog, setShowDialog] = useState(false);
  const [phoneCode, setPhoneCode] = useState("");
  const [phoneCodeCorrectFlag, setPhoneCodeCorrectFlag] = useState(true);
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
  const handlePhoneCodeChange = (event) => {
    setPhoneCode(event.target.value);
  };
  const handleClose = () => setShowDialog(false);
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
        .then((response) => {
          if (response.success) {
            setShowDialog(true);
          }
        })
        .catch((error) => setServerError(error.message));
    }
  }
  function handleFinalSubmit() {
    const phoneCodeCheck =
      phoneCode &&
      !isNaN(Number(phoneCode)) &&
      phoneCode.length === PHONECODELIMIT;
    setPhoneCodeCorrectFlag(phoneCodeCheck);
    if (phoneCodeCheck) {
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
            if ("hasCompletedTest" in response && !response.hasCompletedTest) {
              localStorage.setItem("applicantId", String(response.applicantId));
              localStorage.setItem("studyingStatus", response.studyingStatus);
              navigate("/test");
            } else if (
              "hasCompletedTest" in response &&
              response.hasCompletedTest
            ) {
              localStorage.setItem("applicantId", String(response.applicantId));
              localStorage.setItem("studyingStatus", response.studyingStatus);
              navigate("/results");
            } else {
              localStorage.setItem("applicantId", String(response.applicantId));
              localStorage.setItem("studyingStatus", response.studyingStatus);
              navigate("/test");
            }
          } else {
            setShowDialog(false);
            setServerError(response.reason);
          }
        })
        .catch((error) => {
          setShowDialog(false);
          setServerError(error.message);
        });
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
        <Button variant="contained" onClick={handleSubmit}>
          Зареєструватися
        </Button>
        <FormHelperText sx={{ color: "red", textAlign: "center" }}>
          {!!serverError ? serverError : ""}
        </FormHelperText>
      </Stack>
      <Dialog open={showDialog} onClose={handleClose}>
        <DialogTitle>
          На ваш аккаунт було надіслано код з 5 цифр. Введіть його, будь-ласка.
        </DialogTitle>
        <DialogContent sx={{ display: "flex", justifyContent: "center" }}>
          <TextField
            name="phoneCode"
            value={phoneCode}
            onChange={handlePhoneCodeChange}
            slotProps={{ htmlInput: { maxLength: PHONECODELIMIT } }}
            error={!phoneCodeCorrectFlag}
            helperText={
              !phoneCodeCorrectFlag
                ? "Код має складатися з 5 цифр і не містити літер."
                : ""
            }
          />
        </DialogContent>
        <DialogActions sx={{ display: "flex", justifyContent: "center" }}>
          <Button variant="contained" onClick={handleFinalSubmit}>
            Почати тест
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Login;
