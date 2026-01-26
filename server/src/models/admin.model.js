import mongoose,{Schema} from "mongoose";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

const adminSchema = new Schema({
    adminName: {
        type: String,
        required: [true,"Admin name is required"],
        minlength: 3,
        maxlength: 20,
    },
    role: {
        type: String,
        enum: ["Admin"],
        default: "Admin",
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        match: [/^\S+@\S+\.\S+$/, "Invalid email"]
    },

    adminId: {
        type: String,
        required: [true, "Admin Id is required"],
        minlength: 5,
        manlength: 15,
        unique: true,
        index: true
    },
    password: {
        type: String,
        required: [true, "Password is Required"],
        
    },
    refreshToken: {
        type: String,
        select: false,
    },
},{timestamps: true})




//  incrypt password
adminSchema.pre("save", async function(){

    
    if (!this.isModified("password")) return;

    this.password = await bcrypt.hash(this.password, 12);
    
})

// PASSWORD VALIDATION
adminSchema.methods.isPasswordCorrect = async function (password){
    return await bcrypt.compare(password, this.password)
}


// generate access token

adminSchema.methods.generateAccessToken = async function (){
    return jwt.sign(
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
adminSchema.methods.generateRefreshToken = async function (){
    return jwt.sign(
        {
            _id:  this._id
        },
        process.env.ADMIN_JWT_REFRESH_TOKEN,
        {
            expiresIn: process.env.ADMIN_JWT_REFRESH_TOKEN_EXPIRY
        }
    )
}


export const Admin = mongoose.model("Admin", adminSchema);