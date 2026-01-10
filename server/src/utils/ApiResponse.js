export class ApiResponse {
    constructor(statusCode, data, message="success")
    {
        this.statusCode = statusCode < 400
        this.message = message
        this.data = data
    }
}