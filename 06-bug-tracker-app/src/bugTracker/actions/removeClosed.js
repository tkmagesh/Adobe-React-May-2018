export function removeClosed(bugs){
	let closedBugs = bugs.filter(bug => bug.isClosed);
	return { type : 'REMOVE', payload : closedBugs};
}