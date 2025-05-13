import { catchErrorAsync } from "../utilities/catchErrorAsync.mjs";

export const listAllBookings = catchErrorAsync(async (req, res) => {
  const bookings = await new BookingRepository().listAll();
  res.status(200).json({ success: true, data: bookings });
});
