import React, { useState } from 'react';
import SignUp from '.';

const SignUpContainer = () => {
	const [loginError, setLoginError] = useState<string>('');
	const [passwordError, setPasswordError] = useState<string>('');
	const [passwordConfirmError, setPasswordConfirmError] =
		useState<string>('');
	const [loginValue, setLoginValue] = useState<string>('');
	const [passwordValue, setPasswordValue] = useState<string>('');
	const [passwordConfirmValue, setPasswordConfirmValue] =
		useState<string>('');

	const handlerLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
		console.log(e);
	};

	const handlerPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
		console.log(e);
	};
	const handlerPasswordConfirm = (e: React.ChangeEvent<HTMLInputElement>) => {
		console.log(e);
	};
	const handlerFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		console.log(e);
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
