export const bookingDone = async (booking) => {
	const container = document.querySelector('.booking-container');
	const main = document.querySelector('main');
	const { date, firstName, lastName, email, number, _id } = booking;

	let html = `
    <div class='booked'>
      <h2>Bokat <span class='check'>&#10004;</span></h2>
      <br />
      <span class='booked-txt'>
        ${date} <br />
        ${firstName} ${lastName} <br />
        ${email} <br />
        ${number}
      </span>
      <br />
      <button class='remove-btn button' id='remove-button'>Ta bort bokning</button>
      <p class='remove-text'>
        Vill du avboka/kontrollera din bokning i ett senare skede använd:
      </p>
      <br />
      <span class='span-id'>${_id}</span>
    </div>
  `;
	container.innerHTML = html.replace(',', '');
	main.innerHTML = '';
	main.appendChild(container);
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
				window.location.href =
					'http://localhost:5500/src/frontend/pages';
			}
		}, 1000);
	}, 0);
	return html;
};

export const showOpenSlots = (slots) => {
	const time = document.querySelector('#time');
	let html = `<option value="" disabled selected>Välj tid</option>${slots.map(
		(slot) => `<option value='${slot}'>${slot}</option>`
	)}`;

	time.innerHTML = html;
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
	btn.classList.add('remove-btn');
	btn.classList.add('button');
	div.appendChild(btn);

	return div;
};
