import { Router } from "express";
import {getEmployee, login, logout} from "../controller/employee.controller.js"
import {verifyJwtToken} from "../middleware/employee.auth.middleware.js"

const employeeRouter = Router()

employeeRouter.route("/login").post(login);
employeeRouter.route("/logout").post(verifyJwtToken, logout);
employeeRouter.route('/employeedetail').get(verifyJwtToken, getEmployee)



export{employeeRouter};