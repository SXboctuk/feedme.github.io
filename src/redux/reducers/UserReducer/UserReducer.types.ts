export enum UserActionTypes {
    SIGN_IN_USER = 'SIGN_IN_USER',
    SIGN_IN_USER_SUCCESS = 'SIGN_IN_USER_SUCCESS',
    SIGN_IN_USER_ERROR = 'SIGN_IN_USER_ERROR',
    SIGN_OUT_USER = 'SIGN_OUT',
    SET_NEW_USERTEXT = 'SET_NEW_USERTEXT',
    SET_NEW_NAME = 'SET_NEW_NAME',
    SET_NEW_IMAGE = 'SET_NEW_IMAGE',
    SET_NEW_EMAIL = 'SET_NEW_EMAIL',
}

export interface UserState {
    isAuth: boolean;
    userName: string;
    userText: string;
    email: string;
    image: string;
    id: string;
    role: string;
    loading: boolean;
    error: string | null;
    token: string | null;
}
interface SignInAction {
    type: UserActionTypes.SIGN_IN_USER;
}
interface SignInSuccessAction {
    type: UserActionTypes.SIGN_IN_USER_SUCCESS;
    payload: {
        userName: string;
        userText: string;
        email: string;
        image: string;
        id: string;
        role: string;
        token: string;
    };
}
interface SignInErrorAction {
    type: UserActionTypes.SIGN_IN_USER_ERROR;
    payload: string;
}
interface SignOutErrorAction {
    type: UserActionTypes.SIGN_OUT_USER;
}

interface SetNewUserText {
    type: UserActionTypes.SET_NEW_USERTEXT;
    payload: string;
}
interface SetNewName {
    type: UserActionTypes.SET_NEW_NAME;
    payload: string;
}

interface SetNewImage {
    type: UserActionTypes.SET_NEW_IMAGE;
    payload: string;
}
interface SetNewEmail {
    type: UserActionTypes.SET_NEW_EMAIL;
    payload: string;
}
export type UserAction =
    | SignInAction
    | SignInSuccessAction
    | SignInErrorAction
    | SignOutErrorAction
    | SetNewUserText
    | SetNewName
    | SetNewImage
    | SetNewEmail;
