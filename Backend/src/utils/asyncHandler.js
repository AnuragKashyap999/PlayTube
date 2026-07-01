const asyncHandler = (requestHandler)=>{
   return (req,res,next)=>{
        Promise
        .resolve(requestHandler(req,res,next))
        .catch((err)=>next(err))
    }



}


export {asyncHandler}


// const asyncHandler = () =>{}

// function ke ander ek dusra funtion ko asa parameter lene 
// const asyncHandler =(func)=>()=>{}

// const asyncHandler =(func)=>async(req, res, next)=>{
//     try{
//      await func(req,res,next)
//     }catch(err){
//      res.status(err.code||500).json({
//         success:false,
//         message :err.message
//      })
//     }
// }

