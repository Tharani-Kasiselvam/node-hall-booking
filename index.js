const express = require('express')
const app = express()

//middleware to parse the request body
app.use(express.json())

app.get('/',(req,res)=>{
   res.send("Hall Booking App")
})


app.listen(3050, () => {
    console.log("Server running on http://localhost:3050/")
})