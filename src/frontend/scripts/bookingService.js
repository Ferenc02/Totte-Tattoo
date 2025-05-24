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

export const getOpenSlots = async (year, month) => {
	try {
		const response = await fetch(
			`${URL}/slots?year=${year}&month=${month}`
		);
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
	console.log(booking);

	try {
		const response = await fetch(URL, { method: 'POST', body: booking });
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
