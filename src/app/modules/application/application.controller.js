import httpStatus from "http-status";
import catchAsync from "../../shared/catchAsync.js";
import sendResponse from "../../shared/sendResponse.js";
import { applicationService } from "./application.service.js";


const applyJob = catchAsync(async (req, res) => {
    const result = await applicationService.applyJob(req);
    sendResponse(res, {
      statusCode: httpStatus.CREATED,
      success: true,
      message: "Job Applied successfully",
      data: result,
    });
  });

  export const applicationController={
    applyJob
  }