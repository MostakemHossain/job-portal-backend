import bcrypt from "bcryptjs";
import httpStatus from "http-status";
import config from "../../config/index.js";
import AppError from "../../errors/AppError.js";
import { fileUploader } from "../../shared/fileUpload.js";
import { User } from "./user.model.js";

const userRegistration = async (req) => {
  const { email, password } = req.body;
  
  // Check if the user already exists
  const isUserExist = await User.findOne({ email });
  if (isUserExist) {
    throw new AppError(httpStatus.BAD_REQUEST, "This user already exists");
  }

  // Ensure profile is defined
  if (!req.body.profile) {
    req.body.profile = {};
  }

  // Handle file upload if provided
  if (req.file) {
    const uploadToCloudinary = await fileUploader.uploadToCloudinary(req.file);
    req.body.profile.profilePhoto = uploadToCloudinary?.secure_url;
  }

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, Number(config.bcrypt_salt_rounds));

  // Create the new user
  const result = await User.create({
    ...req.body,
    password: hashedPassword,
  });

  return result;
};

const updateProfile= async(req,res)=>{
  const { fullName, email, phoneNumber, profile } = req.body;
  const userId = req.user.userId;

  const updateFields = {};
  if (fullName) updateFields.fullName = fullName;
  if (email) updateFields.email = email;
  if (phoneNumber) updateFields.phoneNumber = phoneNumber;
  if (profile) {
    if (profile.bio) updateFields["profile.bio"] = profile.bio;
    if (profile.skills) updateFields["profile.skills"] = profile.skills;
  }

  const userUpdate = await User.findByIdAndUpdate(
    userId,
    { $set: updateFields },
    { new: true, runValidators: true }
  );
  return userUpdate;

}

export const userServices = {
  userRegistration,
  updateProfile
};
