
import express from "express";
import auth from "../../middlewares/auth.js";
import { applicationController } from "./application.controller.js";
const router= express.Router();

router.post("/apply-a-job/:jobId",auth(),applicationController.applyJob);
router.get("/",auth(),applicationController.appliedJob);

export const applicationRoutes= router;