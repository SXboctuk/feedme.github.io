import { CardRecepie } from '../../../interfaces/CardRecipe';

export enum UserRecepiesActionTypes {
	FETCH_USER_RECEPIES = 'FETCH_RECEPIES',
	FETCH_USER_RECEPIES_SUCCESS = 'FETCH_RECEPIES_SUCCESS',
	FETCH_USER_RECEPIES_ERROR = 'FETCH_RECEPIES_ERROR',
}

export interface UserRecepiesState {
	recepies: CardRecepie[];
	loading: boolean;
	error: string | null;
}
interface FetchUserRecepiesAction {
	type: UserRecepiesActionTypes.FETCH_USER_RECEPIES;
}
interface FetchUserRecepiesSuccessAction {
	type: UserRecepiesActionTypes.FETCH_USER_RECEPIES_SUCCESS;
	payload: CardRecepie[];
}
interface FetchUserRecepiesErrorAction {
	type: UserRecepiesActionTypes.FETCH_USER_RECEPIES_ERROR;
	payload: string;
}
export type UserRecepiesAction =
	| FetchUserRecepiesAction
	| FetchUserRecepiesSuccessAction
	| FetchUserRecepiesErrorAction;
