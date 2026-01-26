import { Admin } from "../models/admin.model.js";
import jwt from "jsonwebtoken"


export const verifyJwtToken = async (req, res, next)=>{
    try {
        const token = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ", "");
        if(!token){return res.status(400).json("please login")}
        
        // verify access token
        const verifyToken = await jwt.verify(token, process.env.ADMIN_JWT_ACCESS_TOKEN);

       if(!verifyJwtToken){
        return res.status(400).json("unauthorize access")
       }

        const admin = await Admin.findById(verifyToken?._id).select("-password -refreshToken");
        if(!admin){return res.status(404).json("Admin not found")}
        req.admin = admin;
        next()
        
    } catch (error) {
        res.status(500).json({
            message: "internal server error while  authentication",
            error,
        })
    }
}