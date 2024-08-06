import bcrypt from "bcryptjs";
import httpStatus from "http-status";
import config from "../../config/index.js";
import AppError from "../../errors/AppError.js";
import { User } from "./user.model.js";

const userRegistration = async (payload) => {
  console.log(process.env.SALT_ROUNDS)
  const { email, password } = payload;
  const isUserExist = await User.findOne({ email });
  if (isUserExist) {
    throw new AppError(httpStatus.BAD_REQUEST, "This user Already Exists");
  }
  const hashedPassword = await bcrypt.hash(password, Number(config.bcrypt_salt_rounds));
  const result = await User.create({
    ...payload,
    password: hashedPassword,
  });
  return result;
};

const updateProfile= async(req,res)=>{
  const { skills, fullName, email, bio, phoneNumber } = req.body;
  const skillsArray = skills ? skills.split(",") : [];
  const userId = req.user.userId;

  const updateFields = {};
  if (fullName) updateFields.fullName = fullName;
  if (email) updateFields.email = email;
  if (phoneNumber) updateFields.phoneNumber = phoneNumber;
  if (bio || skillsArray.length) {
    updateFields.profile = {};
    if (bio) updateFields.profile.bio = bio;
    if (skillsArray.length) updateFields.profile.skills = skillsArray;
  }

  const userUpdate = await User.findByIdAndUpdate(userId, { $set: updateFields }, { new: true, runValidators: true });
  return userUpdate;

}

export const userServices = {
  userRegistration,
  updateProfile
};
