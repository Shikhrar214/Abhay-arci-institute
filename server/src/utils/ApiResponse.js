export class ApiResponse {
    constructor(statusCode, data, message="success")
    {
        // this.statusCode = statusCode < 400
         if(statusCode < 400){
        this.statusCode = statusCode        
        }else{
            this.statusCode = "Status code error"
        }
        this.message = message
        this.data = data
    }


   
}