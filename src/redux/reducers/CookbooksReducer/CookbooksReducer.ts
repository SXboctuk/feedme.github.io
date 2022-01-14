import {
	CookbooksState,
	CookbooksAction,
	CookbooksActionTypes,
} from './CookbooksReducer.types';

const cookbooksInitialState: CookbooksState = {
	cookbooks: [],
	loading: false,
	error: null,
};

export const cookbooksReducer = (
	state = cookbooksInitialState,
	action: CookbooksAction,
): CookbooksState => {
	switch (action.type) {
		case CookbooksActionTypes.FETCH_COOKBOOKS:
			return { ...state, loading: true, error: null };
		case CookbooksActionTypes.FETCH_COOKBOOKS_SUCCESS:
			return { loading: false, error: null, cookbooks: action.payload };
		case CookbooksActionTypes.FETCH_COOKBOOKS_ERROR:
			return { ...state, loading: false, error: action.payload };
		default:
			return state;
	}
};
