import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.utils.js";
import { Admin } from "../models/admin.model.js";
import { Student } from "../models/registration.model.js"
import { Employee } from "../models/employee.model.js";
import { mediaUploader } from "../utils/cloudinary.utils.js"
import path from "path";
// register admin (done)
const registerAdmin = asyncHandler(async (req, res)=>{
    const { adminName, role, email, adminId, password, } = req.body;
    const data = { adminName, role, email, adminId, password, };
    for(const [key,value] of Object.entries({adminName, role, email, adminId, password})){
        if(value == null || String(value).trim() === ""){throw new ApiError(400, `${key} is required!`)}
    }

    const adminData = new Admin(
        { 
            adminName, 
            role, 
            email, 
            adminId, 
            password, 
        }
    )


    const registerAdmin  = await adminData.save() 
    if(!registerAdmin) { throw new ApiError(500, "admin registration error")}
    res.status(200).json(
        new ApiResponse(200, {}, "admin registered successfully" )
    )
})

// register employee(done 1)
const registerEmployee = asyncHandler(async(req, res) => {
    const {name,id,email,phone,password,role} = req.body;

    for(const [key, value] of Object.entries({name,id,email,phone,password,role})){
        if(value == null || String(value).trim() === ""){
            throw new ApiError(400, `${key} is required`)
        }
    }
    const existedEmployee = await Employee.findOne({$or: [{email},{phone}]});
    if(existedEmployee){throw new ApiError(400, "Already registered with this email and phone")}

    const employeeImg = req.file;
    if(!employeeImg){throw new ApiError(400, "image is required.")}
    console.log(employeeImg?.filename);

    // upload photo on cloudinary
    const imageCloudinaryUpload = await mediaUploader(employeeImg?.path)
   
   
    

    const employeeregistrationData = new Employee({
        name,
        id,
        email,
        phone,
        password,
        role,
        photo: imageCloudinaryUpload?.url
    })
    
    const employeeRegistrationResponse = await employeeregistrationData.save()
    if(!employeeRegistrationResponse){throw new ApiError(500, "employee registration error")}
    console.log(employeeRegistrationResponse);
    
    res.status(200).json(
        new ApiResponse(200, {}, "registration successfull!")
    )
})

// get all admin (done)
const getAdmin = asyncHandler(async (req, res)=>{
    // get admin detail
    const admins = await Admin.find().select("-password -refreshToken -_id");
    if(!admins){
        return res
        .status(404)
        .json(
            new ApiError(404, "data not found.")
        )
    }
    
    res.status(200).json(new ApiResponse(201, {admins}, "successfull"))
})

// find admin by id (done)
const  findAdminById = asyncHandler(async (req, res) => {
    const {id} = req.body;

    if(!id){return res.status(400).json(new ApiError(400, "id is required! please enter the correct id."))}

    const adminId = id;

    const admin = await Admin.findOne({adminId}).select("-password ")
    console.log(admin);
    
    if(!admin){return res.status(404).json(new ApiError(404, "admin not found"))}

    res.status(200).json(
        new ApiResponse(200, {admin}, "successfull")
    )
})

// get student detail (done)
const getStudentDetails = asyncHandler(async (req, res)=>{
    const students = await Student.find().select("-password -refreshToken -_id");
    if(!students){return res.status(404).json(new ApiError(404, "student not found"))};
    res.status(200).json(new ApiResponse(201, {students}, "successfull"))
})

// get employee(done)
const getEmployeeDetails = asyncHandler(async (req, res)=>{
    // get admin detail
    const employee = await Employee.find().select("-password");
    if(!employee){throw new ApiError(404, "data not found")}

    
    res.status(200).json(new ApiResponse(201, {employee}, "successfull"))
})


// get employee by id (done)
const getEmployeeById = asyncHandler(async (req, res)=> {
    const {id} = req.body;
   
    
    const employee = await Employee.findOne({id}).select("-password")
    if(!employee){throw new ApiError(404, "data not found")}
    console.log(employee);
    
 res
    .status(200)
    .json(new ApiResponse(200, {employee}, "successfull"))
})

// login (done)

const loginAdmin = asyncHandler(async (req, res) => {
    
    const {id, password} = req.body;
    for(const [key, value] of Object.entries({id, password})){
        if(value == null || String(value).trim() === ""){
            return res
            .status(400)
            .json(new ApiError(400, `${key} is required`));
        }
    }
    // console.log({id, password});
    
    let adminId = id
    const foundedAdmin = await Admin.findOne({adminId})
    if(!foundedAdmin) {
        throw new ApiError(404, "admin not found");
    }
    // console.log("foundedAdmin: ", foundedAdmin);

    const validatePassword = await foundedAdmin.isPasswordCorrect(password);
    if(!validatePassword){throw new ApiError(400, "incorrect password")}
    console.log("validatePassword",validatePassword);
    
    
   
    // generate access and refresh token
    const accessToken = await foundedAdmin.generateAccessToken();
    const refreshToken = await foundedAdmin.generateRefreshToken();

    // set refresh token
    // (we do not set refresh token because it does not need in admin)
    

    const options = {
        httpOnly: true,
        secure: true
    }

    res
    .status(200)
    .cookie("accessToken", accessToken, options)
    .cookie("refreshToken", refreshToken, options)
    .json(new ApiResponse(200, {}, "login successfull!"))
})

//  logout (done)
const logoutAdmin  = asyncHandler(async (req, res)=>{
    // get admin detail

    const adminId = req.admin?._id;
    console.log(adminId);
    const foundedAdmin = await Admin.findByIdAndUpdate(
        adminId,
        {
                $unset: {
                    refreshToken: 1
                }
            },
            {
                new: true
            }
    ).select("-password")
    if(!foundedAdmin){throw new ApiError(404, "admin not found")}
    console.log(foundedAdmin);
    
    res
    .status(200)
    .clearCookie("accessToken","")
    .clearCookie("refreshToken","")
    .json(new ApiResponse(201, {}, "successfull"))
})


export {
    registerAdmin,
    registerEmployee,
    getAdmin,
    getEmployeeDetails,
    getStudentDetails,
    loginAdmin,
    logoutAdmin,
    findAdminById,
    getEmployeeById,
}