import React from 'react';
import { backgroundProps } from './Background.Interface';
import { BackgroundStyled } from './Background.Styled';

const Background = (props: backgroundProps) => {
	return (
		<BackgroundStyled backgroundColor={props.backgroundColor}>
			{props.children}
		</BackgroundStyled>
	);
};

export default Background;
