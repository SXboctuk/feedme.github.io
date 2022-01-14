import { CardRecepie } from '../../../interfaces/Recepie';

export enum RecepiesActionTypes {
	FETCH_RECEPIES = 'FETCH_RECEPIES',
	FETCH_RECEPIES_SUCCESS = 'FETCH_RECEPIES_SUCCESS',
	FETCH_RECEPIES_ERROR = 'FETCH_RECEPIES_ERROR',
}

export interface RecepiesState {
	recepies: CardRecepie[];
	loading: boolean;
	error: string | null;
}
interface FetchDataAction {
	type: RecepiesActionTypes.FETCH_RECEPIES;
}
interface FetchDataSuccessAction {
	type: RecepiesActionTypes.FETCH_RECEPIES_SUCCESS;
	payload: CardRecepie[];
}
interface FetchDataErrorAction {
	type: RecepiesActionTypes.FETCH_RECEPIES_ERROR;
	payload: string;
}
export type RecepiesAction =
	| FetchDataAction
	| FetchDataSuccessAction
	| FetchDataErrorAction;
