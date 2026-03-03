import express from 'express'
import cookieParser from 'cookie-parser';



const app = express();



app.use(express.json({limit: "5mb"}));
app.use(express.urlencoded({extended: true, limit: "20kb"}))
app.use(express.static("public"))
app.use(cookieParser());

// Routes
import { studentRouter } from './routes/student.route.js';
app.use("/api", studentRouter);


// routes
import { adminRouter } from './routes/admin.route.js';
app.use("/api/v1",adminRouter);


// routes
import { employeeRouter } from './routes/employee.route.js';
app.use("/api/v1/staff", employeeRouter)










app.use((err, req, res, next) => {
  console.error("GLOBAL ERROR:", err);

  if (err.code === "LIMIT_FILE_SIZE") {
    return res.status(400).json({
      success: false,
      message: "Image size must be less than 5MB"
    });
  }

  return res.status(400).json({
    success: false,
    message: err.message || "Something went wrong"
  });
});

export  {app};