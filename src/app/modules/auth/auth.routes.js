
import express from "express";
import validateRequest from "../../middlewares/validateRequest.js";
import { authController } from "./auth.controller.js";
import { authValidation } from "./auth.validation.js";
const router= express.Router();

router.post("/login",validateRequest(authValidation.authValidationSchema),authController.login)

export const authRoutes= router;