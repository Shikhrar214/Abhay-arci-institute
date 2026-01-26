import { Employee } from "../models/employee.model.js"
import jwt from "jsonwebtoken"


export const verifyJwtToken = async (req, res, next) => {
    try {
        const token = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ", "");

        if(!token){return res.status(400).json({
            message: "please login!"
        })}
        console.log("token",token);
        
        const decoadedToken =  jwt.verify(token,process.env.JWT_ACCESS_TOKEN);
        if(!decoadedToken){
            return res.status(400).json("unauthorize access!")
        }
        console.log("decoadedToken", decoadedToken)
        const id = decoadedToken?._id;
        console.log("id", id)
        
        const foundedEmployee = await Employee.findById(decoadedToken._id).select("-password")
        if(!foundedEmployee){
            return res.status(404).json("data not found")
        }

        req.employee = foundedEmployee;
        next()
    } catch (error) {
        res
        .status(500)
        .json({
            message: "internal server error while user validation",
            error,
        })
    }
}