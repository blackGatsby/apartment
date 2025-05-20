import express from 'express'

export const bookRoute = express.Router()

import {getCheckOutSession} from '../controller/bookingController.js'




bookRoute.get('/checkout-session/:tourID',getCheckOutSession)