import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


const connectDatabase = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_CONNECTION_STRING}/${DB_NAME}`);
        console.log("database connected sucessfully and name od db = ", connectionInstance.connection.name);
        
    } catch (error) {
        console.log("mongodb connection method error !! check your internet connection");
        console.log(error)
    }
}


export {connectDatabase};