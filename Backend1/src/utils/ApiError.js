class ApiError extends Error{
    constructor(
        statusCode,
        message="Something went wrong",
        errors=[],
        stack=""
    ){
        super(message)
        this.statusCode=statusCode
        this.data = null
        this.message = message
        this.success = false; //Api error handle kr rha is liya sucess code nhi jayag or Api res ko handle karha hote to status code jata 
        this.errors = errors 
        if(stack){
            this.stack = stack
        }else{
            Error.captureStackTrace(this,this.constructor)
        }
    }
}

export {ApiError}