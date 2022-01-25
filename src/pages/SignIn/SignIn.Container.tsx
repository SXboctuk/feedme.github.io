import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { routePath } from '../../constants/routePath';
import { useAction } from '../../hooks/useAction';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import SIgnIn from './SIgnIn';

const SignInContainer = () => {
	const { signInUser } = useAction();

	const navigate = useNavigate();
	const { isAuth } = useTypedSelector((state) => state.userReducer);
	useEffect(() => {
		if (isAuth) {
			navigate(routePath.HOMEPAGE);
		}
	}, [isAuth]);

	const [loginError, setLoginError] = useState<string>('');
	const [passwordError, setPasswordError] = useState<string>('');
	const [passwordValue, setPasswordValue] = useState<string>('');
	const [loginValue, setLoginValue] = useState<string>('');

	const handlerLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
		console.log(e);
		setLoginValue(e.target.value);
	};

	const handlerPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
		console.log(e);
		setPasswordValue(e.target.value);
	};

	const handlerFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		console.log(e);
		e.preventDefault();
		signInUser('123', '321');
	};
	return (
		<SIgnIn
			handlerLogin={handlerLogin}
			handlerPassword={handlerPassword}
			handlerFormSubmit={handlerFormSubmit}
			loginError={loginError}
			passwordError={passwordError}
			loginValue={loginValue}
			passwordValue={passwordValue}
		/>
	);
};

export default SignInContainer;
