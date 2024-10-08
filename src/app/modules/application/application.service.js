import httpStatus from "http-status";
import AppError from "../../errors/AppError.js";
import { Job } from "../job/job.model.js";
import { Application } from "./application.model.js";

const applyJob = async (req) => {
  const userId = req.user.userId;
  const jobId = req.params.jobId;
  // check if  the user already apply in this job;
  const existingApplication = await Application.findOne({
    job: jobId,
    applicant: userId,
  });
  if (existingApplication) {
    throw new AppError(
      httpStatus.BAD_REQUEST,
      "You have Already apply for this job"
    );
  }
  // check the job is exists or not
  const jobs = await Job.findById(jobId);
  if (!jobs) {
    throw new AppError(httpStatus.NOT_FOUND, "Job not found");
  }
  const result = await Application.create({
    job: jobId,
    applicant: userId,
  });

  jobs.applications.push(result._id);
  await jobs.save();
  return result;
};

const appliedJob = async (req) => {
  const userId = req.user.userId;
  const result = await Application.find({
    applicant: userId,
  })
    .sort({
      createdAt: -1,
    })
    .populate({
      path: "job",
      populate: {
        path: "company",
      },
    });

  if (!result) {
    throw new AppError(httpStatus.BAD_REQUEST, "No Application Found");
  }
  return result;
};

// admin see how many users are applied
const getApplicants = async (req) => {
  const jobId = req.params.jobId; 
  const job = await Job.findById(jobId).populate({
    path: "applications",
    options: {
      sort: { createdAt: -1 },
    },
    populate: {
      path: "applicant",
      sort: { createdAt: -1 },
    },
  });

  if (!job) {
    throw new AppError(httpStatus.BAD_REQUEST, "Job not Found!!");
  }

  return job;
};

export const updateStatus=async(req)=>{
    const {status}=req.body;
    const applicationId= req.params.id;
    const result= await Application.findByIdAndUpdate(applicationId,{status},{new:true});
    return result;
}

export const applicationService = {
  applyJob,
  appliedJob,
  getApplicants,
  updateStatus
};
