import { v2 as cloudinary } from 'cloudinary';
import fs from "fs";

// cloudinary configuration on index file





//  main function 
export const mediaUploader = async(imgLocalPath) => {
    try {
        if(!imgLocalPath) return("image not found");

        const mediaUploaderResponce = await cloudinary.uploader.upload(imgLocalPath, {resource_type: "auto"});
       
        console.log("file uploaded sucessfully!", mediaUploaderResponce.url);
        fs.unlinkSync(imgLocalPath)
        return mediaUploaderResponce;

    } catch (error) {
        
        fs.unlinkSync(imgLocalPath)
        console.log(error);
        
        return "uploader issue in cloudinary"
    }
}