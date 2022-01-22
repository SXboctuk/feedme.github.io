import React, { useState } from 'react';
import SignUp from '.';

const SignUpContainer = () => {
	const [loginError, setLoginError] = useState<string>('');
	const [passwordError, setPasswordError] = useState<string>('');
	const [passwordConfirmError, setPasswordConfirmError] =
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
	return (
		<SignUp
			handlerLogin={handlerLogin}
			handlerPassword={handlerPassword}
			handlerPasswordConfirm={handlerPasswordConfirm}
			loginError={loginError}
			passwordError={passwordError}
			passwordConfirmError={passwordConfirmError}
		/>
	);
};

export default SignUpContainer;
