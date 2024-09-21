/* 
Author: Munachimso Joshua Enabulele
Title: Calculator API Server
*/

// Getting the express framework
const express = require("express")

// Declaring my express app server
const app = express()

// Setting my target port where my server should run
const PORT = 3000

// Setting the method of communictaion my server would use - JSON
app.use(express.json())

// Adding the route to addition
const addRouter = require("./routes/add")
app.use("/api/calculate/add", addRouter)

// Adding the route to subtraction
const subtractRouter = require("./routes/subtract")
app.use("/api/calculate/subtract", subtractRouter)

// Adding the route to multiplication
const multiplyRouter = require("./routes/multiply")
app.use("/api/calculate/multiply", multiplyRouter)

// Adding the route to division
const divideRouter = require("./routes/divide")
app.use("/api/calculate/divide", divideRouter)


// app.get("/", (req, res) => {
//     res.status(200).json("Hello World")
// })


// Adding a message that will be logged to the console to help ensure that the server is running
app.listen(PORT, () => console.log("Server is running on port", PORT))