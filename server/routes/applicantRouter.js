const { Router } = require("express");
const applicantController = require("../controllers/applicantController");

const applicantRouter = Router();

applicantRouter.post("/phone-code", applicantController.requestPhoneCode);
applicantRouter.post("/login", applicantController.loginApplicant);
applicantRouter.patch(
  "/graduate/test-results/:id",
  applicantController.addResultsOfTestOfGraduateApplicant,
);
applicantRouter.patch(
  "/non-graduate/test-results/:id",
  applicantController.addResultsOfNonGraduateApplicant,
);
applicantRouter.get(
  "/test-results/:id",
  applicantController.getResultsOfTestOfApplicant,
);

module.exports = applicantRouter;
