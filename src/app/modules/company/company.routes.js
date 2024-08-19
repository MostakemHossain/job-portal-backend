import express from "express";
import auth from "../../middlewares/auth.js";
import validateRequest from "../../middlewares/validateRequest.js";
import { fileUploader } from "../../shared/fileUpload.js";
import { companyController } from "./company.controller.js";
import { companyValidation } from "./company.validation.js";

const router = express.Router();

router.post(
  "/register-a-company",
  auth(),
  validateRequest(companyValidation.companyRegistrationValidationSchema),
  companyController.companyRegistration
);
router.get(
  "/get-my-company",
  auth(),
  companyController.getCompany
);
router.get(
  "/:companyId",
  companyController.getCompanyById
);
router.put(
  "/:companyId",
  auth(),
  fileUploader.upload.single("file"),
  (req, res, next) => { 
    
    return companyController.updateCompanyById(req, res, next);
  }
);

export const companyRoutes = router;
