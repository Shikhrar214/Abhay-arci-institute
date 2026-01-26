import { asyncHandler } from "../utils/asyncHandler.utils.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";
import { UniqueIdGenerator } from "../utils/IDGen.utils.js";
import { Student } from "../models/registration.model.js";
import { mediaUploader } from "../utils/cloudinary.utils.js"

const studentRegistration = asyncHandler(async (req, res) => {
  // get details
  const {
    studentName,
    dob,
    gender,
    nationality,
    govId,
    address,
    studentPhone,
    studentEmail,
    password,
    emergencyContactName,
    emergencyContactNumber,
    parentName,
    relationshipToStudent,
    parentPhone,
    parentEmail,
  } = req.body;

  // validate all feilds
  const fields = {
    studentName,
    dob,
    gender,
    nationality,
    govId,
    address,
    studentPhone,
    studentEmail,
    password,
    emergencyContactName,
    emergencyContactNumber,
    parentName,
    relationshipToStudent,
    parentPhone,
    parentEmail,
  };



  for (const [key, value] of Object.entries(fields)) {
    
    
    if (value == null || String(value).trim() === "") {
      return res
        .status(400)
        .json(new ApiError(400, null,  `${key} is required`));
    }
  }

  // check if student exist 
  const existedStudent = await Student.findOne({studentPhone, studentEmail});
  
  
  if(existedStudent) return await res.status(400).json( new ApiError(400,{}, "student already exist with this email and phone"));

  // take media

  const studentImage = req.file; 

  // check image found or not
  console.log("user image = ",studentImage?.path);
  if(!studentImage) return await res.status(400).json(new ApiError(400, studentImage?.path, "user Image not found!"))
    
  // upload on cloudinary
  const imageCloudinaryUpload = await mediaUploader(studentImage?.path) 
  console.log("imageCloudinaryUpload", imageCloudinaryUpload.url);
  
  

  //  get previous greatest id
 let prevGreatId = await Student.aggregate([
      {
        $group: {
          _id: null,
          greatestId: {$max: "$id"}
        }
      }
    ]);
    if(!prevGreatId) {throw new ApiError(500, "previous greatest id not found")}
    console.log("pevgenid",prevGreatId);
    
    const prevID = prevGreatId[0]?.greatestId;
  console.log("prevID", prevID);
  
  // generate id
  const studentID = await UniqueIdGenerator(prevID);
  if(!studentID) return res.status(500).json(new ApiError(500, studentID || null, "Id genrator is not working!"));
  
  
  
  // assemblle data
  const studentData = new Student({
    id: studentID,
    studentName,
    dob,
    gender,
    nationality,
    govId,
    address,
    studentPhone,
    studentEmail,
    password,
    emergencyContactName,
    emergencyContactNumber,
    parentName,
    relationshipToStudent,
    parentPhone,
    parentEmail,
    photo: imageCloudinaryUpload?.url,
  })

 
  
  // upload data on database
  const registerStudent = await  studentData.save();
  if(!registerStudent) return await res.status(500).json( new ApiError(500, {}, "registration error"))
    
  // send mail registration number
  
  // send response
console.log("student registered sucessfully!");

  res
    .status(200)
    .json(new ApiResponse(201, {  studentEmail }, "registration sucessfull! Check your mail after a while."));
});

const studentLogin = asyncHandler(async (req, res) => {
  // get id and password 
  const  { id,password } = req.body;
  if(!id && !password) {throw new ApiError(400, "id And password  is required")}
  // validate id
  const foundedStudent = await Student.findOne({id});
  if(!foundedStudent) {throw new ApiError(400, "student not registerd")}
  // console.log("foundedStudent",foundedStudent);
  
  // check pass
  const validatePassword = await foundedStudent.isPasswordCorrect(password);
  // console.log("validatePassword", validatePassword);
  if(!validatePassword) {throw new ApiError(400, "password is incorrect")}
  // generate access token
  const accessToken = await foundedStudent.generateAccessToken();
  console.log("access token = ", accessToken);


  
  // generaate refresh token

  const refreshToken = await foundedStudent.generateRefreshToken();
  console.log("refresh token = ", refreshToken);
  // save refresh token into db
  foundedStudent.refreshToken = refreshToken;
  const savedStudentRefreshToken = await foundedStudent.save()
  console.log("savedStudentRefreshToken",savedStudentRefreshToken);
  
  
  // save access token and refresh token in cookee
    const options = {
            httpOnly: true,
            secure: true,
        } 
  res
  .cookie("accessToken", accessToken, options)
  .cookie("refreshToken", refreshToken, options)
  .json(new ApiResponse(200, "login successfull"))
});

const getStudentDetails = asyncHandler(async (req, res) => {
  // get student details
  const studentDetails  =  req.student;
  if(!studentDetails){throw new ApiError(400, "student not found")};
  console.log(studentDetails);
  
  res.json(
    new ApiResponse(200, studentDetails, "student founded successfully.")
  );
});

// logout
const studentLogout = asyncHandler( async (req, res)=>{
   
   const studentId = await req.student?._id;
   if(!studentId){throw new ApiError(400,"student not found")}
   console.log(studentId);
   
        const logoutStudentResponse = await Student.findByIdAndUpdate(
            studentId, 
            {
                $unset: {
                    refreshToken: 1
                }
            },
            {
                new: true
            }
        )
        console.log("logoutStudentResponse",logoutStudentResponse);
        
        

        return res
        .status(200)
        .clearCookie("accessToken")
        .clearCookie("refreshToken")
        .json({
            success: true,
            message: "user loggedout successfully"
        })
})
export { studentRegistration, studentLogin, getStudentDetails, studentLogout};
