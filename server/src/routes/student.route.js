import { Router } from "express";
import { studentRegistration, studentLogin, getStudentDetails, studentLogout } from "../controller/student.controller.js";
import { uploadImage } from "../middleware/multer.middleware.js";
import { verifyJwtTokens } from "../middleware/student.auth.middleware.js";

const studentRouter = Router();

studentRouter.route("/student-registration").post(uploadImage.single('photo'), studentRegistration);
studentRouter.route("/student-login").post(studentLogin);
studentRouter.route("/student-details").get(verifyJwtTokens, getStudentDetails);
studentRouter.route("/student-logout").post(verifyJwtTokens,studentLogout);


export {studentRouter};