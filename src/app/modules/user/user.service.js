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

export const userServices = {
  userRegistration,
};
