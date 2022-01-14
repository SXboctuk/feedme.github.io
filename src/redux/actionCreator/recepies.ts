import {
	RecepiesAction,
	RecepiesActionTypes,
} from '../reducers/RecepiesReducer/RecepiesReducer.types';
import { Dispatch } from 'redux';

import recepiesData from '../../constants/mocks/RecepiesCard.json';

export const FetchRecepies = () => {
	return async (dispatch: Dispatch<RecepiesAction>) => {
		try {
			dispatch({ type: RecepiesActionTypes.FETCH_RECEPIES });
			// fetch
			const data = recepiesData;
			setTimeout(() => {
				dispatch({
					type: RecepiesActionTypes.FETCH_RECEPIES_SUCCESS,
					payload: data,
				});
			}, 1500);
		} catch (e) {
			dispatch({
				type: RecepiesActionTypes.FETCH_RECEPIES_ERROR,
				payload: 'fetch recepies error',
			});
		}
	};
};
