import express from "express";
import auth from "../../middlewares/auth.js";
import validateRequest from "../../middlewares/validateRequest.js";
import { companyController } from "./company.controller.js";
import { companyValidation } from "./company.validation.js";

const router = express.Router();

router.post(
  "/register-a-company",
  auth(),
  validateRequest(companyValidation.companyRegistrationValidationSchema),
  companyController.companyRegistration
);

export const companyRoutes = router;
