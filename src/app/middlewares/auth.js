import httpStatus from "http-status";
import config from "../config/index.js";
import AppError from "../errors/AppError.js";
import { jwtHelpers } from "../helpers/jwtHelpers.js";


const auth = () => {
  return async (
    req,
    res,
    next
  ) => {
    try {
      const token = req.headers.authorization;
      if (!token) {
        throw new AppError(httpStatus.BAD_REQUEST, "You are not authorized");
      }
      const verifiedUser = await jwtHelpers.verifyToken(
        token,
        config.jwt__access_secret
      );
      req.user = verifiedUser;
      next();
    } catch (error) {
      next(error);
    }
  };
};

export default auth;
