import mongoose,{Schema} from "mongoose";

const adminSchema = new Schema({
    adminName: {
        type: String,
        required: true,
    },
    userName: {
        type: String,
        required: true,
        min: 5,
        max: 15,
        index: true,
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        trim: true,
        unique: true,
        max: 50,
    },
    userId: {
        type: String,
        required: true,
        min: 5,
        max: 15,
        index: true,
    },
    password: {
        type: String,
        required: true,
        min: 5,
        max: 30,
    },
    refreshToken: {
        type: String,
    },
},{timestamps: true})

export const AdminSchema = mongoose.model("AdminSchema", adminSchema);