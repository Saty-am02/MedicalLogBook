// import express from "express"
// import mongoose from "mongoose";
// import adminRoutes from './routes/adminroute.js';
// import bodyParser from 'body-parser';
// import cors from 'cors';
// import dotenv from 'dotenv'



// dotenv.config()



// const app = express();
// app.use(cors());


// const uri = "mongodb+srv://PrajwalShetty:1234@cluster0.mnps32j.mongodb.net/medical?retryWrites=true&w=majority";

// async function connect() {
//   try {
//     await mongoose.connect(uri);
//     console.log("Connected to MongoDB");
//   } catch (error) {
//     console.error("Error connecting to MongoDB:", error);
//   }
// }

// // Call the connect function to establish database connection
// connect();
// // Middleware to parse incoming JSON requests
// app.use(bodyParser.json());


// app.use('/admin', adminRoutes);



// // Define routes and other application logic here
// app.get("/", (req, res) => {
//   res.send("<h1>Hello</h1>");
// })
// app.listen(8000, () => {
//   console.log("Server started on port 8000");
// });

import express from "express"
import mongoose from "mongoose";
import adminRoutes from './routes/adminroute.js';
// import studentRoute from './routes/studentroute.js'
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv'

dotenv.config()

const app = express();
app.use(cors());

app.use(bodyParser.json());

app.use('/admin', adminRoutes);

//  app.use('/addstudent', studentRoute);


app.listen(8000, () => {
  console.log("Server started on port 8000");
});