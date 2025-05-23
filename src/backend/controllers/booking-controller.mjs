import BookingRepository from '../repositories/BookingRepository.mjs';
import { catchErrorAsync } from '../utilities/catchErrorAsync.mjs';

export const listAllBookings = catchErrorAsync(async (req, res) => {
  const bookings = await new BookingRepository().listAll();
  res.status(200).json({ success: true, data: bookings });
});

export const addBooking = catchErrorAsync(async (req, res) => {
  const booking = await new BookingRepository().add(req);
  res.status(200).json({ success: true, data: booking });
});

export const listOpenTimeSlots = catchErrorAsync(async (req, res) => {
  const { year, month } = req.body;
  const slots = await new BookingRepository().listSlots(year, month);
  res.status(200).json({ success: true, data: slots });
});

export const getBooking = catchErrorAsync(async (req, res) => {
  const booking = await new BookingRepository().find(req.params.id);
  res.status(200).json({ success: true, data: booking });
});

export const updateBooking = catchErrorAsync(async (req, res) => {
  await new BookingRepository().update(req.body, req.params.id);
  res.status(204).end();
});

export const deleteBooking = catchErrorAsync(async (req, res) => {
  await new BookingRepository().remove(req.params.id);
  res.status(204).end();
});
