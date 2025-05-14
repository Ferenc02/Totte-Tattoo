import express from "express";
import { addBooking, listAllBookings } from "../controllers/booking-controller.mjs";

const bookingRouter = express.Router();

bookingRouter.route("/").get(listAllBookings).post(addBooking);

// bookingRouter.get("/:id").put();

export default bookingRouter;
