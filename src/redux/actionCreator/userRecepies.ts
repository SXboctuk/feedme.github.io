import { Dispatch } from 'redux';

import {
	UserRecepiesAction,
	UserRecepiesActionTypes,
} from '../reducers/UserRecepieReducer/UserRecepiesReducer.types';

import { getUserRecepies } from '../../api/Feedme.Api';
import { responseInResepieCard } from '../../helpers/converter/recepieCard';

export const fetchUserRecepies = (id: string) => {
	return async (dispatch: Dispatch<UserRecepiesAction>) => {
		try {
			dispatch({ type: UserRecepiesActionTypes.FETCH_USER_RECEPIES });
			// fetch
			const data = await getUserRecepies(id);

			if (data.ok) {
				dispatch({
					type: UserRecepiesActionTypes.FETCH_USER_RECEPIES_SUCCESS,
					payload: responseInResepieCard(await data.json()),
				});
			}
		} catch (e) {
			dispatch({
				type: UserRecepiesActionTypes.FETCH_USER_RECEPIES_ERROR,
				payload: 'fetch recepies error',
			});
		}
	};
};
