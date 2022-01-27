import React, { createRef, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProfileSettings from '.';
import { errorMassage } from '../../constants/errorMassage';
import { regexString } from '../../constants/regex';
import { useTypedSelector } from '../../hooks/useTypedSelector';

const ProfileSettingsContainer = () => {
	const params = useParams();
	const user = useTypedSelector((state) => state.userReducer);
	const refInputUploadFile = createRef<HTMLInputElement>();

	const [uploadImage, setUploadImage] = useState<File>();
	const [errorName, setErrorName] = useState<string>('');
	const [errorEmail, setErrorEmail] = useState<string>('');
	const [errorPassword, setErrorPassword] = useState<string>('');

	const handlerUploadInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.files) {
			setUploadImage(e.target.files[0]);
		}
	};
	const handlerPhotoClick = () => {
		refInputUploadFile.current?.click();
	};
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
	useEffect(() => {
		if (uploadImage) {
			alert('new image');
		}
		//fetch new userimage
	}, [uploadImage]);
	const isOwner = params.id === user.id;
	return (
		<ProfileSettings
			refInputUploadFile={refInputUploadFile}
			isOwner={isOwner}
			user={user}
			handlerUploadInput={handlerUploadInput}
			handlerPhotoClick={handlerPhotoClick}
			handlerSaveName={handlerSaveName}
			handlerSaveEmail={handlerSaveEmail}
			handlerSavePassword={handlerSavePassword}
			handlerChangeName={handlerChangeName}
			handlerChangeEmail={handlerChangeEmail}
			handlerChangePassword={handlerChangePassword}
			errorName={errorName}
			errorEmail={errorEmail}
			errorPassword={errorPassword}
		/>
	);
};

export default ProfileSettingsContainer;
