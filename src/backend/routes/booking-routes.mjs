import express from "express";
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