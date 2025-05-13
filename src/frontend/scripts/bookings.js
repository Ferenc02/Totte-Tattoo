import { bookingDone } from './dom.js';

const form = document.querySelector('#form-booking');
const container = document.querySelector('.booking-container');
const initApp = () => {
	console.log(form);
};

const handleSubmit = (e) => {
	e.preventDefault();
	console.log(e.target);
	const formData = new FormData(e.target);
	const data = Object.fromEntries(formData.entries());
	console.log(formData);
	console.log(data);

	container.innerHTML = bookingDone(data);
};

form.addEventListener('submit', handleSubmit);
document.addEventListener('DOMContentLoaded', initApp);
