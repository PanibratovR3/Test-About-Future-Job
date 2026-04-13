const { TelegramClient } = require("teleproto");
const { StringSession } = require("teleproto/sessions");
const { Api } = require("teleproto");
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
  Api,
};
