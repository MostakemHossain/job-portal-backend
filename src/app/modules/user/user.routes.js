import express from "express";
import validateRequest from "../../middlewares/validateRequest.js";
import { userController } from "./user.controller.js";
import { userValidation } from "./user.validation.js";
const router = express.Router();

router.post('/create-user', validateRequest(userValidation.createUserValidationSchema),userController.userRegistration);

export const userRoutes = router;
