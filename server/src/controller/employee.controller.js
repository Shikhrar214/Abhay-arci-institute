import { Employee } from "../models/employee.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.utils.js";

const login = asyncHandler(async (req, res) => {
  const { id, password } = req.body;
  for (const [key, value] of Object.entries({ id, password })) {
    if (key == null || String(value).trim() === "") {
      throw new ApiError(400, `${key} is required.`);
    }
  }
  console.log(id, password);

  const foundedEmployee = await Employee.findOne({ id });
  if (!foundedEmployee) {
    throw new ApiError(404, "data not found");
  }
  console.log("foundedEmployee", foundedEmployee);

  // validate pass
  const validatePAssword = await foundedEmployee.isPasswordValid(password);
  if (!validatePAssword) {
    throw new ApiError(400, "incorrect password");
  }
  console.log(validatePAssword);

  // generate token

  const accessToken = await foundedEmployee.generateAccessToken();
  const refreshToken = await foundedEmployee.generateRefreshToken();

  if (!(accessToken && refreshToken)) {
    throw new ApiError(500, "Authentication failed.");
  }

  const options = {
    httpOnly: true,
    secure: true,
  };

  res
    .status(200)
    .cookie("accessToken", accessToken, options)
    .cookie("refreshToken", refreshToken, options)
    .json(new ApiResponse(200, {}, "login successfull"));
});

const logout = asyncHandler(async (req, res) => {
  const id = req.employee?._id;

  if (!id) {
    throw new ApiError(404, "id not found. please login! ");
  }

  console.log("empid", id);

  // update refresh token
  const response = await Employee.findByIdAndUpdate(
    id,
    {
      $unset: {
        refreshToken: "",
      },
    },
    {
      new: true,
    },
  )
  if (!response) {
    throw new ApiError(404, "data not found");
  }
  console.log("response", response);

  res
    .status(200)
    .clearCookie("accessToken", "")
    .clearCookie("refreshToken", "")
    .json(new ApiResponse(200, {}, "logout successfull!"));
});

const getEmployee = asyncHandler(async (req, res) => {
  const id = req.employee?._id;
  if (!id) {
    throw new ApiError(404, "id not found");
  }
  console.log(id);

  const foundedEmployee = await Employee.findById(id).select("-password");
  if (!foundedEmployee) {
    return res.status(404, "admin not found");
  }

  res
    .status(200)
    .json(new ApiResponse(200, { foundedEmployee }, "successfull"));
});
export { login, logout, getEmployee };
