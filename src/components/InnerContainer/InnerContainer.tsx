import React from 'react';
import { InnerContainerStyled } from './InnerContainer.Styled';

const InnerContainer = (props: React.HTMLProps<HTMLDivElement>) => {
	const { children } = props;
	return <InnerContainerStyled>{children}</InnerContainerStyled>;
};

export default InnerContainer;
