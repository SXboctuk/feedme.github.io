import React from 'react';
import {
	ProfileHeaderBlock,
	ProfileHeaderHover,
	ProfileHeaderHoverBackground,
	ProfileHeaderImage,
	ProfileHeaderImageWrapper,
	ProfileHeaderSvgCamera,
	ProfileHeaderTextBlock,
	ProfileHeaderUserName,
	ProfileHeaderUserText,
	ProfileHeaderWrapper,
} from './ProfileHeader.Styled';

const ProfileHeader = (props: {
	imageSrc: string;
	userName: string;
	userText: string;
	handlerPhotoClick?: (e: React.MouseEvent) => void;
}) => {
	const { imageSrc, userName, userText, handlerPhotoClick } = props;
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
					<ProfileHeaderUserText>{userText}</ProfileHeaderUserText>
				</ProfileHeaderTextBlock>
			</ProfileHeaderWrapper>
		</ProfileHeaderBlock>
	);
};

export default ProfileHeader;
