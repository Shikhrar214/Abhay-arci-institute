import { app } from "./app.js";
import dotenv from "dotenv";
import { connectDatabase } from "./db/index.db.js";
import { v2 as cloudinary } from 'cloudinary';

dotenv.config({path: "./.env"});

const port = process.env.PORT;



cloudinary.config({ 
    cloud_name: process.env.CLOUD_NAME, 
    api_key: process.env.API_KEY, 
    api_secret: process.env.API_SECERET 
});

app.get("/", (req, res) => {
  try {
    res.send(`
    <html>
      <body style="background-color: pink;">
        <h1 style="color: green; font-size: 200px; text-align: center;">Server is running !</h1>
        
        <p style= "text-align: center;font-size: 50px; background-color: grey; border: 5px solid yellow; border-radius: 20px;">Embrace every challenge as a stepping stone, not a barrier; your potential is vast, limited only by the doubts you carry, so silence them with focused action, breaking down big dreams into small, manageable steps and celebrating each win to build unstoppable momentum, because success isn't about avoiding failure but about learning from it and relentlessly pushing forward, proving that hard work, preparation, and unwavering belief in your ability to grow can turn today's struggles into tomorrow's triumphs, making the impossible inevitable through persistent effort. </p>
      </body>
    </html>
  `);
  } catch (error) {
    res.send(`
                <html>
                <body>
                    <h1 style="color: red; font-size: 200px;">OOPs!</h1>
                    <p style="font-size: 200px; background-color: red; color: black;">Check the System log</p>
                </body>
                </html>
            `);
    console.log(error);
  }
});
connectDatabase()
.then(
app.listen(port, () => {
  console.log("listning on port  running...... ", port);
})
)