import axios from 'axios';
import { loadBugs } from '../services/bugServer';

export function load(){
	return function(dispatch){
		loadBugs()
			.then(bugs => dispatch({ type : 'LOAD', payload : bugs}));
	};
}
