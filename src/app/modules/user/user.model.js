import mongoose, { Schema } from "mongoose";

const profileSchema = new Schema({
  bio: {
    type: String,
  },
  skills: [{
    type: String,
  }],
  resume: {
    type: String,
  },
  resumeOriginalName: {
    type: String,
  },
  company: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Company",
  },
  profilePhoto: {
    type: String,
    default: "",
  },
});

const userSchema = new Schema(
  {
    fullName: {
      type: String,
      required: [true, "Full Name is Required"],
    },
    email: {
      type: String,
      required: [true, "Email is Required"],
      unique: true,
    },
    phoneNumber: {
      type: String,
      required: [true, "Phone Number is Required"],
    },
    password: {
      type: String,
      required: [true, "Password is Required"],
    },
    role: {
      type: String,
      enum: ["student", "recruiter"],
      required: [true, "Role is Required"],
    },
    profile: profileSchema,
  },
  {
    timestamps: true,
  }
);

export const User = mongoose.model("User", userSchema);
