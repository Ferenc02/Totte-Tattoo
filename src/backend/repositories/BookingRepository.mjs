import Booking from "./models/Booking.mjs";

export default class BookingRepository {
  async listAll() {
    return await Booking.find();
  }
}
