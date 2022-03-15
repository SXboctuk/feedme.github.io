import {
    RecepiesAction,
    RecepiesActionTypes,
} from '../reducers/RecepiesReducer/RecepiesReducer.types';
import { Dispatch } from 'redux';
import { getAllRecepies } from '../../api/Feedme.Api';
import { responseInResepieCard } from '../../helpers/converter/recepieCard';

export const fetchRecepies = () => {
    return async (dispatch: Dispatch<RecepiesAction>) => {
        try {
            dispatch({ type: RecepiesActionTypes.FETCH_RECEPIES });
            // fetch
            const data = await getAllRecepies();

            if (data.ok) {
                dispatch({
                    type: RecepiesActionTypes.FETCH_RECEPIES_SUCCESS,
                    payload: responseInResepieCard(await data.json()),
                });
            }
        } catch (e) {
            dispatch({
                type: RecepiesActionTypes.FETCH_RECEPIES_ERROR,
                payload: 'fetch recepies error',
            });
        }
    };
};
