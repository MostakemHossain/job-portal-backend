import httpStatus from "http-status";
import AppError from "../../errors/AppError.js";
import { Job } from "./job.model.js";

const postJob= async(req)=>{
    const {requirement}= req.body
    const userId= req.user.userId;
    const result= await Job.create({
        ...req.body,
        created_by:userId
        
    });
    return result;

}

const getALLJob=async(req)=>{
    const keywords= req.query.searchTerm || "";
    const query={
        $or:[
            {title:{$regex:keywords,$options:"i"}},
            {description:{$regex:keywords,$options:"i"}},
        ]
    }
    const job= await Job.find(query).populate('company');

    return job;
}

const getJobById= async(req)=>{
    const jobId=req.params.jobId;
    const result= await Job.findById(jobId).populate('company applications');
    if(!result){
        throw new AppError(httpStatus.NOT_FOUND,"Job not found");
    }

    return result;
}

const getAdminsJob=async(req)=>{
    const adminId= req.user.userId;
    const jobs= await Job.find({created_by:adminId}).populate('company');
    if(!jobs){
        throw new AppError(httpStatus.NOT_FOUND,"Job not found");
    }
    return jobs;

}

export const jobService={
postJob,
getALLJob,
getJobById,
getAdminsJob
}