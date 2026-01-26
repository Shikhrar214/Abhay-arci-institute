import mongoose, {Schema} from "mongoose";

const gallarySchema = new Schema({
  fileType: { 
    type: String, 
    required: [true,"File Type is required"],
    enum: {
        values: ["img", "vid"],
        message: "File type must be one of img and vid",
    },
    trim: true,
  },
  fileUrl: { 
    type: String, 
    required: [true,"File URL is required"],
  },
  title: { 
    type: String, 
    required: [true,"Tittle is required"],
    trim: true
  },
  submittedBy: { 
    type: Schema.Types.ObjectId,
    ref: "EmployeeSchema",
    required: [true, "subimitter name is required"]
  },
}, {timestamps: true});

export const Gallary = mongoose.model("Gallary", gallarySchema);