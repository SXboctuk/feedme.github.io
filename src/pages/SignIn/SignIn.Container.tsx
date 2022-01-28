import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { errorMassage } from '../../constants/errorMassage';
import { regexString } from '../../constants/regex';
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

		if (!error) {
			signInUser('123', '321');
			//check res from server
		}
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
