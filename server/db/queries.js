const pool = require("./pool.js");

async function getApplicantByPhone(phoneNumber) {
  const { rows } = await pool.query(
    "SELECT id, phonenumber, studyingstatus, hascompletedtest FROM applicants WHERE phonenumber = $1",
    [phoneNumber],
  );
  return rows;
}

async function createApplicantWithValidPhoneNumber(
  fullName,
  phoneNumber,
  dateOfBirth,
  city,
  school,
  studyingStatus,
) {
  const { rows } = await pool.query(
    "INSERT INTO applicants(fullname, phonenumber, isphonenumbervalid, dateofbirth, city, school, studyingstatus) VALUES($1, $2, true, $3, $4, $5, $6) RETURNING id, studyingstatus;",
    [fullName, phoneNumber, dateOfBirth, city, school, studyingStatus],
  );
  return rows;
}

async function createApplicantWithNonValidPhoneNumber(
  fullName,
  phoneNumber,
  dateOfBirth,
  city,
  school,
  studyingStatus,
) {
  const { rows } = await pool.query(
    "INSERT INTO applicants(fullname, phonenumber, dateofbirth, city, school, studyingstatus) VALUES($1, $2, $3, $4, $5, $6)",
    [fullName, phoneNumber, dateOfBirth, city, school, studyingStatus],
  );
  return rows;
}

module.exports = {
  getApplicantByPhone,
  createApplicantWithValidPhoneNumber,
  createApplicantWithNonValidPhoneNumber,
};
