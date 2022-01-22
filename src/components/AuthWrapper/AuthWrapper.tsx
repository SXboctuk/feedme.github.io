import React from 'react';
import {
	AuthStyledBlock,
	AuthWrapperContentWrapper,
	AuthWrapperImage,
	AuthWrapperImageWrapper,
} from './AuthWrapper.Styled';

const AuthWrapper = (props: {
	imageSrc: string;
	positionX: 'right' | 'left';
	children: React.ReactNode;
}) => {
	const { imageSrc, positionX, children } = props;
	return (
		<AuthStyledBlock>
			<AuthWrapperImageWrapper positionX={positionX}>
				<AuthWrapperImage src={imageSrc} />
			</AuthWrapperImageWrapper>
			<AuthWrapperContentWrapper positionX={positionX}>
				{children}
			</AuthWrapperContentWrapper>
		</AuthStyledBlock>
	);
};

export default AuthWrapper;
