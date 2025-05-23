import express from 'express';
import { upload } from '../utilities/storage.mjs';
import {
	addBooking,
	listAllBookings,
	getBooking,
	updateBooking,
	deleteBooking,
	listOpenTimeSlots,
} from '../controllers/booking-controller.mjs';

const bookingRouter = express.Router();

bookingRouter
	.route('/')
	.get(listAllBookings)
	.post(upload.array('file'), addBooking);

bookingRouter.route('/slots').get(listOpenTimeSlots);

bookingRouter
	.route('/:id')
	.get(getBooking)
	.put(updateBooking)
	.delete(deleteBooking)
	.patch(updateBooking);

export default bookingRouter;
