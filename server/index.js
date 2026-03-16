const express = require("express");
const { TelegramClient } = require("telegram");
const { StringSession } = require("telegram/sessions");
const cors = require("cors");
const queries = require("./db/queries");

require("dotenv").config({ quiet: true });

const app = express();

app.use(cors());
app.use(express.json());

const SESSION = new StringSession("");
const client = new TelegramClient(
  SESSION,
  parseInt(process.env.API_ID),
  process.env.API_HASH,
  { connectionRetries: 5 },
);

app.get("/api", (request, response) => {
  response.send("API is working.");
});

app.post("/api/applicants/phone-code", async (request, response) => {
  try {
    const { applicantPhoneNumber } = request.body;
    await client.connect();
    await client.sendCode(
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
});

app.post("/api/applicants/login", async (request, response) => {
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
    await client.start({
      phoneNumber: async () => applicantPhoneNumber,
      password: async () => applicantPassword,
      phoneCode: async () => applicantPhoneCode,
      onError: async (error) => {
        if (error.message === "Password is empty") {
          client.destroy();
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
          client.destroy();
          return response.json({
            success: false,
            reason: "Сталася помилка під час реєстрації.",
          });
        }
      },
    });
    const isUserAuthorized = await client.isUserAuthorized();
    if (isUserAuthorized) {
      client.destroy();
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
});

app.patch(
  "/api/applicants/graduate/test-results/:id",
  async (request, response) => {
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
  },
);

app.patch(
  "/api/applicants/non-graduate/test-results/:id",
  async (request, response) => {
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
  },
);

app.get("/api/applicants/test-results/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const results = await queries.getResultsOfTestOfApplicant(Number(id));
    response.json({
      success: true,
      score: {
        activityScore: results.activityscore,
        socialScore: results.socialscore,
        emotionalStabilityScore: results.emotionalstabilityscore,
        structureScore: results.structurescore,
        leadershipScore: response.leadershipscore,
      },
    });
  } catch (error) {
    response.json({
      success: false,
      reason: "Не вдалося завантажити результати тесту.",
    });
  }
});

app.listen(process.env.PORT, () => console.log("Sever has been launched."));
