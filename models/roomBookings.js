const mongoose = require('mongoose')

const roomBookingsSchema = new mongoose.Schema({
    customer_name : String,
    booking_date : {
        type : Date
    },
    start_time : {
        type : String,
        default : "12:00 am"
    },
    end_time : {
        type : String,
        default : "11:59 pm"
    },
    room_id : String,
    booked_status : String
},
{
    collection:'RoomBookings',
    versionKey: false
})

module.exports = mongoose.model('RoomBookings',roomBookingsSchema,'roomBookings')