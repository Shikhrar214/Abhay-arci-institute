import mongoose,{Schema} from "mongoose";

const contactSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    max: 25,
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    lowercase: true,
    trim: true,
    unique: true,
    max: 50,
  },
  message: {
    type: String,
    max: 200,
  },
},{timestamps: true});

export const ContactSchema = mongoose.model("ContactSchema", contactSchema)