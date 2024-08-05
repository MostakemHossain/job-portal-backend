import httpStatus from "http-status";
import catchAsync from "../../shared/catchAsync.js";
import sendResponse from "../../shared/sendResponse.js";
import { userServices } from "./user.service.js";


const userRegistration = catchAsync(async (req, res) => {
  const result = await userServices.userRegistration(req.body);
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "User Created Successfully",
    data: result
  });
});


export const userController = {
  userRegistration
};
