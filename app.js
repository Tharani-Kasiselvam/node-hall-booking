const morgan = require('morgan')
const express = require('express')
const app = express()
const roomRoutes = require('./routes/roomsRoutes')

//middleware to parse the request body
app.use(express.json())

//middleware to log the request
app.use(morgan('dev'))

//define endpoints
app.use('/', roomRoutes)

app.get('/',(req,res)=>{
   res.send("Hall Booking System")
})

module.exports = app