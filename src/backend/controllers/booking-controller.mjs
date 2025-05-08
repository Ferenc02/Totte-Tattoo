import { appErrorAsync } from "./utilities/appErrorAsync";

export const listAllBookings = appErrorAsync(async (req, res) => {
  const bookings = await new BookingRepository().listAll();
  res.status(200).json({ success: true, data: bookings });
});
