import { asyncHandler } from "../utils/asyncHandler.utils.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";




const studentRegistration = asyncHandler(async(req, res)=>{
    const {id, studentName, dob, gender, nationality, govId, photo, address, studentPhone, studentEmail, password, emergencyContactName, emergencyContactNumber, parentName, relationshipToStudent, parentPhone, parentEmail, courses} = req.body;
    const data = {id, studentName, dob, gender, nationality, govId, photo, address, studentPhone, studentEmail, password, emergencyContactName, emergencyContactNumber, parentName, relationshipToStudent, parentPhone, parentEmail}
    console.log(data);
    
    res.status(200).json({
        message: "success",
        data: data
    })
})




export {
    studentRegistration,
}