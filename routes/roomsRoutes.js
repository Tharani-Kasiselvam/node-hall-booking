const express = require('express')
const router = express.Router()

const roomsController = require('../controller/roomsController')
const bookingController = require('../controller/bookingController')

router.post('/',roomsController.createRoom)
router.post('/bookRoom',bookingController.booking)
router.get('/bookedData',bookingController.bookedData)
router.get('/customerData',bookingController.customerData)
router.get('/cust-booking',bookingController.customerBooking)

module.exports = router