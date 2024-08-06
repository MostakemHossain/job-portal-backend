import httpStatus from "http-status";
import catchAsync from "../../shared/catchAsync.js";
import sendResponse from "../../shared/sendResponse.js";
import { companyService } from "./company.service.js";


const companyRegistration = catchAsync(async (req, res) => {
    const result = await companyService.registerCompany(req);
    sendResponse(res, {
      statusCode: httpStatus.CREATED,
      success: true,
      message: "Company Created Successfully",
      data: result,
    });
  });

export const companyController={
    companyRegistration
}