import BookingRepository from "../repositories/BookingRepository.mjs";
import { catchErrorAsync } from "../utilities/catchErrorAsync.mjs";

export const listAllBookings = catchErrorAsync(async (req, res) => {
  const bookings = await new BookingRepository().listAll();
  res.status(200).json({ success: true, data: bookings });
});

export const addBooking = catchErrorAsync(async (req,res) => {
  const booking = await new BookingRepository().add(req.body);
  res.status(200).json({success: true, data: booking });
});

export const getBooking = catchErrorAsync(async (req, res) => {
  const booking = await new BookingRepository().getById(req.params.id);
  res.status(200).json({success: true, data: booking });
});

export const updateBooking = catchErrorAsync(async (req, res) => {
  const booking = await new BookingRepository().update(req.params.id, req.body);
  res.status(200).json({success: true, data: booking });
});

export const updatePartOfBooking = catchErrorAsync(async (req, res) => {
  const booking = await new BookingRepository().updatePartial(req.params.id, req.body);
  res.status(200).json({success: true, data: booking });
});

export const deleteBooking = catchErrorAsync(async (req, res) => {
  await new BookingRepository().delete(req.params.id);
  res.status(204).json({success: true, data: null });
});

