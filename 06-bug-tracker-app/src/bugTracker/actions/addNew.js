import { saveBug } from '../services/bugServer';

export function addNew(bugName){
	return function(dispatch){
		let newBugData = { id : 0, name : bugName, isClosed : false, createdAt : new Date()};
		saveBug(newBugData)
			.then(newBug => dispatch({ type : 'ADD_NEW', payload : newBug}));
	}
}