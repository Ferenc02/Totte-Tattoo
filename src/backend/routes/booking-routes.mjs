import express from "express";

import { addBooking, listAllBookings, listOpenTimeSlots } from "../controllers/booking-controller.mjs";
import { upload } from "../utilities/storage.mjs";

const bookingRouter = express.Router();

bookingRouter.route("/").get(listAllBookings).post(upload.array('file'), addBooking);
bookingRouter.route("/slots/").get(listOpenTimeSlots)

import { 
  addBooking, 
  listAllBookings, 
  getBooking, 
  updateBooking, 
  deleteBooking 
} from "../controllers/booking-controller.mjs";

const bookingRouter = express.Router();

bookingRouter.route("/")
  .get(listAllBookings)
  .post(addBooking);


bookingRouter.route("/:id")
  .get(getBooking)
  .put(updateBooking)
  .delete(deleteBooking)
  .patch(updateBooking);

export default bookingRouter;