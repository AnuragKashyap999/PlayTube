import mongoose from "mongoose"
import { DB_NAME } from "../constants.js"
import dotenv from "dotenv";

dotenv.config({path:"./public/temp/.env"})



const connectDB=async()=>{
 try{
   const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
   console.log(`\n MongoDB connected !! DB HOST:${connectionInstance.connection.host}`)
 }catch(err){
    console.error("Error:",err)
    process.exit(1)
 }
}
 
export default connectDB