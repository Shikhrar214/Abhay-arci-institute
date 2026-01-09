import mongoose, {Schema} from "mongoose";

const employeeSchema = new Schema({
  name: { 
    type: String,
    required: [true,"Name is required"],
    min: 3,
    max: 20,
  },
  email: { 
    type: String,
    required: [true, "Email is required"],
    lowercase: true,
    trim: true,
    unique: true,
    max: 50,
  },
  phone: { 
    type: String,
    unique: true,
    required: true,
    match: [/^\+[1-9]\d{1,14}$/, 'Please fill a valid telephone number']
  },
  password: { 
    type: String,
    required: true,
  },
  role: { 
    type: String,
    enum: {
        values: ["Admin Assistant","Headmaster","Finance Officer","Teachers","Maintenance Workers","Librarian","Media"],
        message: "Role is required"
    }
  },
  photo: {
    type: String,
    required: true
  },
},{timestamps: true});

export const EmployeeSchema = mongoose.model("EmployeeSchema", employeeSchema);