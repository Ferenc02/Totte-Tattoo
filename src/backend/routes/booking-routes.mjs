import express from "express";
import { 
  addBooking, 
  listAllBookings, 
  getBooking, 
  updateBooking, 
  updatePartOfBooking, 
  deleteBooking 
} from "../controllers/booking-controller.mjs";

const bookingRouter = express.Router();

bookingRouter.route("/")
  .get(listAllBookings)
  .post(addBooking);

bookingRouter.route("/:id")
  .get(getBooking)
  .put(updateBooking)
  .patch(updatePartOfBooking)
  .delete(deleteBooking);

export default bookingRouter;