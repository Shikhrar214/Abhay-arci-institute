import mongoose, { Schema } from "mongoose";

const courseSchema = new Schema({
  title: {
    type: String,
    required: [true, "Course title is required"],
    trim: true,
    maxlength: [100, "Title cannot exceed 100 characters"],
    minlength: [3, "Title must be at least 3 characters long"]
  },

  description: {
    type: String,
    required: [true, "Course description is required"],
    trim: true,
    maxlength: [1000, "Description cannot exceed 1000 characters"],
    minlength: [10, "Description must be at least 10 characters long"]
  },

  duration: {
    type: String,
    required: [true, "Course duration is required"],
    trim: true,
  },

  level: {
    type: String,
    required: [true, "Course level is required"],
    enum: {
      values: ["Beginner", "Intermediate", "Advanced", "Expert"],
      message: "Level must be one of: Beginner, Intermediate, Advanced, Expert"
    }
  },

  fee: {
    type: Number,
    required: [true, "Course fee is required"],
    min: [0, "Fee cannot be negative"],
    max: [100000, "Fee cannot exceed 100,000"]
  },

  image: {
    type: String,
    required: true,
  },

  category: {
    type: String,
    required: [true, "Course category is required"],
    trim: true,
    enum: {
      values: ["Technology", "Business", "Design", "Marketing", "Language", "Science", "Arts", "Health", "Other"],
      message: "Category must be one of the predefined values"
    }
  },

  instructor: {
    type: String,
    required: [true, "Instructor name is required"],
    trim: true,
    maxlength: [50, "Instructor name cannot exceed 50 characters"]
  },

  maxStudents: {
    type: Number,
    default: 100,
    min: [1, "Maximum students must be at least 1"],
    max: [500, "Maximum students cannot exceed 500"]
  },

  enrolledStudents: {
    type: Number,
    default: 0,
    min: [0, "Enrolled students cannot be negative"]
  },

  status: {
    type: String,
    enum: ["active", "inactive", "draft", "archived"],
    default: "active"
  },

  prerequisites: [{
    type: String,
    trim: true
  }],

  syllabus: [{
    type: String,
    trim: true
  }],

  rating: {
    type: Number,
    default: 0,
    min: [0, "Rating cannot be less than 0"],
    max: [5, "Rating cannot exceed 5"]
  },

  reviewCount: {
    type: Number,
    default: 0,
    min: [0, "Review count cannot be negative"]
  },

  startDate: {
    type: Date,
    required: true
  },

  endDate: {
    type: Date,
    required: true
  }

}, {
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

// Indexes for better performance
courseSchema.index({ title: 1 });
courseSchema.index({ category: 1 });
courseSchema.index({ level: 1 });
courseSchema.index({ status: 1 });
courseSchema.index({ fee: 1 });
courseSchema.index({ createdAt: -1 });




// Instance method to enroll a student
courseSchema.methods.enrollStudent = function() {
  if (this.isFull()) {
    throw new Error('Course is full');
  }
  this.enrolledStudents += 1;
  return this.save();
};

export const Course = mongoose.model("Course", courseSchema);