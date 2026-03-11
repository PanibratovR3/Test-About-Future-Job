const express = require("express");
const { TelegramClient } = require("telegram");
const { StringSession } = require("telegram/sessions");
const { message } = require("telegram/client");

require("dotenv").config({ quiet: true });
