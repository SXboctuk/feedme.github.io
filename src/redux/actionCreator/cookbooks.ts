import { Dispatch } from 'redux';
import {
    CookbooksAction,
    CookbooksActionTypes,
} from '../reducers/CookbooksReducer/CookbooksReducer.types';

import { getAllCookbooks } from '../../api/Feedme.Api';
import { responseInCookbookCard } from '../../helpers/converter/cookbookCard';
export const fetchCookbook = () => {
    return async (dispatch: Dispatch<CookbooksAction>) => {
        try {
            dispatch({ type: CookbooksActionTypes.FETCH_COOKBOOKS });
            // fetch
            const data = await getAllCookbooks();
            if (data.ok) {
                dispatch({
                    type: CookbooksActionTypes.FETCH_COOKBOOKS_SUCCESS,
                    payload: responseInCookbookCard(await data.json()),
                });
            }
        } catch (e) {
            dispatch({
                type: CookbooksActionTypes.FETCH_COOKBOOKS_ERROR,
                payload: 'fetch recepies error',
            });
        }
    };
};
