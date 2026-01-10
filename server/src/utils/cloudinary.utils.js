import { v2 as cloudinary } from 'cloudinary';
import dotenv from "dotenv";
import fs from "fs";

dotenv.config({path: "../../.env"});

cloudinary.config({ 
  cloud_name: process.env.CLOUD_NAME, 
  api_key: process.env.API_KEY, 
  api_secret: process.env.API_SECERET
});


//  main function 
export const mediaUploader = async(imgLocalPath) => {
    try {
        if(!imgLocalPath) return("image not found");

        const mediaUploaderResponce = await v2.uploader.upload(imgLocalPath, {resource_type: "auto"});
       
        console.log("file uploaded sucessfully!", mediaUploaderResponce.url);
        fs.unlinkSync(imgLocalPath)
        return mediaUploaderResponce;

    } catch (error) {
        
        fs.unlinkSync(imgLocalPath)
        console.log(error);
        
        return "uploader issue in cloudinary"
    }
}