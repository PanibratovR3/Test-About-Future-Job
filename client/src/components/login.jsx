import "../styles/login.css";
import { useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

function Login() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [requiredFormInputs, setRequiredFormInputs] = useState({
    fullName: "",
    dateOfBirth: "",
    city: "",
    school: "",
    studyingStatus: "",
  });
  const [password, setPassword] = useState("");
  const PHONELIMIT = 13;
  const INPUTPHONELIMIT = 12;
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
  return (
    <div>
      <div className="form-row">
        <label htmlFor="fullName">ПІБ: </label>
        <input
          id="fullName"
          name="fullName"
          value={requiredFormInputs.fullName}
          onChange={handleRequiredFormInputChange}
          placeholder="Іванов Іван Іванович"
        />
      </div>
      <div className="form-row">
        <label htmlFor="phoneNumber">Номер телефону:</label>
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
        <label htmlFor="dateOfBirth">Дата народження: </label>
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
        <label htmlFor="city">Місто: </label>
        <input
          id="city"
          name="city"
          value={requiredFormInputs.city}
          onChange={handleRequiredFormInputChange}
        />
      </div>
      <div className="form-row">
        <label htmlFor="school">Школа, де ви навчалися (навчаєтесь): </label>
        <input
          id="school"
          name="school"
          value={requiredFormInputs.school}
          onChange={handleRequiredFormInputChange}
        />
      </div>
      <div className="form-row">
        <label htmlFor="studyingStatus">Статус навчання</label>
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
        <label htmlFor="password">Пароль (необов'язково): </label>
        <input
          id="password"
          name="password"
          type="password"
          value={password}
          onChange={handlePasswordInputChange}
        />
      </div>
    </div>
  );
}

export default Login;
