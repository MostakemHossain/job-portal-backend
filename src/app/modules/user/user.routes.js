import express from "express";
import auth from "../../middlewares/auth.js";
import validateRequest from "../../middlewares/validateRequest.js";
import { userController } from "./user.controller.js";
import { userValidation } from "./user.validation.js";
const router = express.Router();

router.post('/create-user', validateRequest(userValidation.createUserValidationSchema),userController.userRegistration);
router.put('/update-user',auth(), validateRequest(userValidation.updateUserValidationSchema),userController.userUpdate);

export const userRoutes = router;
