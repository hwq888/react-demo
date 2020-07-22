// 公共ActionCreators
import * as actionTypes from './commActionTypes';
// import { fromJS } from 'immutable';
// import axios from 'axios';

// const changeList = (data) => ({
// 	type: constants.CHANGE_LIST,
// 	data: fromJS(data),
// 	totalPage: Math.ceil(data.length / 10)
// });

export const commSetTitle = (value) => ({
	type: actionTypes.COMM_SET_TITLE,
	value
});


// export const getList = () => {
// 	return (dispatch) => {
// 		axios.get('/api/headerList.json').then((res) => {
// 			const data = res.data;
// 			dispatch(changeList(data.data));
// 		}).catch(() => {
// 			console.log('error');
// 		})
// 	}
// };