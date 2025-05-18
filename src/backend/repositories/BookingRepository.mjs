import Booking from "../models/Booking.mjs";
import {timeSlots} from '../config/settings.mjs';
import { getOpenSlots, groupBookedSlots } from "../utilities/utils.mjs";


export default class BookingRepository {
	async listAll() {
		return await Booking.find();
	}

  async add(booking){
    const {firstName, lastName, email, date, time} = JSON.parse(booking.body.booking);
    const images = [...booking.files].map(file => file.filename);

    return await Booking.create({firstName, lastName, email, date, time, images});
  }

  async listSlots(year, month) {
    // should only fetch bookings with relevant dates from storage
    const bookings = await Booking.find();
    
    const bookedSlots = groupBookedSlots(bookings);

    const daysInMonth = new Date(year, month, 0).getDate();
    const openSlots = getOpenSlots(daysInMonth, bookedSlots, year, month);

    return openSlots;
  }
}

