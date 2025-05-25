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
const dateCalendar = document.querySelector('#date');
const submitBtn = document.querySelector('#submitBtn');

const initApp = async () => {
	//allOpenSlots = await getOpenSlots();
	//console.log(allOpenSlots.find((d) => d.day === 1));
	//console.log(allOpenSlots[0].slots);
};

const getSlots = async (e) => {
	const date = e.target.value.split('-');
	const year = date[0];
	const month = date[1];
	const allOpenSlots = await getOpenSlots(year, month);

	const openSlots = allOpenSlots.find((d) => d.day == date[2]);
	if (openSlots.slots.length < 1) {
		alert('Allt fullt detta datum!');

		dateCalendar.value = '';
	}
	//console.log(openSlots.slots);
	showOpenSlots(openSlots.slots);
};

const handleSubmit = async (e) => {
	e.preventDefault();
	const formData = new FormData(e.target);

	try {
		//const data = Object.fromEntries(formData.entries());
		const response = await addBooking(formData);
		console.log(response);
		if (response && response.data) {
			bookingDone(response.data);
			const removeBtn = document.querySelector('#remove-button');
			removeBtn && removeBtn.addEventListener('click', handleRemove);
		} else {
			console.log('Nat gick fel');
		}
	} catch (error) {
		console.log(error);
	}
};

const handleRemove = async (e) => {
	e.preventDefault();
	//const id = e.target
	const id = e.target.closest('main').querySelector('.span-id').textContent;

	const response = await deleteBooking(id);

	if (response) {
		header.style.display = 'none';
		main.innerHTML = '';
		main.innerHTML = bookingRemoved();
	}
};

dateCalendar.addEventListener('change', getSlots);
form.addEventListener('submit', handleSubmit);
document.addEventListener('DOMContentLoaded', initApp);
