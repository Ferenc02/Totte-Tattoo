import { addBooking, deleteBooking } from './bookingService.js';
import { bookingDone, bookingRemoved } from './dom.js';

const form = document.querySelector('#form-booking');
const container = document.querySelector('.booking-container');
const main = document.querySelector('main');
const header = document.querySelector('header');

const initApp = () => {
	console.log(form);
};

const handleSubmit = async (e) => {
	e.preventDefault();
	console.log(e.target);
	const formData = new FormData(e.target);
	const data = Object.fromEntries(formData.entries());
	//	console.log(formData);
	//console.log(data);
	const response = await addBooking(data);
	//console.log(response.data._id);
	container.innerHTML = await bookingDone(response.data);

	main.style.backgroundColor = 'yellow';
	main.innerHTML = '';
	main.appendChild(container);

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

form.addEventListener('submit', handleSubmit);
document.addEventListener('DOMContentLoaded', initApp);
