import React, { createRef, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { errorMassage } from '../../constants/errorMassage';
import { regexString } from '../../constants/regex';
import {
	ProfileButton,
	ProfileButtonWrapper,
	ProfileHeaderBlock,
	ProfileHeaderError,
	ProfileHeaderHover,
	ProfileHeaderHoverBackground,
	ProfileHeaderImage,
	ProfileHeaderImageWrapper,
	ProfileHeaderSvgCamera,
	ProfileHeaderTextBlock,
	ProfileHeaderUserName,
	ProfileHeaderUserText,
	ProfileHeaderWrapper,
	ProfileTextarea,
} from './ProfileHeader.Styled';

const ProfileHeader = (props: {
	imageSrc: string;
	userName: string;
	userText: string;
	isOwner: boolean;
}) => {
	const { t } = useTranslation();
	const { imageSrc, userName, userText, isOwner } = props;
	const [showInput, setShowInput] = useState(false);
	const [value, setValue] = useState(userText);
	const [errorMessage, setErrorMessage] = useState('');
	const [uploadImage, setUploadImage] = useState<File>();

	const refInputUploadFile = createRef<HTMLInputElement>();
	const handlerUserTextarea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		if (e.target.value.match(regexString.IS_VALID_STRING)) {
			setValue(e.target.value);
			setErrorMessage('');
		}
	};
	const handlerSubmit = () => {
		let error = false;
		if (value.match(regexString.IS_STRING_VALID_SHORT_LONG)) {
			setErrorMessage(errorMassage.IS_SHORT);
			error = true;
		}

		if (error === true) {
			alert('error');
		} else {
			alert('new userText');
		}
	};
	const handlerPhotoClick = () => {
		refInputUploadFile.current?.click();
	};
	const handlerUploadInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.files) {
			setUploadImage(e.target.files[0]);
		}
	};
	useEffect(() => {
		if (isOwner && uploadImage !== undefined)
			alert('get New photo and set it' + uploadImage?.size);
	}, [uploadImage]);

	return (
		<ProfileHeaderBlock>
			<ProfileHeaderWrapper>
				<ProfileHeaderImageWrapper
					onClick={isOwner ? handlerPhotoClick : undefined}
				>
					<ProfileHeaderImage src={imageSrc} />
					{isOwner ? (
						<ProfileHeaderHover>
							<ProfileHeaderHoverBackground />
							<ProfileHeaderSvgCamera />
						</ProfileHeaderHover>
					) : null}
					<input
						ref={refInputUploadFile}
						type={'file'}
						onChange={handlerUploadInput}
						accept="image/*"
						hidden
					></input>
				</ProfileHeaderImageWrapper>

				<ProfileHeaderTextBlock>
					<ProfileHeaderUserName>{userName}</ProfileHeaderUserName>
					{showInput ? (
						<>
							<ProfileTextarea
								value={value}
								onChange={handlerUserTextarea}
							/>
							<ProfileHeaderError>
								{errorMessage}
							</ProfileHeaderError>
							{isOwner ? (
								<ProfileButtonWrapper>
									<ProfileButton onClick={handlerSubmit}>
										{t('confirm')}
									</ProfileButton>
									<ProfileButton
										onClick={() => setShowInput(false)}
									>
										{t('cancel')}
									</ProfileButton>
								</ProfileButtonWrapper>
							) : null}
						</>
					) : (
						<>
							<ProfileHeaderUserText>
								{userText}
							</ProfileHeaderUserText>
							{isOwner ? (
								<ProfileButton
									onClick={() => setShowInput(true)}
								>
									{t('edit')}
								</ProfileButton>
							) : null}
						</>
					)}
				</ProfileHeaderTextBlock>
			</ProfileHeaderWrapper>
		</ProfileHeaderBlock>
	);
};

export default ProfileHeader;
