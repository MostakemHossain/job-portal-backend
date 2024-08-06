import httpStatus from "http-status";
import AppError from "../../errors/AppError.js";
import { Company } from "./company.model.js";

const registerCompany=async(req)=>{
    const {name}= req.body

    const company= await Company.findOne({name});
    if(company){
        throw new AppError(httpStatus.BAD_REQUEST,'You can register same company')
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

export const companyService={
    registerCompany,
    getCompany
}