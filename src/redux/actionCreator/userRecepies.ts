import { Dispatch } from 'redux';

import {
	UserRecepiesAction,
	UserRecepiesActionTypes,
} from '../reducers/UserRecepieReducer/UserRecepiesReducer.types';

import recepiesData from '../../constants/mocks/RecepiesCardOwner.json';

export const fetchUserRecepies = (id: stirng) => {
	return async (dispatch: Dispatch<UserRecepiesAction>) => {
		try {
			dispatch({ type: UserRecepiesActionTypes.FETCH_USER_RECEPIES });
			// fetch
			const data = recepiesData;
			setTimeout(() => {
				dispatch({
					type: UserRecepiesActionTypes.FETCH_USER_RECEPIES_SUCCESS,
					payload: data,
				});
			}, 1500);
		} catch (e) {
			dispatch({
				type: UserRecepiesActionTypes.FETCH_USER_RECEPIES_ERROR,
				payload: 'fetch recepies error',
			});
		}
	};
};
