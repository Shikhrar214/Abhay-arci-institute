import mongoose,{Schema} from "mongoose";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

const adminSchema = new Schema({
    adminName: {
        type: String,
        required: [true,"Admin name is required"],
        min: 3,
        max: 20,
    },
    role: {
        type: String,
        enum: {
            values: ["Admin"],
            message: "Role is required",
        }
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        lowercase: true,
        trim: true,
        unique: true,
        max: 50,
    },
    userId: {
        type: String,
        required: [true, "UserID is required"],
        min: 5,
        max: 15,
    },
    password: {
        type: String,
        required: [true, "Password is Required"],
        min: [5, "Password must be strong"],
        max: 30,
    },
    refreshToken: {
        type: String,
    },
},{timestamps: true})




//  incrypt password
adminSchema.pre("save", async function(next){
    if(!this.password == this.isModified("password")) return next;

    this.password = await bcrypt.hash(this.password, 20);
    next();
})

// PASSWORD VALIDATION
adminSchema.methods.isPasswoordCorrect = async function (){
    return bcrypt.compare(password, this.password)
}


// generate access token

adminSchema.methods.generateAccessToken = async function (){
    jwt.sign(
        {
            _id: this._id
        },
        process.env.ADMIN_JWT_ACCESS_TOKEN,
        {
            expiresIn: process.env.ADMIN_JWT_ACCESS_TOKEN_EXPIRY
        }
    )
}
// genarate refresh token
adminSchema.method.generateRefreshToken = async function (){
    jwt.sign(
        {
            _id:  this._id
        },
        process.env.ADMIN_JWT_REFRESH_TOKEN,
        {
            expiresIn: process.env.ADMIN_JWT_REFRESH_TOKEN_EXPIRY
        }
    )
}


export const AdminSchema = mongoose.model("AdminSchema", adminSchema);