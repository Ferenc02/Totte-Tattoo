export const getBookings = async () => {
	const response = await fetch('http://localhost:3001/api/v1/booking');
	const data = await response.json();
	//console.log(data);

	return data;
};
