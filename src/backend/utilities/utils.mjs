import { timeSlots } from "../config/settings.mjs";

export const groupBookedSlots = (bookings) => {
    const bookedSlots = new Map();
    bookings.forEach(booking => {
    const date = booking.date;
    booking.time.forEach(t => {
        bookedSlots.has(date) ? bookedSlots.get(date).push(t) : bookedSlots.set(date, [t]);
    })
    });

    return bookedSlots;
}

export const getOpenSlots = (daysInMonth, bookedSlots, year, month) => {
    const openSlots = [];

    for(let i = 1; i <= daysInMonth; i++){
    const date = new Date(`${year}-${month}-${i}`).toLocaleDateString('sv-SE');
    const slots = bookedSlots.has(date) ? timeSlots.filter((t) => !bookedSlots.get(date).includes(`${t}`)) : timeSlots;
    
    openSlots.push({
        day: i,
        slots: slots
    });
    }

    return openSlots;
}