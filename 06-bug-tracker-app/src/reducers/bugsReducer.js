export function bugsReducer(currentState = [], action){
	if (action.type === 'ADD_NEW'){
		return [...currentState, action.payload];
	}
	if (action.type === 'UPDATE'){
		return currentState.map(bug => bug === action.payload.oldBug ? action.payload.newBug : bug);
	}
	if (action.type === 'REMOVE'){
		let closedBugs = action.payload;
		return currentState.filter(bug => closedBugs.indexOf(bug) === -1);
	}
	return currentState;
}