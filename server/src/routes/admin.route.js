import { Router } from "express";
import{ getAdmin, getEmployeeDetails, getStudentDetails, loginAdmin, logoutAdmin, registerAdmin,registerEmployee, findAdminById,
    getEmployeeById,} from "../controller/admin.controller.js"
import { verifyJwtToken } from "../middleware/admin.auth.middleware.js";
import { uploadImage, uploadPdf } from "../middleware/multer.middleware.js"

const adminRouter = Router()

adminRouter.route("/register-admin").post(registerAdmin)
adminRouter.route("/getadmin").get(verifyJwtToken, getAdmin)
adminRouter.route("/getemployee").get(verifyJwtToken, getEmployeeDetails)
adminRouter.route("/getstudent").get(verifyJwtToken, getStudentDetails)
adminRouter.route("/admin-login").post(loginAdmin)
adminRouter.route("/admin-logout").post(verifyJwtToken, logoutAdmin)
adminRouter.route("/register-employee").post(verifyJwtToken,uploadImage.single('photo'), registerEmployee)
adminRouter.route("/find-admin").post(verifyJwtToken, findAdminById)
adminRouter.route("/get-employee").post(verifyJwtToken, getEmployeeById)


export{adminRouter};