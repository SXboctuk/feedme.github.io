import { Dispatch } from 'redux';
import {
	CookbooksAction,
	CookbooksActionTypes,
} from '../reducers/CookbooksReducer/CookbooksReducer.types';

import cookbooksData from '../../constants/mocks/CookbooksCard.json';
export const fetchCookbook = () => {
	return async (dispatch: Dispatch<CookbooksAction>) => {
		try {
			dispatch({ type: CookbooksActionTypes.FETCH_COOKBOOKS });
			// fetch
			const data = cookbooksData;
			setTimeout(() => {
				dispatch({
					type: CookbooksActionTypes.FETCH_COOKBOOKS_SUCCESS,
					payload: data,
				});
			}, 1500);
		} catch (e) {
			dispatch({
				type: CookbooksActionTypes.FETCH_COOKBOOKS_ERROR,
				payload: 'fetch recepies error',
			});
		}
	};
};
