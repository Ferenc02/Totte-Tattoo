import Booking from "../models/Booking.mjs";
import { timeSlots } from "../config/settings.mjs";
import { getOpenSlots, groupBookedSlots } from "../utilities/utils.mjs";
import AppError from "../models/AppError.mjs";

export default class BookingRepository {
  async listAll() {
    const bookings = await Booking.find();
    console.log("Antal bokningar hittade:", bookings.length);
    return bookings;
  }

  async find(id) {
    const booking = await Booking.findById(id);

    if (!booking) {
      throw new AppError(`Vi kan inte hitta bokningen med id: ${id}`, 404);
    }
    return booking;
  }

  async update(data, id) {
    // PUT - Uppdaterar hela bokningen
    // Kontrollera att alla obligatoriska fält finns med
    const requiredFields = ["firstName", "lastName", "email"];
    const missingFields = requiredFields.filter((field) => !data[field]);

    if (missingFields.length > 0) {
      throw new AppError(
        `Saknar obligatoriska fält: ${missingFields.join(", ")}`,
        400
      );
    }

    const result = await Booking.findByIdAndUpdate(id, data, {
      new: true,
      runValidators: true,
    });

    if (!result) {
      throw new AppError(`Vi kan inte hitta bokningen med id: ${id}`, 404);
    }

    console.log("Bokning helt uppdaterad:", result);
    return result;
  }

  async remove(id) {
    const result = await Booking.findByIdAndDelete(id);
    if (!result) {
      throw new AppError(`Det finns ingen bokning med id: ${id}`, 404);
    }
    console.log("Bokning borttagen:", result);
    return result;
  }

  async add(booking) {
    const { firstName, lastName, email, date, time, number, gdpr } =
      booking.body;

    //const images = [...booking.files].map((file) => file.filename);

    return await Booking.create({
      firstName,
      lastName,
      email,
      date,
      time,
      number,
      gdpr,
    });
    //images,
  }

  async listSlots(yearStr, monthStr) {
    // should only fetch bookings with relevant dates from storage
    const year = parseInt(yearStr);
    const month = parseInt(monthStr);
    const bookings = await Booking.find();

    const bookedSlots = groupBookedSlots(bookings);

    console.log(bookedSlots);
    const daysInMonth = new Date(year, month, 0).getDate();

    //console.log(daysInMonth);
    const openSlots = getOpenSlots(daysInMonth, bookedSlots, year, month);

    return openSlots;
  }
}
