import { getBookings } from './bookingService.js';

export const bookingDone = async (booking) => {
	const { date, name, email, phone } = booking;
	const bkgs = await getBookings();
	const bkgsData = bkgs.data;
	console.log(bkgsData);
	const bkgsHtml = bkgsData.map(
		(b) => `<p>${b.firstName} - ${b.lastName} - ${b.email}</p>`
	);

	let html = `<div><h2>Bokat</h2> <br />${date} ${name} ${email} ${phone} <br /> 
	</div><div>${bkgsHtml}</div>`;
	console.log(typeof html);
	return html.replace(',', '');
};
