import Booking from "../models/Booking.mjs";
import AppError from "../models/AppError.mjs";

export default class BookingRepository {
	async listAll() {
		const bookings = await Booking.find();
		console.log("Antal bokningar hittade:", bookings.length);
		return bookings;
	}

	async add(booking) {
		const { firstName, lastName, email, number, message, image, date, time, gdpr } = booking;
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
		// PUT - Uppdaterar hela bokningen
		// Kontrollera att alla obligatoriska fält finns med
		const requiredFields = ['firstName', 'lastName', 'email'];
		const missingFields = requiredFields.filter(field => !data[field]);
		
		if (missingFields.length > 0) {
			throw new AppError(`Saknar obligatoriska fält: ${missingFields.join(', ')}`, 400);
		}

		const result = await Booking.findByIdAndUpdate(
			id, 
			data,
			{ 
				new: true,
				runValidators: true
			}
		);

		if (!result) {
			throw new AppError(`Vi kan inte hitta bokningen med id: ${id}`, 404);
		}

		console.log("Bokning helt uppdaterad:", result);
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

