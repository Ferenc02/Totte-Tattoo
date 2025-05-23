import { deleteBooking, getCustomerBooking } from "./bookingService.js";
import { bookingCard, bookingRemoved } from "./dom.js";

const main = document.querySelector("main");
const btn = main.querySelector("#search");
const input = main.querySelector("#bookingid");
const bookingsContainer = main.querySelector(".bookings-container");

let id;

const handleClick = async (e) => {
  if (input.value === "") {
    return alert("Fyll i bokningsnummer!");
  }

  const response = await getCustomerBooking(input.value);
  if (!response) return alert("Ingen bokning hittad!");
  if (response.success) {
    const card = bookingCard(response.data);
    id = response.data._id;
    try {
      bookingsContainer.lastChild.remove();
    } catch (error) {}
    bookingsContainer.appendChild(card);
    const deleteBtn = document.querySelector("#cancel-booking");

    deleteBtn.addEventListener("click", handleRemove);
  }
};

const handleRemove = async () => {
  const response = await deleteBooking(id);

  if (response) {
    main.innerHTML = "";
    main.innerHTML = bookingRemoved();
  }
};

const handleEditBooking = async () => {};

btn.addEventListener("click", handleClick);
