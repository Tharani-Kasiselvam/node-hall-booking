const rooms = require("../models/rooms")

const roomsController = {
    createRoom : async(req,res) => {
        try{
            const {room_id,seats_avail,amenities,price_hr} = req.body

            const newRoom = new rooms({
                room_id,
                seats_avail,
                amenities,
                price_hr
            })

            const savedRoom = await newRoom.save()
            res.json({message:"New Room created SUCCESSFULLY",savedRoom})
        }catch(error){
            res.json({message: error.message})
        }
    }
}
module.exports = roomsController