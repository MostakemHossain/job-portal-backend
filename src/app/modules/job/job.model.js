import mongoose, { Schema } from "mongoose";

const JobSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, 'Job Title is Required'],
    },
    description: {
      type: String,
      required: [true, 'Job description is Required'],
    },
    requirement: {
      type: [String],
    },
    salary: {
      type: Number,
      required: [true, 'Job Salary is Required'],
    },
    location: {
      type: String,
      required: [true, 'Job Location is Required'],
    },
    jobType: {
      type: String,
      required: [true, 'Job Type is Required'],
    },
    position: {
      type: Number,
      required: [true, 'Experience level is Required'],
    },
    experienceLevel:{
      type: Number,
      required: [true, 'Job Position is Required'],

    },
    company: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Company',
      required: [true, 'Company is required'],
    },
    created_by: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'User is required'],
    },
    applications: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Application",
      }
    ],
  },
  {
    timestamps: true,
  }
);

export const Job = mongoose.model("Job", JobSchema);
