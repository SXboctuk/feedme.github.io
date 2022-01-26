import {
	UserCookbooksState,
	UserCookbooksAction,
	UserCookbooksActionTypes,
} from './UserCookbooksReducer.types';

const userCookbooksInitialState: UserCookbooksState = {
	cookbooks: [],
	loading: false,
	error: null,
};

export const userCookbooksReducer = (
	state = userCookbooksInitialState,
	action: UserCookbooksAction,
): UserCookbooksState => {
	switch (action.type) {
		case UserCookbooksActionTypes.FETCH_USER_COOKBOOKS:
			return { ...state, loading: true, error: null };
		case UserCookbooksActionTypes.FETCH_USER_COOKBOOKS_SUCCESS:
			return { loading: false, error: null, cookbooks: action.payload };
		case UserCookbooksActionTypes.FETCH_USER_COOKBOOKS_ERROR:
			return { ...state, loading: false, error: action.payload };
		default:
			return state;
	}
};
