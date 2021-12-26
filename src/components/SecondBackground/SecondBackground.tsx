import React from 'react';
import { SecondBackgroundStyled } from './SecondBackground.Styled';

const SecondBackground = (props: React.HTMLProps<HTMLDivElement>) => {
	return <SecondBackgroundStyled>{props.children}</SecondBackgroundStyled>;
};

export default SecondBackground;
