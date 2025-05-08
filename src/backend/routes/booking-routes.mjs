import express from "express";
import { listAllBookings } from "../controllers/booking-controller.mjs";

const bookingRouter = express.Router();

bookingRouter.route("/").get(listAllBookings);

bookingRouter.get("/:id").put();

export default bookingRouter;
