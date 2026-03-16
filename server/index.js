const express = require("express");
const cors = require("cors");
const applicantRouter = require("./routes/applicantRouter");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/applicant", applicantRouter);

app.get("/api", (request, response) => {
  response.send("API is working.");
});

app.listen(process.env.PORT, () => console.log("Sever has been launched."));
