import {
    UserRecepiesState,
    UserRecepiesAction,
    UserRecepiesActionTypes,
} from './UserRecepiesReducer.types';

const userRecepiesInitialState: UserRecepiesState = {
    recepies: [],
    loading: false,
    error: null,
};

export const userRecepiesReducer = (
    state = userRecepiesInitialState,
    action: UserRecepiesAction,
): UserRecepiesState => {
    switch (action.type) {
    case UserRecepiesActionTypes.FETCH_USER_RECEPIES:
        return { ...state, loading: true, error: null };
    case UserRecepiesActionTypes.FETCH_USER_RECEPIES_SUCCESS:
        return { loading: false, error: null, recepies: action.payload };
    case UserRecepiesActionTypes.FETCH_USER_RECEPIES_ERROR:
        return { ...state, loading: false, error: action.payload };
    default:
        return state;
    }
};
