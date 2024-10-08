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
const appliedJob = catchAsync(async (req, res) => {
    const result = await applicationService.appliedJob(req);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Applied Job are retrieved successfully",
      data: result,
    });
  });
const getApplicants  = catchAsync(async (req, res) => {
    const result = await applicationService.getApplicants(req);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "All Applicants are retrieved successfully",
      data: result,
    });
  });
const updateStatus  = catchAsync(async (req, res) => {
    const result = await applicationService.updateStatus(req);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Application status updated  successfully",
      data: result,
    });
  });

  export const applicationController={
    applyJob,
    appliedJob,
    getApplicants,
    updateStatus
  }