/* 
Author: Munachimso Joshua Enabulele
Title: Calculator API Server
*/

// Getting the express framework
const express = require("express")

// Setting the router for this route - This will help to navigate to this route
const router = express.Router()

// This router will make use of a post request to get the operands required and then display the answer/result
router.post("/", (req, res) => {

    // Fetching the data needed
    let data = req.body
    let firstOperand = data.firstOperand
    let secondOperand = data.secondOperand
    
    // A function that carries out the actual computation
    const multiplication = (firstOperand, secondOperand) => {

        // The conditional statement here works when the validOperands function is true, else the string "Invalid Parameters" will be sent back to the client.
        if (validOperands(firstOperand, secondOperand)) {
            let result = {
                "operands": `First Number: ${firstOperand}, Second Number: ${secondOperand}`,
                "result": `Result: ${firstOperand * secondOperand}`
            }
            res.status(201).json(result)
            return
        }
        res.status(201).json(`Invalid Operands: ${firstOperand}: ${typeof firstOperand} and ${secondOperand}: ${typeof secondOperand}`)
    }

    // Another conditional logic that checks if the operands posted by the user are valid operands or invalid operands
    const validOperands = (firstOperand, secondOperand) => {
        if (typeof firstOperand === "number" && typeof secondOperand === "number" && !(isNaN(firstOperand) && isNaN(secondOperand))) {
            // They are valid
            return true
        }
        // They are invalid
        return false
    }

    // Calling the function
    multiplication(firstOperand, secondOperand)
})

// Exporting the route
module.exports = router