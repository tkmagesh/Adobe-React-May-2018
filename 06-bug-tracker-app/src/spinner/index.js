import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import spinnerActionCreators from './actions';

let Spinner = ({ value, increment, decrement }) => (
	<div>
		<input type="button" value="Decrement" onClick={() => decrement(3)} />
		<span>[ {value} ]</span>
		<input type="button" value="Increment" onClick={() => increment(2)}/>
	</div>
);
function mapStateToSpinnerProps(storeState){
	let spinnerValue = storeState.spinnerData;
	return { value : spinnerValue };	
}

function mapDispatchToSpinnerProps(dispatch){
	let spinnerActions = bindActionCreators(spinnerActionCreators, dispatch);
	return spinnerActions;
}

export default connect(mapStateToSpinnerProps, mapDispatchToSpinnerProps)(Spinner);