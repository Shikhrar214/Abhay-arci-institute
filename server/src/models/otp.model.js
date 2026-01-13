import mongoose from "mongoose";
import bcrypt from "bcrypt"

const otpSchema = new mongoose.Schema(
  {
    identifier: {
      type: String,
      required: true,
      index: true,
      trim: true,
      lowercase: true,
    },

    otp: {
      type: String,
      required: true,
    },

    purpose: {
      type: String,
      enum: ["signup", "login", "reset-password", "verify-email"],
      required: true,
    },

    expiresAt: {
      type: Date,
      required: true,
      index: { expires: 0 }, // TTL index
    },

    attempts: {
      type: Number,
      default: 0,
      max: 5,
    },

    used: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);




otpSchema.pre("save", async function(next){
    if (!this.isModified("otp")) return next();
    this.otp = await bcrypt.hash(this.otp, 15);
    next()
})


otpSchema.methods.validateOTP = async function (otp){
    return await bcrypt.compare(otp, this.otp);
}
export const OTP =  mongoose.model("OTP", otpSchema);
