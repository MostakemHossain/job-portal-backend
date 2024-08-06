import express from "express";
import auth from "../../middlewares/auth.js";
import validateRequest from "../../middlewares/validateRequest.js";
import { jobController } from "./job.controller.js";
import { jobValidation } from "./job.validation.js";

const router = express.Router();

router.post(
  "/post-a-job",
  auth(),
  validateRequest(jobValidation.postJobValidationSchema),
  jobController.postJob
);
router.get(
  "/",
  jobController.getALLJob
);
router.get(
  "/:jobId",
  jobController.getJobById
);
router.get(
  "/admin-job",
  jobController.getAdminsJob
);


export const jobRoutes = router;
