import * as actionTypes from './actionTypes';
// import { fromJS } from 'immutable';
// import axios from 'axios';

// const changeList = (data) => ({
// 	type: constants.CHANGE_LIST,
// 	data: fromJS(data),
// 	totalPage: Math.ceil(data.length / 10)
// });

export const setTitle = () => ({
	type: actionTypes.SET_TITLE
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