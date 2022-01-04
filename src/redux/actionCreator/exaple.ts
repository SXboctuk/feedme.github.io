import { Dispatch } from 'redux';
import {
	ExapleAction,
	ExapleActionTypes,
} from '../reducers/exapleReducer/exapleReducer.types';

export const exapleFetchData = () => {
	return async (dispatch: Dispatch<ExapleAction>) => {
		try {
			dispatch({ type: ExapleActionTypes.FETCH_DATA });
			//fetch data row
			// dispatch({type: ExapleActionTypes.FETCH_DATA_SUCCESS, payload: somedata})
		} catch (e) {
			dispatch({
				type: ExapleActionTypes.FETCH_DATA_ERROR,
				payload: 'err_string',
			});
		}
	};
};
