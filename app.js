const express = require('express')
const app = express()

//middleware to parse the request body
app.use(express.json())

app.get('/',(req,res)=>{
   res.send("Hall Booking System")
})

module.exports = app