import { deleteBooking, getCustomerBooking } from './bookingService.js';
import { bookingCard, bookingRemoved } from './dom.js';

const main = document.querySelector('.check-booking');
const btn = main.querySelector('#search');
const input = main.querySelector('#bookingid');

let id;

const handleClick = async (e) => {
	const response = await getCustomerBooking(input.value);
	console.log(response);
	if (response.success) {
		const card = bookingCard(response.data);
		id = response.data._id;
		main.lastChild.remove();
		main.appendChild(card);
		const deleteBtn = document.querySelector('#cancel-booking');
		deleteBtn.addEventListener('click', handleRemove);
	} else {
		alert('Ingen bokning hittad');
	}
};

const handleRemove = async () => {
	const response = await deleteBooking(id);

	if (response) {
		main.innerHTML = '';
		main.innerHTML = bookingRemoved();
	}
};

btn.addEventListener('click', handleClick);
