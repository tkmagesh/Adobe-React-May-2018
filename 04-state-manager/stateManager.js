var SM = (function(){
	var _reducer = null,
		_currentState = undefined,
		_listenerFns = [],
		__init_action = '@@INIT_ACTION';

	function subscribe(listenerFn){
		_listenerFns.push(listenerFn);
	}

	function triggerChange(){
		_listenerFns.forEach(listenerFn => listenerFn());
	}

	function getState(){
		return _currentState;
	}

	function dispatch(action){
		if (!_reducer) return;
		let newState = _reducer(_currentState, action);
		if (newState === _currentState) return;
		_currentState = newState;
		triggerChange();
	}

	function createStore(reducer){
		_reducer = reducer;
		_currentState = _reducer(_currentState, __init_action);
		return { subscribe, getState, dispatch };
	}

	function bindActionCreators(actionCreators, dispatch){
		let result = {};
		for(let key in actionCreators){
			result[key] = function(){
				let action = actionCreators[key].apply(undefined, arguments);
				dispatch(action);
			}
		}
		return result;
	}

	return { createStore, bindActionCreators };
})();

