const URL = 'http://localhost:3001/api/v1/booking';

export const getBookings = async () => {
	try {
		const response = await fetch(URL);
		if (response) {
			const data = await response.json();
			return data;
		}
	} catch (error) {
		console.log(error);
	}
};

export const getOpenSlots = async () => {
	try {
		const response = await fetch(`${URL}/slots?year=2025&month=05`);
		if (response) {
			const data = await response.json();

			return data.data;
		}
	} catch (error) {
		console.log(error);
	}
};

export const addBooking = async (booking) => {
	const { firstName, lastName, email, phone, message, gdpr, date, time } =
		booking;

	try {
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
		if (response.ok) {
			const data = await response.json();
			return data;
		}
	} catch (error) {
		console.log(error);
	}
};

export const deleteBooking = async (id) => {
	try {
		const response = await fetch(`${URL}/${id}`, {
			method: 'DELETE',
		});
		if (response.ok) return response.ok;
	} catch (error) {
		console.log(error);
	}
};

export const getCustomerBooking = async (id) => {
	try {
		const response = await fetch(`${URL}/${id}`);
		if (response.ok) {
			const data = await response.json();
			//window.location.href = `${window.location.href}?id=${id}`;
			return data;
		}
	} catch (error) {
		console.log(error);
	}
};
