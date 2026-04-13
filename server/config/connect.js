const telegram = require("./telegram");

async function connectTelegram() {
  await telegram.client.connect();
}

module.exports = connectTelegram;
