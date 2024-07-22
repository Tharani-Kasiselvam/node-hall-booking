const app = require('./app')

const mongoose = require('mongoose')

console.log("Connecting to MongoDB")

mongoose.connect('mongodb+srv://sherleytharani:Guvi2024@mangodbtmj.rmeyv9c.mongodb.net')
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

