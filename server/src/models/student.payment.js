import mongoose, { Schema } from "mongoose";

const studentPaymentSchema = new Schema({
  student_id: {
    type: Schema.Types.ObjectId,
    ref: "StudentRegistrationSchema",
    required: [true, "Student ID is required"]
  },

  course_id: {
    type: Schema.Types.ObjectId,
    ref: "Course",
    required: [true, "Course ID is required"]
  },

  amount_paid: {
    type: Number,
    required: [true, "Amount paid is required"],
    min: [0, "Amount paid cannot be negative"]
  },

  payment_status: {
    type: String,
    enum: {
      values: ["pending", "completed", "failed", "refunded"],
      message: "Payment status must be one of: pending, completed, failed, refunded"
    },
    default: "pending",
    required: true
  },

  payment_date: {
    type: Date,
    default: Date.now,
    required: true
  },

  payment_method: {
    type: String,
    enum: {
      values: ["cash", "card", "bank_transfer", "online", "cheque"],
      message: "Payment method must be one of: cash, card, bank_transfer, online, cheque"
    },
    required: [true, "Payment method is required"]
  },

  transaction_id: {
    type: String,
    trim: true,
    maxlength: [100, "Transaction ID cannot exceed 100 characters"]
  },

  notes: {
    type: String,
    trim: true,
    maxlength: [500, "Notes cannot exceed 500 characters"]
  },

  discount_applied: {
    type: Number,
    default: 0,
    min: [0, "Discount cannot be negative"]
  },

  total_amount: {
    type: Number,
    required: [true, "Total amount is required"],
    min: [0, "Total amount cannot be negative"]
  }
}, { timestamps: true });

// Index for efficient queries
studentPaymentSchema.index({ student_id: 1, course_id: 1 });
studentPaymentSchema.index({ payment_status: 1 });
studentPaymentSchema.index({ payment_date: -1 });

export const StudentPayment = mongoose.model("StudentPayment", studentPaymentSchema);