const app = require('./app')

//import dotenv module
require('dotenv').config()

const mongoose = require('mongoose')

console.log("Connecting to MongoDB")

mongoose.connect(process.env.MONGODB_URI)
.then(
    () => {
        console.log("CONNECTED to MongoDB")
        app.listen(3050, () => {
            console.log("Server running on http://localhost:3050")
        })
    }
).catch(error => {
    console.error('Error connecting to MongoDB')
})

