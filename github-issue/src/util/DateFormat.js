export const DateFormat = (date) => {
	let result = date.replace(/[^0-9]/g,'');
	let dateLength = result.length;

	if (dateLength > 8) return "break";

	if (0 <= dateLength && dateLength <= 4) result = `${result}.`;
	else if (4 < dateLength && dateLength <= 6) result = `${result.substr(0, 4)}.${result.substr(4)}`;
	else if (6 < dateLength) result = `${result.substr(0, 4)}.${result.substr(4,2)}.${result.substr(6)}`;

	return result;
}