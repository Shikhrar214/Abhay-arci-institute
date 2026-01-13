import { Router } from "express";
import { studentRegistration } from "../controller/student.controller.js";


const studentRouter = Router();

studentRouter.route("/student-registration").post(studentRegistration);


export {studentRouter};