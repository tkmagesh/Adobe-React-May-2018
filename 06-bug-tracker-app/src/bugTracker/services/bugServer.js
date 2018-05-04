import axios from 'axios';
let baseUrl = 'http://localhost:3030/bugs';

export function loadBugs(){
	return axios
		.get(baseUrl)
		.then(response => response.data);
}

export function saveBug(bugData){
	if (bugData.id === 0){
		return axios
			.post(baseUrl, bugData)
			.then(response => response.data);
	} else {
		return axios
			.put(`${baseUrl}/${bugData.id}`, bugData)
			.then(response => response.data);
	}
}

export function removeBug(bug){
	return axios
		.delete(`${baseUrl}/${bug.id}`)
		.then(response => response.data);
}