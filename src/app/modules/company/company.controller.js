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
const getCompany = catchAsync(async (req, res) => {
    const result = await companyService.getCompany(req);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "My Company retrieved Successfully",
      data: result,
    });
  });
const getCompanyById = catchAsync(async (req, res) => {
    const result = await companyService.getCompanyById(req);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Company is retrieved Successfully",
      data: result,
    });
  });

export const companyController={
    companyRegistration,
    getCompany,
    getCompanyById,
}