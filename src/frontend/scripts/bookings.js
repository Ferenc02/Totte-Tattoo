import {
	addBooking,
	deleteBooking,
	getBookings,
	getOpenSlots,
} from './bookingService.js';
import { bookingDone, bookingRemoved, showOpenSlots } from './dom.js';

const form = document.querySelector('#form-booking');
const container = document.querySelector('.booking-container');
const main = document.querySelector('main');
const header = document.querySelector('header');
const date = document.querySelector('#date');

let allOpenSlots;
const initApp = async () => {
	allOpenSlots = await getOpenSlots();

	console.log(allOpenSlots.find((d) => d.day === 1));
	console.log(allOpenSlots[0].slots);
};

const getSlots = async (e) => {
	const day = e.target.value.split('-');
	const openSlots = allOpenSlots.find((d) => d.day == day[2]);
	console.log(openSlots.slots);
	showOpenSlots(openSlots.slots);
};

const handleSubmit = async (e) => {
	e.preventDefault();
	console.log(e.target);
	const formData = new FormData(e.target);
	const data = Object.fromEntries(formData.entries());

	console.log(data);
	const response = await addBooking(data);
	//console.log(response.data._id);
	bookingDone(response.data);

	const removeBtn = main.querySelector('#remove-button');
	removeBtn.addEventListener('click', handleRemove);
};

const handleRemove = async (e) => {
	//const id = e.target
	const id = e.target.closest('main').querySelector('.span-id').textContent;

	const response = await deleteBooking(id);

	if (response) {
		header.style.display = 'none';
		main.innerHTML = '';
		main.innerHTML = bookingRemoved();
	}
};

date.addEventListener('change', getSlots);
form.addEventListener('submit', handleSubmit);
document.addEventListener('DOMContentLoaded', initApp);
