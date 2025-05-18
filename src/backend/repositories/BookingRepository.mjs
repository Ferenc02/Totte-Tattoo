import Booking from "../models/Booking.mjs";


export default class BookingRepository {
	async listAll() {
		return await Booking.find();
	}

  async add(booking){
    const {firstName, lastName, email} = JSON.parse(booking.body.booking);
    const images = [...booking.files].map(file => file.filename);

    return await Booking.create({firstName, lastName, email, images});
  }
}

