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

export const jobService={
postJob
}