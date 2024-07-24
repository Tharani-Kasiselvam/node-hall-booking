const express = require('express')
const router = express.Router()

const roomsController = require('../controller/roomsController')
const bookingController = require('../controller/bookingController')

router.post('/',roomsController.createRoom)
router.post('/bookRoom',bookingController.booking)

module.exports = router