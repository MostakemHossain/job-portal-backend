import mongoose, { Schema, model } from "mongoose";
const applicationSchema= new Schema({
    job:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Job',
        required:[true,'Job is required'],
    },
    applicant:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:[true,'User is required'],
    },
    status:{
        type:String,
        enum:['pending','accepted','rejected'],
        default:'pending'
    }
},
{
    timestamps:true
})
export const Application= new model('Application',applicationSchema)