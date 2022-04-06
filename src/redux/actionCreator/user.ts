import { Dispatch } from 'redux';

import {
    UserAction,
    UserActionTypes,
} from '../reducers/UserReducer/UserReducer.types';

export const signInUser = (
    email: string,
    id: string,
    image: string,
    role: string,
    userName: string,
    userText: string,
    token: string,
) => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
            dispatch({ type: UserActionTypes.SIGN_IN_USER });
            if (id && image && role && userName && userText && email) {
                dispatch({
                    type: UserActionTypes.SIGN_IN_USER_SUCCESS,
                    payload: {
                        email: email,
                        id: id,
                        image: image,
                        role: role,
                        userName: userName,
                        userText: userText,
                        token: token,
                    },
                });
            } else {
                dispatch({
                    type: UserActionTypes.SIGN_IN_USER_ERROR,
                    payload: 'Login error, wrong response data',
                });
            }
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
