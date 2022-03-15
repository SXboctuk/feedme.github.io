import { Dispatch } from 'redux';

import {
    UserAction,
    UserActionTypes,
} from '../reducers/UserReducer/UserReducer.types';

export const signInUser = (response: Response) => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
            dispatch({ type: UserActionTypes.SIGN_IN_USER });
            dispatch({
                type: UserActionTypes.SIGN_IN_USER_SUCCESS,
                payload: await response.json(),
            });
        } catch (e) {
            dispatch({
                type: UserActionTypes.SIGN_IN_USER_ERROR,
                payload: 'Login error',
            });
        }
    };
};

export const signOutUser = () => {
    return (dispatch: Dispatch<UserAction>) => {
        dispatch({ type: UserActionTypes.SIGN_OUT_USER });
    };
};

export const setNewUsertext = (str: string) => {
    return (dispatch: Dispatch<UserAction>) => {
        dispatch({ type: UserActionTypes.SET_NEW_USERTEXT, payload: str });
    };
};
export const setNewName = (str: string) => {
    return (dispatch: Dispatch<UserAction>) => {
        dispatch({ type: UserActionTypes.SET_NEW_NAME, payload: str });
    };
};
export const setNewEmail = (str: string) => {
    return (dispatch: Dispatch<UserAction>) => {
        dispatch({ type: UserActionTypes.SET_NEW_EMAIL, payload: str });
    };
};
export const setNewImage = (str: string) => {
    return (dispatch: Dispatch<UserAction>) => {
        dispatch({ type: UserActionTypes.SET_NEW_IMAGE, payload: str });
    };
};
