export function bugsReducer(currentState = [], action){
	if (action.type === 'LOAD'){
		return action.payload;
	}
	if (action.type === 'ADD_NEW'){
		return [...currentState, action.payload];
	}
	if (action.type === 'UPDATE'){
		return currentState.map(bug => bug.id === action.payload.oldBug.id ? action.payload.newBug : bug);
	}
	if (action.type === 'REMOVE'){
		let closedBug = action.payload;
		return currentState.filter(bug => bug.id !== closedBug.id);
	}
	return currentState;
}