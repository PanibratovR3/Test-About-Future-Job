const { TelegramClient } = require("telegram");
const { StringSession } = require("telegram/sessions");
require("dotenv").config({ quiet: true });

const SESSION = new StringSession("");
const client = new TelegramClient(
  SESSION,
  parseInt(process.env.API_ID),
  process.env.API_HASH,
  { connectionRetries: 5 },
);

module.exports = {
  client,
};
