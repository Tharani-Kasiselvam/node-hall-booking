const roomBookings = require("../models/roomBookings")
const rooms = require("../models/rooms")

const bookingController = {
    booking : async (req,res)=>{
        try{
            const {customer_name, booking_date, room_id} = req.body

            // const {room_id} = req.body

            //checking whether the Room is already booked
            const bookedDates = await roomBookings.find({"room_id":room_id},{_id:0,booking_date:1})
            
            bookedDates.map(bookDate => {
                if(bookDate==booking_date.toISOString()){
                    res.json({message:"Room already Booked",bookDate})
                }
                else
                res.json({message:bookDate,booking_date})
            })
            

            // const newBooking = new roomBookings({
            //     customer_name,
            //     booking_date,
            //     room_id
            // })

            // const bookedRoom = await newBooking.save()
            // res.json({message:"Room BOOKED successfully",bookedRoom})

        }catch(error){
            res.json({message:"Error while booking room"})
        }
    }
}

module.exports = bookingController