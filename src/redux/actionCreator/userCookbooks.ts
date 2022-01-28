import { Dispatch } from 'redux';

import {
	UserCookbooksAction,
	UserCookbooksActionTypes,
} from '../reducers/UserCookbooksReducer/UserCookbooksReducer.types';

import cookbooksData from '../../constants/mocks/CookbooksCardOwner.json';
export const fetchUserCookbooks = (id: string) => {
	return async (dispatch: Dispatch<UserCookbooksAction>) => {
		try {
			dispatch({ type: UserCookbooksActionTypes.FETCH_USER_COOKBOOKS });
			// fetch id
			const data = cookbooksData;
			setTimeout(() => {
				dispatch({
					type: UserCookbooksActionTypes.FETCH_USER_COOKBOOKS_SUCCESS,
					payload: data,
				});
			}, 1500);
		} catch (e) {
			dispatch({
				type: UserCookbooksActionTypes.FETCH_USER_COOKBOOKS_ERROR,
				payload: 'fetch recepies error',
			});
		}
	};
};
