import { CardCookbook } from '../../../interfaces/CardCookbook';

export enum CookbooksActionTypes {
	FETCH_COOKBOOKS = 'FETCH_COOKBOOKS',
	FETCH_COOKBOOKS_SUCCESS = 'FETCH_COOKBOOKS_SUCCESS',
	FETCH_COOKBOOKS_ERROR = 'FETCH_COOKBOOKS_ERROR',
}

export interface CookbooksState {
	cookbooks: CardCookbook[];
	loading: boolean;
	error: string | null;
}
interface FetchCookbooksAction {
	type: CookbooksActionTypes.FETCH_COOKBOOKS;
}
interface FetchCookbooksSuccessAction {
	type: CookbooksActionTypes.FETCH_COOKBOOKS_SUCCESS;
	payload: CardCookbook[];
}
interface FetchCookbooksErrorAction {
	type: CookbooksActionTypes.FETCH_COOKBOOKS_ERROR;
	payload: string;
}
export type CookbooksAction =
	| FetchCookbooksAction
	| FetchCookbooksSuccessAction
	| FetchCookbooksErrorAction;
