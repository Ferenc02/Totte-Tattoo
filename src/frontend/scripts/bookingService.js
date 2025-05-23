const URL = 'http://localhost:3001/api/v1/booking';

export const getBookings = async () => {
	const response = await fetch(URL);
	const data = await response.json();
	//console.log(data);

	return data;
};

export const addBooking = async (booking) => {
	console.log(booking);
	const { firstName, lastName, email, phone, message, gdpr, date, time } =
		booking;

	const response = await fetch(URL, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({
			firstName,
			lastName,
			email,
			number: phone,
			message,
			gdpr,
			date,
			time,
		}),
	});
	const data = await response.json();
	return data;
};

export const deleteBooking = async (id) => {
	const response = await fetch(`${URL}/${id}`, {
		method: 'DELETE',
	});

	return response.ok;
};

export const getCustomerBooking = async (id) => {
	const response = await fetch(`${URL}/${id}`);
	const data = await response.json();
	//window.location.href = `${window.location.href}?id=${id}`;
	return data;
};
