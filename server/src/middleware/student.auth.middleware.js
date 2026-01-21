import jwt from "jsonwebtoken"
import { StudentRegistrationSchema } from "../models/registration.model.js"

export const verifyJwtTokens = async (req, res, next) => {
    try {
        const token = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ", "");
        if (!token) { return res.status(400).json(" log in first ")};
        console.log(token);

        const decoadToken = await jwt.verify(token, process.env.JWT_ACCESS_TOKEN);
        if(!decoadToken) {return res.status(500).json("unverified student")}
        
        const student = await StudentRegistrationSchema.findById({_id: decoadToken?._id}).select("-password -refreshToken");

        if(!student) {return res.status(400).json("student is not verified for login")};

        req.student = student;
        next()
        
    } catch (error) {
         res.status(500).json({
            message: "internal server error while student authentication",
            error,
        })
    }
}