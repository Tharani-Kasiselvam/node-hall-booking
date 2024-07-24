const roomBookings = require("../models/roomBookings")
const rooms = require("../models/rooms")

const bookingController = {
    booking : async (req,res)=>{
        try{
            const {customer_name, booking_date, room_id} = req.body

            //Booking date recived from Customer
            const req_date = new Date(booking_date)
            let bookFlag = false

            //fetching the data that matches the requested RoomId
            const bookedDates = await roomBookings.find({"room_id":room_id},{_id:0,booking_date:1})
            

            bookedDates.map(bookedDate => {
                const bkDate = new Date(bookedDate.booking_date)

                //comparing the dates booked for selected RommIds
                if(bkDate.toISOString()===req_date.toISOString()){
                    bookFlag = true
                }
            })

            //based on the booking flag, new room is booked
            if(bookFlag){
                res.status(500).send({message:"Room already Booked. Kindly select a different Room"})
                return
            }
            else{
                    const newBooking = new roomBookings({
                        customer_name,
                        booking_date,
                        room_id
                        })

                    newBooking.save()
                    res.status(200).send({message:"Room BOOKED successfully"})           
                    return         
                 }
            }catch(error){
            res.json({message:"Error while booking room"})
        }
    },

    bookedData : async (req,res) => {
        const {booking_date} = req.body
        const booked_date = new Date(booking_date)

        const booked_Data = await roomBookings.find({"booking_date":booked_date},{_id:0,booking_date:1,booking_status:1,customer_name:1,booking_date:1, start_time:1,end_time:1})

        if(booked_Data.length>0)
            res.json({message:booked_Data})
        
        else
        res.json({message:"No Rooms Booked for the given date"})
    }
}

module.exports = bookingController