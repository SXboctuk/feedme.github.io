import { UserState, UserAction, UserActionTypes } from './UserReducer.types';

const userInitialState: UserState = {
    isAuth: false,
    userName: '',
    userText: '',
    email: '',
    image: '',
    id: '',
    role: '',
    loading: false,
    error: null,
    token: null,
};

export const userReducer = (
    state = userInitialState,
    action: UserAction,
): UserState => {
    switch (action.type) {
        case UserActionTypes.SIGN_IN_USER:
            return { ...state, loading: true, error: null };
        case UserActionTypes.SIGN_IN_USER_SUCCESS:
            return {
                loading: false,
                error: null,
                isAuth: true,
                userName: action.payload.userName,
                userText: action.payload.userText,
                email: action.payload.email,
                image: action.payload.image,
                role: action.payload.role,
                id: action.payload.id,
                token: action.payload.token,
            };
        case UserActionTypes.SIGN_IN_USER_ERROR:
            return { ...state, loading: false, error: action.payload };
        case UserActionTypes.SIGN_OUT_USER:
            return { ...userInitialState };
        case UserActionTypes.SET_NEW_EMAIL:
            return { ...state, email: action.payload };
        case UserActionTypes.SET_NEW_IMAGE:
            return { ...state, image: action.payload };
        case UserActionTypes.SET_NEW_USERTEXT:
            return { ...state, userText: action.payload };
        case UserActionTypes.SET_NEW_NAME:
            return { ...state, userName: action.payload };
        default:
            return state;
    }
};
