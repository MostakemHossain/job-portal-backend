import mongoose, { Schema } from "mongoose";
const companySchema = new Schema({
  name: {
    type: String,
    required: [true, "Company Name is Required"],
  },
  description: {
    type: String,
  },
  location: {
    type: String,
  },
  website: {
    type: String,
  },
  logo: {
    type: String,
  },
  userId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'User',
    required:[true,'User is Required']
  }
},

{
    timestamps:true
});

export const Company= new model('Company',companySchema)
