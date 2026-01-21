import mongoose, {Schema} from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { Course } from "./course.model.js";
import { type } from "os";


const studentRegistrationSchema = new mongoose.Schema({
  
  id: {
    type: String,
    required: [true, "ID is required"],
  },

  studentName: { 
    type: String,
    required: [true, "Full Name is required"],
    max: 25,
    min: 3
  },
  
  dob:  {
    type: Date,
    required: [true, "DOB is required"],
  },
  
  gender:  {
    type: String,
    enum: {
        values: ["male", "female", "other"],
        message: "choose at least one: male, female, other"
    },
    required: [true, "Gender is required"],
  },
  
  nationality: {
    type: String,
    required: [true, "ID is required"],
    max: 20,
  },
  
  govId:  {
    type: String,
    required: [true, "GovID is required"],
    max: 50,
  },
  
  photo:  {
    type: String,
    required: true,
  },

  address:  {
    type: String,
    required: true,
    max: 250,
  },
  
  studentPhone:  {
    type: String,
    unique: true,
    required: true,
    // Add regex validation if needed, e.g., for E.164 format
    match: [/^\+[1-9]\d{1,14}$/, 'Please fill a valid telephone number']
  },
  
  studentEmail:  {
    type: String,
    required: [true, "Email is required"],
    lowercase: true,
    trim: true,
    unique: true,
    max: 50,
  },
  password: {
    type: String,
    required: true,   
  },
  emergencyContactName:  {
    type: String,
    max: 20,
  },
  
  emergencyContactNumber:  {
    type: String,
    required: true,
    // Add regex validation if needed, e.g., for E.164 format
    match: [/^\+[1-9]\d{1,14}$/, 'Please fill a valid telephone number']
  },

  parentName: { 
    type: String,
    max: 20,
  },
  
  relationshipToStudent: { 
    type: String,
    max: 30,
  },
  
  parentPhone: {
    type: String,
    // required: true,
    // Add regex validation if needed, e.g., for E.164 format
    match: [/^\+[1-9]\d{1,14}$/, 'Please fill a valid telephone number']
  },
  
  parentEmail:  { 
    type: String,
    lowercase: true,
    trim: true,
    max: 50,
  },

  courses:  { 
    
    ref: [{type: Schema.Types.ObjectId, ref: "Course"}]
  }, 
  refreshToken: {
    type: String,
  }
},{timestamps: true});


//  incrypt password
studentRegistrationSchema.pre("save", async function (next) {
  if(!this.isModified("password")) return next;
  this.password = await bcrypt.hash(this.password, 20);
  return next;
})

//  validate password

studentRegistrationSchema.methods.isPasswordCorrect = async function (password) {
  return await bcrypt.compare(password, this.password);
}

// generate access token
studentRegistrationSchema.methods.generateAccessToken = async function (){
  return jwt.sign(
    {
       _id: this._id,
    },
    
      process.env.JWT_ACCESS_TOKEN,

    {
      expiresIn: process.env.JWT_ACCESS_TOKEN_EXPIRY,
    }
  )
}

// genarate refresh token
studentRegistrationSchema.methods.generateRefreshToken = async function (){
  return jwt.sign(
    {
       _id: this._id,
    },
    
      process.env.JWT_REFRESH_TOKEN,

    {
      expiresIn: process.env.JWT_REFRESH_TOKEN_EXPIRY,
    }
  )
}





export const StudentRegistrationSchema = mongoose.model("StudentRegistrationSchema", studentRegistrationSchema);
