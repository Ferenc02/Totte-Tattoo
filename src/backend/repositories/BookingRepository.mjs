import Booking from "../models/Booking.mjs";
import AppError from "../models/AppError.mjs";

export default class BookingRepository {
	async listAll() {
		const bookings = await Booking.find();
		console.log("Antal bokningar hittade:", bookings.length);
		return bookings;
	}

	async add(booking) {
		const { firstName, lastName, email, number, message, image } = booking;
		console.log("BOKNING:", { firstName, lastName, email, number, date, time, gdpr, message, image });
		
		const result = await Booking.create({
			firstName,
			lastName,
			email,
			number,
      date,
      time,
      gdpr,
			message,
			image,
		});
		return result;
	}

	async find(id) {
		const booking = await Booking.findById(id);

		if (!booking) {
			throw new AppError(`Vi kan inte hitta bokningen med id: ${id}`, 404);
		}
		return booking;
	}

	async update(data, id) {
		const result = await Booking.findByIdAndUpdate(id, data, { new: true });
		console.log("Uppdaterad bokning:", result);
		return result;
	}

	async updatePartOfBooking(data, id) {
		const result = await Booking.findByIdAndUpdate(id, data, { new: true });
		console.log("Delvis uppdaterad bokning:", result);
		return result;
	}

	async delete(id) {
		const result = await Booking.findByIdAndDelete(id);
		if (!result) {
			throw new AppError(`Det finns ingen bokning med id: ${id}`, 404);
		}
		console.log("Bokning borttagen:", result);
		return result;
	}
}
