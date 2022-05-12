export function msToTime (duration, unit) {
	var seconds = Math.floor((duration / 1000) % 60),
		minutes = Math.floor((duration / (1000 * 60)) % 60),
		hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

	const lastSeen = `${Number(hours) > 0 ? hours + 'hrs' : ''} ${Number(minutes) > 0
		? minutes + 'mins'
		: ''} ${seconds}secs ${unit ? unit : ''}`;
	return lastSeen;
}
