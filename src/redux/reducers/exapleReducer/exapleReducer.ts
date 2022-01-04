import {
	ExapleState,
	ExapleAction,
	ExapleActionTypes,
} from './exapleReducer.types';

const exapleInitialState: ExapleState = {
	data: [],
	loading: false,
	error: null,
};

export const exapleReducer = (
	state = exapleInitialState,
	action: ExapleAction,
) => {
	switch (action.type) {
		case ExapleActionTypes.FETCH_DATA:
			return { loading: true, error: null, data: [] };
		case ExapleActionTypes.FETCH_DATA_SUCCESS:
			return { loading: true, error: null, data: action.payload };
		case ExapleActionTypes.FETCH_DATA_ERROR:
			return { loading: true, error: action.payload, data: [] };
		default:
			return state;
	}
};
