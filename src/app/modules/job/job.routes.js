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
  "/admin-job",
  auth(),
  jobController.getAdminsJob
);
router.get(
  "/:jobId",
  jobController.getJobById
);



export const jobRoutes = router;
