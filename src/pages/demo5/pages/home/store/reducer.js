import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';

const defaultState = fromJS({
	pageTitle: '首页1'
});

export default (state = defaultState, action) => {
	switch(action.type) {
		case actionTypes.SET_TITLE:
			return state.set('pageTitle', '首页1');
		default:
			return state;
	}
}