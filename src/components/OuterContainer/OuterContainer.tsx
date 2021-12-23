import React from 'react';
import { OuterContainerStyled } from './OuterContainer.Styled';

const OuterContainer = (props: React.HTMLProps<HTMLDivElement>) => {
	return <OuterContainerStyled>{props.children}</OuterContainerStyled>;
};

export default OuterContainer;
