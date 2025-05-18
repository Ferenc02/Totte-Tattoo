import express from "express";
import { addBooking, listAllBookings } from "../controllers/booking-controller.mjs";
import { upload } from "../utilities/storage.mjs";

const bookingRouter = express.Router();

bookingRouter.route("/").get(listAllBookings).post(upload.array('file'), addBooking);


// bookingRouter.get("/:id").put();

export default bookingRouter;
