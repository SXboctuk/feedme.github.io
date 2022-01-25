import { Dispatch } from 'redux';
import {
	UserAction,
	UserActionTypes,
} from '../reducers/UserReducer/UserReducer.types';

export const signInUser = (login: string, password: string) => {
	return async (dispatch: Dispatch<UserAction>) => {
		try {
			dispatch({ type: UserActionTypes.SIGN_IN_USER });

			const data = {
				userName: `${login + password}`,
				id: '123',
				role: 'user',
				userText:
					'USER INFO is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
				email: 'user@gmail.com',
				image: '/public/assets/images/SignUp.jpg',
			};

			setTimeout(() => {
				dispatch({
					type: UserActionTypes.SIGN_IN_USER_SUCCESS,
					payload: data,
				});
			}, 1500);
		} catch (e) {
			dispatch({
				type: UserActionTypes.SIGN_IN_USER_ERROR,
				payload: 'Login error',
			});
		}
	};
};

export const signOutUser = () => {
	return (dispatch: Dispatch<UserAction>) => {
		dispatch({ type: UserActionTypes.SIGN_OUT_USER });
	};
};
