import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ProfileSettings from '.';
import { errorMassage } from '../../constants/errorMassage';
import { regexString } from '../../constants/regex';
import { useAction } from '../../hooks/useAction';
import { useTypedSelector } from '../../hooks/useTypedSelector';

const ProfileSettingsContainer = () => {
	const params = useParams();
	const { signOutUser } = useAction();
	const navigate = useNavigate();
	const user = useTypedSelector((state) => state.userReducer);

	const [errorName, setErrorName] = useState<string>('');
	const [errorEmail, setErrorEmail] = useState<string>('');
	const [errorPassword, setErrorPassword] = useState<string>('');

	const handlerSaveName = (str: string) => {
		if (str.match(regexString.IS_STRING_SHORT) === null) {
			setErrorName(errorMassage.IS_SHORT);
			return;
		}

		if (errorName.length === 0) {
			alert('new Name');
		}
		//posr new user name
	};
	const handlerSaveEmail = (str: string) => {
		if (str.match(regexString.IS_STRING_SHORT) === null) {
			setErrorEmail(errorMassage.IS_SHORT);
			return;
		}

		if (str.match(regexString.IS_EMAIL) === null) {
			setErrorEmail(errorMassage.INVALID_EMAIL);
			return;
		}

		if (errorName.length === 0) {
			alert('new Email');
		}
		//post new user email
	};
	const handlerSavePassword = (str: string) => {
		if (str.match(regexString.IS_STRING_SHORT) === null) {
			setErrorPassword(errorMassage.IS_SHORT);
			return;
		}

		if (errorName.length === 0) {
			alert('new Password');
		}
		//post new user password
	};
	const handlerChangeName = () => {
		setErrorName('');
	};
	const handlerChangeEmail = () => {
		setErrorEmail('');
	};
	const handlerChangePassword = () => {
		setErrorPassword('');
	};

	const handlerDeleteUser = () => {
		//send delete get resp
		signOutUser();
		navigate('/');
	};

	const isOwner = params.id === user.id || false;
	return (
		<ProfileSettings
			isOwner={isOwner}
			user={user}
			handlerSaveName={handlerSaveName}
			handlerSaveEmail={handlerSaveEmail}
			handlerSavePassword={handlerSavePassword}
			handlerChangeName={handlerChangeName}
			handlerChangeEmail={handlerChangeEmail}
			handlerChangePassword={handlerChangePassword}
			errorName={errorName}
			errorEmail={errorEmail}
			errorPassword={errorPassword}
			handlerDeleteUser={handlerDeleteUser}
		/>
	);
};

export default ProfileSettingsContainer;
