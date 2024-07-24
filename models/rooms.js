const mongoose = require('mongoose')

const roomsSchema = new mongoose.Schema(
    {
        room_id : String,
        seats_avail : String,
        amenities : Array,
        price_hr : String
    },
    {
        collection:'Rooms',
        versionKey: false
    }
)

module.exports = mongoose.model('Rooms',roomsSchema,'rooms')