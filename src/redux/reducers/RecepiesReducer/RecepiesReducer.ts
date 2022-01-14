import {
	RecepiesState,
	RecepiesAction,
	RecepiesActionTypes,
} from './RecepiesReducer.types';

const recepiesInitialState: RecepiesState = {
	recepies: [],
	loading: false,
	error: null,
};

export const recepiesReducer = (
	state = recepiesInitialState,
	action: RecepiesAction,
): RecepiesState => {
	switch (action.type) {
		case RecepiesActionTypes.FETCH_RECEPIES:
			return { ...state, loading: true, error: null };
		case RecepiesActionTypes.FETCH_RECEPIES_SUCCESS:
			return { loading: false, error: null, recepies: action.payload };
		case RecepiesActionTypes.FETCH_RECEPIES_ERROR:
			return { ...state, loading: false, error: action.payload };
		default:
			return state;
	}
};
