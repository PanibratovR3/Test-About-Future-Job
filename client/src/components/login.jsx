import "../styles/login.css";
import { useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

function Login() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [fullName, setFullName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [city, setCity] = useState("");
  const [school, setSchool] = useState("");
  const [studyingStatus, setStudyingStatus] = useState("");

  const PHONELIMIT = 13;
  const INPUTPHONELIMIT = 12;
  const handleFullNameChange = (event) => {
    setFullName(event.target.value);
  };
  const handleDateOfBirthChange = (event) => {
    setDateOfBirth(event.target.value);
  };
  const handleCityChange = (event) => {
    setCity(event.target.value);
  };
  const handleSchoolChange = (event) => {
    setSchool(event.target.value);
  };
  const handleStudyingStatusChange = (event) => {
    setStudyingStatus(event.target.value);
  };
  return (
    <div>
      <div className="form-row">
        <label htmlFor="fullName">ПІБ: </label>
        <input
          id="fullName"
          name="fullName"
          value={fullName}
          onChange={handleFullNameChange}
          placeholder="Іванов Іван Іванович"
        />
      </div>
      <div className="form-row">
        <label htmlFor="phoneNumber">Номер телефону:</label>
        <PhoneInput
          id="phoneNumber"
          placeholder="Enter phone number"
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
          value={dateOfBirth}
          onChange={handleDateOfBirthChange}
          placeholder="Іванов Іван Іванович"
        />
      </div>
      <div className="form-row">
        <label htmlFor="city">Місто: </label>
        <input id="city" name="city" value={city} onChange={handleCityChange} />
      </div>
      <div className="form-row">
        <label htmlFor="school">Школа, де ви навчалися (навчаєтесь): </label>
        <input
          id="school"
          name="school"
          value={school}
          onChange={handleSchoolChange}
        />
      </div>
      <div className="form-row">
        <label htmlFor="studyingStatus">Статус навчання</label>
        <select
          value={studyingStatus}
          onChange={handleStudyingStatusChange}
          id="studyingStatus"
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
    </div>
  );
}

export default Login;
