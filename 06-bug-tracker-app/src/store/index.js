import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import ReduxThunk from 'redux-thunk'

let asyncHandler = function({getState, dispatch}){
	return function(next){
		return function(action){
			if (typeof action === 'function'){
				return action(dispatch, getState);
			} else {
				return next(action);
			}
		}
	}
}

let appStore = createStore(rootReducer, applyMiddleware(ReduxThunk));
export default appStore;