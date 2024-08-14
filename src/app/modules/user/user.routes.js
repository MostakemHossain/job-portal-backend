import express from "express";
import auth from "../../middlewares/auth.js";
import { fileUploader } from "../../shared/fileUpload.js";
import { userController } from "./user.controller.js";
import { userValidation } from "./user.validation.js";
const router = express.Router();


router.post(
  "/create-user",
  fileUploader.upload.single("file"),
  (req, res, next) => {
    
    req.body = userValidation.createUserValidationSchema.parse(
      (req.body)
    );
    return userController.userRegistration(req, res, next);
  }
);
router.put(
  "/update-user",
  auth(),
  fileUploader.upload.single("file"),
  (req, res, next) => {   
    req.body = userValidation.updateUserValidationSchema.parse(
      (req.body)
    );
    return userController.userUpdate(req, res, next);
  }
);


export const userRoutes = router;