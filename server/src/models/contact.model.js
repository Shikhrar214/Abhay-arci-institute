import mongoose,{Schema} from "mongoose";

const contactSchema = new Schema({
  name: {
    type: String,
    required: true,
    max: 25,
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
    unique: true,
    max: 50,
  },
  message: {
    type: String,
    max: 200,
  },
  created_at: {
    type: Date
  },

},{timestamps: true});

export const ContactSchema = mongoose.model("ContactSchema", contactSchema)