import bcrypt from "bcryptjs";
import httpStatus from "http-status";
import config from "../../config/index.js";
import AppError from "../../errors/AppError.js";
import { jwtHelpers } from "../../helpers/jwtHelpers.js";
import { User } from "../user/user.model.js";

const login = async (payload) => {
  const { email, role } = payload;
  const isUserExist = await User.findOne({ email });
  if (!isUserExist) {
    throw new AppError(httpStatus.BAD_REQUEST, "Incorrect Email and Password");
  }
  const isPasswordMatch = bcrypt.compare(payload.password, isUserExist.password);
  if (!isPasswordMatch) {
    throw new AppError(httpStatus.BAD_REQUEST, "Incorrect Email and Password");
  }

  if (role !== isUserExist.role) {
    throw new AppError(
      httpStatus.BAD_REQUEST,
      "Account doesn't exists with current role"
    );
  }

  const tokenData = {
    userId: isUserExist._id,
  };
  const accessToken = await jwtHelpers.generateToken(
    tokenData,
    String(config.jwt__access_secret),
    String(config.jwt__access_expire_in)
  );

  const refreshToken = await jwtHelpers.generateToken(
    tokenData,
    String(config.jwt__refresh_secret),
    String(config.jwt__refresh_expire_in)
  );
    

  return {
    accessToken,
    user:isUserExist,
    refreshToken,
  };
};

export const authService={
    login
}
