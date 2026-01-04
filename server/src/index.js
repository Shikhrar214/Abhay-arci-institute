import {app} from "./app.js";
import dotenv from "dotenv"


dotenv.config()

const port = process.env.PORT;

app.get("/", (req, res)=>{
    res.send("hello world")
})

app.listen(port, ()=>{
    console.log("listning on port  running...... ", port);
    
})