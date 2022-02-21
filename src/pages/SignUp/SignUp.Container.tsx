import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SignUp from '.';
import { signUp } from '../../api/Feedme.Api';
import { errorMassage } from '../../constants/errorMassage';
import { regexString } from '../../constants/regex';
import { routePath } from '../../constants/routePath';
import { useAction } from '../../hooks/useAction';
import { useTypedSelector } from '../../hooks/useTypedSelector';

const SignUpContainer = () => {
	const [loginError, setLoginError] = useState<string>('');
	const [usernameError, setUsernameError] = useState<string>('');
	const [passwordError, setPasswordError] = useState<string>('');
	const [passwordConfirmError, setPasswordConfirmError] =
		useState<string>('');
	const [loginValue, setLoginValue] = useState<string>('');
	const [usernameValue, setUsernameValue] = useState<string>('');
	const [passwordValue, setPasswordValue] = useState<string>('');
	const [passwordConfirmValue, setPasswordConfirmValue] =
		useState<string>('');

	const [responseMessage, setResponseMessage] = useState<string>('');

	const navigate = useNavigate();
	const { signInUser } = useAction();
	const { isAuth } = useTypedSelector((state) => state.userReducer);
	useEffect(() => {
		if (isAuth) {
			navigate(routePath.HOMEPAGE);
		}
	}, [isAuth]);

	const handlerLogin = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		if (e.target.value.match(regexString.IS_VALID_STRING_EMAIL) !== null) {
			setLoginValue(e.target.value);
			setLoginError('');
		}
	};
	const handlerUsername = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		if (e.target.value.match(regexString.IS_VALID_STRING) !== null) {
			setUsernameValue(e.target.value);
			setUsernameError('');
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
	const handlerFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		let error = false;
		if (loginValue.match(regexString.IS_STRING_SHORT) === null) {
			setLoginError(errorMassage.IS_SHORT);
			error = true;
		}
		if (usernameValue.match(regexString.IS_STRING_SHORT) === null) {
			setUsernameError(errorMassage.IS_SHORT);
			error = true;
		}
		if (passwordValue.match(regexString.IS_STRING_SHORT) === null) {
			setPasswordError(errorMassage.IS_SHORT);
			error = true;
		}
		if (passwordConfirmValue.match(regexString.IS_STRING_SHORT) === null) {
			setPasswordConfirmError(errorMassage.IS_SHORT);
			error = true;
		}
		if (passwordConfirmValue !== passwordValue) {
			setPasswordConfirmError(errorMassage.PASSWORD_MISSMATCH);
			error = true;
		}

		if (!error) {
			const res = await signUp(
				loginValue,
				usernameValue,
				passwordValue,
				passwordConfirmValue,
			);
			if (res.ok) {
				signInUser(res);
			} else {
				setResponseMessage((await res.json()).message);
			}
		}
		return;
	};
	return (
		<SignUp
			handlerLogin={handlerLogin}
			handlerUsername={handlerUsername}
			handlerPassword={handlerPassword}
			handlerPasswordConfirm={handlerPasswordConfirm}
			loginError={loginError}
			usernameError={usernameError}
			passwordError={passwordError}
			passwordConfirmError={passwordConfirmError}
			handlerFormSubmit={handlerFormSubmit}
			loginValue={loginValue}
			usernameValue={usernameValue}
			passwordValue={passwordValue}
			passwordConfirmValue={passwordConfirmValue}
		/>
	);
};

export default SignUpContainer;
