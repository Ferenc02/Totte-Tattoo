import { deleteBooking, getBookings } from "./bookingService.js";
import { bookingCard, bookingRemoved } from "./dom.js";

const main = document.querySelector("main");
const btn = main.querySelector("#search");
const input = main.querySelector("#bookingid");
const bookingsContainer = main.querySelector(".bookings-container");
const noBookingsText = main.querySelector(".no-bookings");

// Much of the code is similat to customerBooking.js since time constraints
let loadBookings = async () => {
  bookingsContainer.innerHTML = "";

  const response = await getBookings();

  if (response.success) {
    if (response.data.length !== 0) {
      noBookingsText.style.display = "none";
    } else {
      noBookingsText.style.display = "block";
    }

    response.data.forEach((booking) => {
      const card = bookingCard(booking);
      bookingsContainer.appendChild(card);

      // I don't like this "hack" but I don't have time to fix it
      card.firstChild.textContent = `${booking._id}`;

      const deleteBtn = card.querySelector("#cancel-booking");

      deleteBtn.addEventListener("click", () => {
        const id = booking._id;
        handleRemove(id);
      });
    });
  }
};

const handleRemove = async (id) => {
  confirm("Är du säker på att du vill ta bort bokningen?") === true
    ? null
    : (id = null);

  if (!id) return;

  const response = await deleteBooking(id);

  if (response) {
    await loadBookings();
  } else {
    alert("Något gick fel, försök igen senare.");
  }
};

await loadBookings();
