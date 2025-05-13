export const bookingDone = (booking) => {
	const { date, name, email, phone } = booking;
	let html = `<div><h2>Bokat</h2> <br />${date} ${name} ${email} ${phone}</div>`;
	return html;
};
