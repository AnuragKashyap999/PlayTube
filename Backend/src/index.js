import dotenv from "dotenv"
import connectDB from "./db/index.js"
import app from "./app.js"



dotenv.config({
    path:"./public/temp/.env"
}
)

connectDB()
.then(()=>{
 app.on("error",(err)=>{
  console.log("Error before the listen",err)
  throw err
 })
 app.listen(process.env.PORT || 8000,()=>{
  console.log(`Server run at Port: ${process.env.PORT}`);
 })
})
.catch((err)=>{
  console.log("Mongo db connection failed !!!",err)
})

// first Approch for connect to db 

// function connectDB(){}
// connectDB()

// second Approch for connect to db 
// using  IIFE (Immediately Invoked Function Expression)



/*
(async()=>{
try{
 await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
 app.on((err)=>{
   console.log("our application cann't able to talk the to db ", err)
   throw err;
 })
 app.listen(process.env.PORT,()=>{
    console.log(`Port listen on ${process.env.PORT}`)
 }
  )
}catch(err){
console.error("Error",err)
throw err;
}
})() 

*/