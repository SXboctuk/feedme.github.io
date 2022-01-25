export enum UserActionTypes {
	SIGN_IN_USER = 'SIGN_IN_USER',
	SIGN_IN_USER_SUCCESS = 'SIGN_IN_USER_SUCCESS',
	SIGN_IN_USER_ERROR = 'SIGN_IN_USER_ERROR',
	SIGN_OUT_USER = 'SIGN_OUT',
}

export interface UserState {
	isAuth: boolean;
	userName: string;
	userText: string;
	email: string;
	image: string;
	id: string;
	role: string;
	loading: boolean;
	error: string | null;
}
interface SignInAction {
	type: UserActionTypes.SIGN_IN_USER;
}
interface SignInSuccessAction {
	type: UserActionTypes.SIGN_IN_USER_SUCCESS;
	payload: {
		userName: string;
		userText: string;
		email: string;
		image: string;
		id: string;
		role: string;
	};
}
interface SignInErrorAction {
	type: UserActionTypes.SIGN_IN_USER_ERROR;
	payload: string;
}
interface SignOutErrorAction {
	type: UserActionTypes.SIGN_OUT_USER;
}
export type UserAction =
	| SignInAction
	| SignInSuccessAction
	| SignInErrorAction
	| SignOutErrorAction;
