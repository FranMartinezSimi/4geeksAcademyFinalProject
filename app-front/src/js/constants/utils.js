export const getCurrentDate = () => {
	let today = new Date();
	let day = today.getDate();
	day = day < 10 ? `0${day}` : day;
	let month = today.getMonth() + 1;
	month = month < 10 ? `0${month}` : month;
	let year = today.getFullYear();

	return `${year}-${month}-${day}`;
};

export const getMaxDate = () => {
	let maxDate = new Date();
	maxDate.setDate(maxDate.getDate() + 90);
	let day = maxDate.getDate();
	day = day < 10 ? `0${day}` : day;
	let month = maxDate.getMonth() + 1;
	month = month < 10 ? `0${month}` : month;
	let year = maxDate.getFullYear();

	return `${year}-${month}-${day}`;
};

export const formatDate = (value) => {
	let newDate = new Date(value);
	let day = newDate.getDate() + 1;
	day = day < 10 ? `0${day}` : day;
	let month = newDate.getMonth() + 1;
	month = month < 10 ? `0${month}` : month;
	let year = newDate.getFullYear();

	return `${day}/${month}/${year}`;
};
