// 公共reducer
import * as actionTypes from './commActionTypes';
import { fromJS } from 'immutable';

const defaultState = fromJS({
	pageTitle: ''
});

export default (state = defaultState, action) => {
	switch(action.type) {
		case actionTypes.COMM_SET_TITLE:
			if (action.value) {
				document.title = action.value
			}
			return state.merge({
				pageTitle: action.value
			});
			// return state.set('pageTitle', '首页');
		default:
			return state;
	}
}
