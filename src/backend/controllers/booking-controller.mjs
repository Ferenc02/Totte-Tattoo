import BookingRepository from "../repositories/BookingRepository.mjs";
import { catchErrorAsync } from "../utilities/catchErrorAsync.mjs";

export const listAllBookings = catchErrorAsync(async (req, res) => {
  const bookings = await new BookingRepository().listAll();
  res.status(200).json({ success: true, data: bookings });
});

export const addBooking = catchErrorAsync(async (req,res) => {
  const booking = await new BookingRepository().add(req);
  res.status(200).json({success: true, data: booking });
});
