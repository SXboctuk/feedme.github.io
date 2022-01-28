import React, { useState } from 'react';
import SignUp from '.';
import { errorMassage } from '../../constants/errorMassage';
import { regexString } from '../../constants/regex';

const SignUpContainer = () => {
	const [loginError, setLoginError] = useState<string>('');
	const [passwordError, setPasswordError] = useState<string>('');
	const [passwordConfirmError, setPasswordConfirmError] =
		useState<string>('');
	const [loginValue, setLoginValue] = useState<string>('');
	const [passwordValue, setPasswordValue] = useState<string>('');
	const [passwordConfirmValue, setPasswordConfirmValue] =
		useState<string>('');

	const handlerLogin = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		if (e.target.value.match(regexString.IS_VALID_STRING_EMAIL) !== null) {
			setLoginValue(e.target.value);
			setLoginError('');
		}
	};

	const handlerPassword = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		if (e.target.value.match(regexString.IS_PASSWORD) !== null) {
			setPasswordValue(e.target.value);
			setPasswordError('');
			setPasswordConfirmError('');
		}
	};
	const handlerPasswordConfirm = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		if (e.target.value.match(regexString.IS_PASSWORD) !== null) {
			setPasswordConfirmValue(e.target.value);
			setPasswordError('');
			setPasswordConfirmError('');
		}
	};
	const handlerFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		let error = false;
		if (loginValue.match(regexString.IS_STRING_SHORT)) {
			setLoginError(errorMassage.IS_SHORT);
			error = true;
		}
		if (passwordValue.match(regexString.IS_STRING_SHORT)) {
			setPasswordError(errorMassage.IS_SHORT);
			error = true;
		}
		if (passwordConfirmValue.match(regexString.IS_STRING_SHORT)) {
			setPasswordConfirmError(errorMassage.IS_SHORT);
			error = true;
		}
		if (passwordConfirmValue !== passwordValue) {
			setPasswordConfirmError(errorMassage.PASSWORD_MISSMATCH);
			error = true;
		}

		if (!error) {
			//post to server
		}
		return;
	};
	return (
		<SignUp
			handlerLogin={handlerLogin}
			handlerPassword={handlerPassword}
			handlerPasswordConfirm={handlerPasswordConfirm}
			loginError={loginError}
			passwordError={passwordError}
			passwordConfirmError={passwordConfirmError}
			handlerFormSubmit={handlerFormSubmit}
			loginValue={loginValue}
			passwordValue={passwordValue}
			passwordConfirmValue={passwordConfirmValue}
		/>
	);
};

export default SignUpContainer;
