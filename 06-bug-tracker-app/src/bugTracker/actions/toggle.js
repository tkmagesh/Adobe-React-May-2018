import { saveBug } from '../services/bugServer';

export function toggle(bugToToggle){
	return function(dispatch){
		let toggledBug = {...bugToToggle, isClosed : !bugToToggle.isClosed};
		saveBug(toggledBug)
			.then(bug => dispatch({ type : 'UPDATE', payload : {oldBug : bugToToggle, newBug : bug}}))
	}
}
