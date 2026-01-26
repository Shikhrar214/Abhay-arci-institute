import express, { urlencoded } from 'express'
import cors from "cors"
import cookieParser from 'cookie-parser';
const app = express();


app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credential: true
}))
app.use(express.json({limit: "20kb"}));
app.use(urlencoded({extended: true, limit: "20kb"}))
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


export  {app};