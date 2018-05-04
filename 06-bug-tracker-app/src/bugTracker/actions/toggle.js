export function toggle(bugToToggle){
	let toggledBug = {...bugToToggle, isClosed : !bugToToggle.isClosed};
	return { type : 'UPDATE', payload : {oldBug : bugToToggle, newBug : toggledBug}};
};