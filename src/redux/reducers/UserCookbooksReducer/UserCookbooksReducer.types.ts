import { CardCookbook } from '../../../interfaces/CardCookbook';

export enum UserCookbooksActionTypes {
	FETCH_USER_COOKBOOKS = 'FETCH_COOKBOOKS',
	FETCH_USER_COOKBOOKS_SUCCESS = 'FETCH_COOKBOOKS_SUCCESS',
	FETCH_USER_COOKBOOKS_ERROR = 'FETCH_COOKBOOKS_ERROR',
}

export interface UserCookbooksState {
	cookbooks: CardCookbook[];
	loading: boolean;
	error: string | null;
}
interface FetchUserCookbooksAction {
	type: UserCookbooksActionTypes.FETCH_USER_COOKBOOKS;
}
interface FetchUserCookbooksSuccessAction {
	type: UserCookbooksActionTypes.FETCH_USER_COOKBOOKS_SUCCESS;
	payload: CardCookbook[];
}
interface FetchUserCookbooksErrorAction {
	type: UserCookbooksActionTypes.FETCH_USER_COOKBOOKS_ERROR;
	payload: string;
}
export type UserCookbooksAction =
	| FetchUserCookbooksAction
	| FetchUserCookbooksSuccessAction
	| FetchUserCookbooksErrorAction;
