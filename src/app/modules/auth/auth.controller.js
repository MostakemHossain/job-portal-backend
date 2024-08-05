import httpStatus from "http-status";
import catchAsync from "../../shared/catchAsync.js";
import sendResponse from "../../shared/sendResponse.js";
import { authService } from "./auth.service.js";

const login = catchAsync(async (req, res) => {
  const result = await authService.login(req.body);
  const { refreshToken, ...remainingData } = result;
  res.cookie("refreshToken", refreshToken, {
    secure: false,
    httpOnly: true,
  });
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "User login successfully",
    data: remainingData,
  });
});

export const authController={
    login
}
