import Booking from "../models/Booking.mjs";
import {timeSlots} from '../config/settings.mjs';


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
    const bookings = await Booking.find();
    
    const bookedSlots = new Map();

    // parse all booking dates and times into a list, example: 2025-05-15:9 && 2025-05-15:10 = 09 and 10 timeslots on that day.
    bookings.forEach(booking => {
      const date = booking.date;
      booking.time.forEach(t => {
        bookedSlots.has(date) ? bookedSlots.get(date).push(t) : bookedSlots.set(date, [t]);
      })
    })

    const daysInMonth = new Date(year, month, 0).getDate();
    const openSlotsInMonth = [];

    for(let i = 1; i <= daysInMonth; i++){
      const date = new Date(`${year}-${month}-${i}`).toLocaleDateString('sv-SE');
      const slots = bookedSlots.has(date) ? timeSlots.filter((t) => !bookedSlots.get(date).includes(`${t}`)) : timeSlots;
      
      openSlotsInMonth.push({
        day: i,
        slots: slots
      });
    }

    return openSlotsInMonth;
  }
}

