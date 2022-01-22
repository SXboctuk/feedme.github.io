import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAction } from '../../hooks/useAction';
import SIgnIn from './SIgnIn';

const SignInContainer = () => {
	// const { signInUser } = useAction();

	// const navigate = useNavigate();

	useEffect(() => {
		// signInUser('UserName', 'UserPassword');
		// navigate(-1);
	}, []);
	const [loginError, setLoginError] = useState<string>('');
	const [passwordError, setPasswordError] = useState<string>('');
	const handlerLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
		console.log(e);
	};

	const handlerPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
		console.log(e);
	};
	return (
		<SIgnIn
			handlerLogin={handlerLogin}
			handlerPassword={handlerPassword}
			loginError={loginError}
			passwordError={passwordError}
		/>
	);
};

export default SignInContainer;
