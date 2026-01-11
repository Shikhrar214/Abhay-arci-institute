import mongoose, {Schema} from "mongoose";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

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

employeeSchema.pre("save", async function(next){
  if(!this.password == this.isModified) return next;

  this.password = bcrypt.hash(this.password, 20);
  next();
})


employeeSchema.methods.isPasswordValid = async function (){
  return bcrypt.compare(password, this.password);
}


employeeSchema.methods.generateAccessToken = async function (){
  jwt.sign(
    {
      _id: this._id
    },
    process.env.JWT_ACCESS_TOKEN,
    {
      expiresIn: process.env.JWT_ACCESS_TOKEN_EXPIRY
    }
  )
}


employeeSchema.methods.generateRefreshToken = async function(){
  jwt.sign(
    {
      _id: this._id
    },
    peocess.env.JWT_REFRESH_TOKEN,
    {
      expiresIn: process.env.JWT_REFRESH_TOKEN_EXPIRY
    }
  )
}



export const EmployeeSchema = mongoose.model("EmployeeSchema", employeeSchema);



