import { Dispatch } from 'redux';

import {
	UserCookbooksAction,
	UserCookbooksActionTypes,
} from '../reducers/UserCookbooksReducer/UserCookbooksReducer.types';

import { responseInCookbookCard } from '../../helpers/converter/cookbookCard';
import { getUserCookbooks } from '../../api/Feedme.Api';
export const fetchUserCookbooks = (id: string) => {
	return async (dispatch: Dispatch<UserCookbooksAction>) => {
		try {
			dispatch({ type: UserCookbooksActionTypes.FETCH_USER_COOKBOOKS });
			// fetch id
			const data = await getUserCookbooks(id);

			if (data.ok) {
				dispatch({
					type: UserCookbooksActionTypes.FETCH_USER_COOKBOOKS_SUCCESS,
					payload: responseInCookbookCard(await data.json()),
				});
			}
		} catch (e) {
			console.log(e);
			dispatch({
				type: UserCookbooksActionTypes.FETCH_USER_COOKBOOKS_ERROR,
				payload: 'fetch cookbook error',
			});
		}
	};
};
