let spinnerActionCreators = {
	increment(value = 1){
		return { type : 'INCREMENT', payload : value};
	},
	decrement(value = 1){
		return { type : 'DECREMENT', payload : value};
	}
};

export default spinnerActionCreators;