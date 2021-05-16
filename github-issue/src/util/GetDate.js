export const GetDate = (dueDate) => {
	const monthNames = ["January", "February", "March", "April", "May", "June",
		"July", "August", "September", "October", "November", "December"
	];

	const date = new Date(dueDate);
	const monthName = monthNames[date.getMonth()];
	const getDate = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();

	return `${monthName}, ${getDate}, ${date.getFullYear()}`;
}