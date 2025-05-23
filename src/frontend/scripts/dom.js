
import { getBookings } from './bookingService.js';

export const bookingDone = async (booking) => {
	const { date, firstName, lastName, email, number, _id } = booking;
	const bkgs = await getBookings();
	const bkgsData = bkgs.data;
	console.log(bkgsData);
	const bkgsHtml = bkgsData.map(
		(b) => `<p>${b.firstName} - ${b.lastName} - ${b.email}</p>`
	);

	let html = `<div class='booked'><h2>Bokat <span class='check'>&#10004;</span></h2> <br />
	<span class='booked-txt'>${date} ${firstName} ${lastName} ${email} ${number}</span><button class='remove-btn' id='remove-button'>Ta bort bokning</button>
	<p class='remove-text'>Vill du avboka/kontrollera din bokning i ett senare skede anvand:</p> <br /><span class='span-id'>${_id}</span>

	</div>`;
	return html.replace(',', '');
};

export const bookingRemoved = () => {
	let seconds = 5;

	let html = `<div class='booked booking-removed'>
	<h2>Bokning borttagen <span class='check'>&#10004;</span></h2>
	<p class='countdown'>Du kommer tillbaka till framsidan om <span id='countdown'>${seconds}</span> sek...</p>
	</div>`;

	setTimeout(() => {
		const countDown = setInterval(() => {
			seconds--;
			const cd = document.querySelector('#countdown');
			cd.textContent = seconds;

			if (cd.textContent <= 0) {
				clearInterval(countDown);
				window.location.href = 'http://localhost:5500/frontend/pages';
			}
		}, 1000);
	}, 0);
	return html;
};

export const bookingCard = (booking) => {
	const div = document.createElement('div');
	div.classList.add('booking-card');
	const h2 = document.createElement('h2');
	h2.appendChild(document.createTextNode('Din bokning:'));
	div.appendChild(h2);
	let name = '';
	for (const key in booking) {
		if (['_id', '__v', 'images'].includes(key)) continue;
		const p = document.createElement('p');

		if (key === 'firstName' || key === 'lastName') {
			name += booking[key] + ' ';
			continue;
		}
		p.appendChild(document.createTextNode(`${key}: ${booking[key]}`));
		div.appendChild(p);
	}

	const p2 = document.createElement('p');
	p2.appendChild(document.createTextNode(`Namn: ${name}`));

	div.appendChild(p2);

	const btn = document.createElement('button');
	btn.setAttribute('id', 'cancel-booking');
	btn.appendChild(document.createTextNode('Avboka'));
	btn.style.backgroundColor = 'red';
	div.appendChild(btn);

	return div;
};

