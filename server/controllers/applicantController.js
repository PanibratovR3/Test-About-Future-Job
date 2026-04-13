require("dotenv").config({ quiet: true });
const queries = require("../db/queries");
const telegram = require("../config/telegram");

async function requestPhoneCode(request, response) {
  try {
    const { applicantPhoneNumber } = request.body;
    await telegram.client.sendCode(
      {
        apiId: parseInt(process.env.API_ID),
        apiHash: process.env.API_HASH,
      },
      applicantPhoneNumber,
    );
    response.json({ success: true });
  } catch (error) {
    response.json({
      success: false,
      reason: "Не вдалося отримати код з Telegram.",
    });
  }
}

async function loginApplicant(request, response) {
  try {
    const {
      applicantFullName,
      applicantPhoneNumber,
      applicantDateOfBirth,
      applicantCity,
      applicantSchool,
      applicantStudyingStatus,
      applicantPassword,
      applicantPhoneCode,
    } = request.body;
    await telegram.client.start({
      phoneNumber: async () => applicantPhoneNumber,
      password: async () => applicantPassword,
      phoneCode: async () => applicantPhoneCode,
      onError: async (error) => {
        if (error.message === "Password is empty") {
          await telegram.client.invoke(new telegram.Api.auth.LogOut({}));
          const existingApplicant =
            await queries.getApplicantByPhone(applicantPhoneNumber);
          if (existingApplicant.length > 0) {
            return response.json({
              success: true,
              applicantId: existingApplicant[0].id,
              studyingStatus: existingApplicant[0].studyingstatus,
              hasCompletedTest: existingApplicant[0].hascompletedtest,
            });
          } else {
            const newApplicant =
              await queries.createApplicantWithNonValidPhoneNumber(
                applicantFullName,
                applicantPhoneNumber,
                applicantDateOfBirth,
                applicantCity,
                applicantSchool,
                applicantStudyingStatus,
              );
            return response.json({
              success: true,
              applicantId: newApplicant[0].id,
              studyingStatus: newApplicant[0].studyingstatus,
            });
          }
        } else {
          await telegram.client.invoke(new telegram.Api.auth.LogOut({}));
          return response.json({
            success: false,
            reason: "Сталася помилка під час реєстрації.",
          });
        }
      },
    });
    const isUserAuthorized = await telegram.client.isUserAuthorized();
    if (isUserAuthorized) {
      await telegram.client.invoke(new telegram.Api.auth.LogOut({}));
      const existingApplicant =
        await queries.getApplicantByPhone(applicantPhoneNumber);
      if (existingApplicant.length > 0) {
        return response.json({
          success: true,
          applicantId: existingApplicant[0].id,
          studyingStatus: existingApplicant[0].studyingstatus,
          hasCompletedTest: existingApplicant[0].hascompletedtest,
        });
      } else {
        const newApplicant = await queries.createApplicantWithValidPhoneNumber(
          applicantFullName,
          applicantPhoneNumber,
          applicantDateOfBirth,
          applicantCity,
          applicantSchool,
          applicantStudyingStatus,
        );
        return response.json({
          success: true,
          applicantId: newApplicant[0].id,
          studyingStatus: newApplicant[0].studyingstatus,
        });
      }
    }
  } catch (error) {
    console.log(error.message);
  }
}

async function addResultsOfTestOfGraduateApplicant(request, response) {
  try {
    const { id } = request.params;
    const {
      activityScore,
      socialScore,
      emotionalStabilityScore,
      structureScore,
      leadershipScore,
      mathScore,
      physicsScore,
    } = request.body;
    await queries.addResultsOfGraduateApplicant(
      Number(id),
      mathScore,
      physicsScore,
      activityScore,
      socialScore,
      emotionalStabilityScore,
      structureScore,
      leadershipScore,
    );
    response.json({ success: true });
  } catch (error) {
    response.json({
      success: false,
      reason: "Не вдалося завантажити результати тесту.",
    });
  }
}

async function addResultsOfNonGraduateApplicant(request, response) {
  try {
    const { id } = request.params;
    const {
      activityScore,
      socialScore,
      emotionalStabilityScore,
      structureScore,
      leadershipScore,
    } = request.body;
    await queries.addResultsOfNonGraduateApplicant(
      Number(id),
      activityScore,
      socialScore,
      emotionalStabilityScore,
      structureScore,
      leadershipScore,
    );
    response.json({ success: true });
  } catch (error) {
    response.json({
      success: false,
      reason: "Не вдалося завантажити результати тесту.",
    });
  }
}

async function getResultsOfTestOfApplicant(request, response) {
  try {
    const { id } = request.params;
    const results = await queries.getResultsOfTestOfApplicant(Number(id));
    response.json({
      success: true,
      score: {
        activityScore: Number(results.activityscore),
        socialScore: Number(results.socialscore),
        emotionalStabilityScore: Number(results.emotionalstabilityscore),
        structureScore: Number(results.structurescore),
        leadershipScore: Number(results.leadershipscore),
      },
    });
  } catch (error) {
    response.json({
      success: false,
      reason: "Не вдалося завантажити результати тесту.",
    });
  }
}

module.exports = {
  requestPhoneCode,
  loginApplicant,
  addResultsOfTestOfGraduateApplicant,
  addResultsOfNonGraduateApplicant,
  getResultsOfTestOfApplicant,
};
