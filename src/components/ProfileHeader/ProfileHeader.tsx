import React, { useState } from 'react';
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
	handlerPhotoClick?: (e: React.MouseEvent) => void;
	changeUserText?: true;
}) => {
	const { t } = useTranslation();
	const { imageSrc, userName, userText, handlerPhotoClick, changeUserText } =
		props;
	const [showInput, setShowInput] = useState(false);
	const [value, setValue] = useState(userText);
	const [errorMessage, setErrorMessage] = useState('');
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
	return (
		<ProfileHeaderBlock>
			<ProfileHeaderWrapper>
				<ProfileHeaderImageWrapper onClick={handlerPhotoClick}>
					<ProfileHeaderImage src={imageSrc} />
					{handlerPhotoClick ? (
						<ProfileHeaderHover>
							<ProfileHeaderHoverBackground />
							<ProfileHeaderSvgCamera />
						</ProfileHeaderHover>
					) : null}
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
							{changeUserText ? (
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
							{changeUserText ? (
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
