import httpStatus from "http-status";
import catchAsync from "../../shared/catchAsync.js";
import sendResponse from "../../shared/sendResponse.js";
import { userServices } from "./user.service.js";


const userRegistration = catchAsync(async (req, res) => {
  const result = await userServices.userRegistration(req);
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "User Created Successfully",
    data: result
  });
});
const userUpdate = catchAsync(async (req, res) => {
  const result = await userServices.updateProfile(req,res);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "User Updated Successfully",
    data: result
  });
});


export const userController = {
  userRegistration,
  userUpdate,
};
