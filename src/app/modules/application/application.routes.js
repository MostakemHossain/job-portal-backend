
import express from "express";
import auth from "../../middlewares/auth.js";
import validateRequest from "../../middlewares/validateRequest.js";
import { applicationController } from "./application.controller.js";
import { applicationValidation } from "./application.validation.js";
const router= express.Router();

router.post("/apply-a-job/:jobId",auth(),applicationController.applyJob);
router.get("/",auth(),applicationController.appliedJob);
router.get("/:jobId/applicant",auth(),applicationController.getApplicants);
router.put("/:id",auth(),validateRequest(applicationValidation.updateStatusValidationSchema),applicationController.updateStatus);

export const applicationRoutes= router;