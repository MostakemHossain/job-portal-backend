import httpStatus from "http-status";
import AppError from "../../errors/AppError.js";
import { fileUploader } from "../../shared/fileUpload.js";
import { Company } from "./company.model.js";

const registerCompany=async(req)=>{
    const {name}= req.body

    const company= await Company.findOne({name});
    if(company){
        throw new AppError(httpStatus.BAD_REQUEST,'You cannot register same company')
    }

    const result= await Company.create({
        ...req.body,
        userId:req.user.userId
    });

    return result;   
}

const getCompany= async(req)=>{
    const userId= req.user.userId;
    const company= await Company.find({userId});
    if(!company){
        throw new AppError(httpStatus.NOT_FOUND,"Company not found");
    }

    return company;

}

const getCompanyById=async(req)=>{
    const companyId= req.params.companyId;
    const company= await Company.findById(companyId);
    if(!company){
        throw new AppError(httpStatus.NOT_FOUND,"Company not found");
    }
    return company;
}

export const updateCompany= async(req)=>{
    const file= req.file;
    if (req.file) {
        const uploadToCloudinary = await fileUploader.uploadToCloudinary(req.file);
        req.body.logo = uploadToCloudinary?.secure_url;
      }

    const result= await Company.findByIdAndUpdate(req.params.companyId,req.body,{new:true});

    return result;
}

export const companyService={
    registerCompany,
    getCompany,
    getCompanyById,
    updateCompany
}