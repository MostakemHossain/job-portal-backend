import httpStatus from "http-status";
import catchAsync from "../../shared/catchAsync.js";
import sendResponse from "../../shared/sendResponse.js";
import { jobService } from "./job.service.js";

const postJob = catchAsync(async (req, res) => {
    const result = await jobService.postJob(req);
    sendResponse(res, {
      statusCode: httpStatus.CREATED,
      success: true,
      message: "Post Job Successfully",
      data: result,
    });
  });
const getALLJob = catchAsync(async (req, res) => {
    const result = await jobService.getALLJob(req);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Post are retrieved Successfully",
      data: result,
    });
  });

export const jobController={
    postJob,
    getALLJob
}
  