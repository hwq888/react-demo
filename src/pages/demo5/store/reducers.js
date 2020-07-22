// reducer集合
import { combineReducers } from 'redux-immutable';
import { reducer as commReducer } from './comm/commStore';
import { reducer as homeReducer } from '../pages/home/store';

const reducer = combineReducers({
	comm: commReducer,
	home: homeReducer
});

export default reducer;
