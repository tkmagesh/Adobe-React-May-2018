import { removeBug } from '../services/bugServer';

export function removeClosed(){
	return function(dispatch, getState){
		let bugs = getState().bugsData;
		let closedBugs = bugs.filter(bug => bug.isClosed);
		closedBugs
			.forEach(closedBug => 
					removeBug(closedBug)
						.then(() => dispatch({type : 'REMOVE', payload : closedBug})));
	}
}