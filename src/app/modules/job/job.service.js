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

export const jobService={
postJob,
getALLJob
}