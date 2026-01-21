import { ApiError } from "../utils/ApiError";
import { ApiResponse } from "../utils/ApiResponse";
import { asyncHandler } from "../utils/asyncHandler.utils";




const getAdmin = asyncHandler(async (req, res)=>{

    res.status(200).json(new ApiResponse(201, {}, "successfull"))
})