export function addNew(bugName){
	let newBug = { name : bugName, isClosed : false}
	return { type : 'ADD_NEW', payload : newBug};
}