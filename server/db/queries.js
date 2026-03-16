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
    "INSERT INTO applicants(fullname, phonenumber, dateofbirth, city, school, studyingstatus) VALUES($1, $2, $3, $4, $5, $6) RETURNING id, studyingstatus;",
    [fullName, phoneNumber, dateOfBirth, city, school, studyingStatus],
  );
  return rows;
}

async function addResultsOfGraduateApplicant(
  id,
  mathScore,
  physicsScore,
  activityScore,
  socialScore,
  emotionalStabilityScore,
  structureScore,
  leadershipScore,
) {
  const query = `UPDATE applicants
                    SET hascompletedtest = true,
                        activityscore = $1,
                        socialscore = $2,
                        emotionalstabilityscore = $3,
                        structurescore = $4,
                        leadershipscore = $5,
                        mathscore = $6,
                        physicsscore = $7
                    WHERE id = $8`;
  await pool.query(query, [
    activityScore,
    socialScore,
    emotionalStabilityScore,
    structureScore,
    leadershipScore,
    mathScore,
    physicsScore,
    id,
  ]);
}

async function addResultsOfNonGraduateApplicant(
  id,
  activityScore,
  socialScore,
  emotionalStabilityScore,
  structureScore,
  leadershipScore,
) {
  const query = `UPDATE applicants
                  SET hascompletedtest = true,
                      activityscore = $1,
                      socialscore = $2,
                      emotionalstabilityscore = $3,
                      structurescore = $4,
                      leadershipscore = $5
                  WHERE id = $6`;
  await pool.query(query, [
    activityScore,
    socialScore,
    emotionalStabilityScore,
    structureScore,
    leadershipScore,
    id,
  ]);
}

module.exports = {
  getApplicantByPhone,
  createApplicantWithValidPhoneNumber,
  createApplicantWithNonValidPhoneNumber,
  addResultsOfGraduateApplicant,
  addResultsOfNonGraduateApplicant,
};
