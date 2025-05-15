import Booking from "../models/Booking.mjs";


export default class BookingRepository {
	async listAll() {
		return await Booking.find();
	}

  async add(booking){
    const {firstName, lastName, email} = booking;
    console.log("BOOKING: ",firstName, lastName, email);
    
    const result = await Booking.create({firstName, lastName, email});
    return result;
  }
}

