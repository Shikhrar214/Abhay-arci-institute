import mongoose,{Schema} from "mongoose";

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


// generate access token


// genarate refresh token



export const AdminSchema = mongoose.model("AdminSchema", adminSchema);