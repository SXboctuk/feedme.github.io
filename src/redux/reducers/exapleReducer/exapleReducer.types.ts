export enum ExapleActionTypes {
	FETCH_DATA = 'FETCH_DATA',
	FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS',
	FETCH_DATA_ERROR = 'FETCH_DATA_ERROR',
}

export interface ExapleState {
	data: any[];
	loading: boolean;
	error: boolean | null;
}
interface FetchDataAction {
	type: ExapleActionTypes.FETCH_DATA;
}
interface FetchDataSuccessAction {
	type: ExapleActionTypes.FETCH_DATA_SUCCESS;
	payload: any[];
}
interface FetchDataErrorAction {
	type: ExapleActionTypes.FETCH_DATA_ERROR;
	payload: string;
}
export type ExapleAction =
	| FetchDataAction
	| FetchDataSuccessAction
	| FetchDataErrorAction;
