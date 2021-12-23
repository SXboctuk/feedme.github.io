import React from 'react';
import GlobalStylesStyled from './GlobalStyles.Styled';

const GlobalStyles = (props: React.HTMLProps<HTMLDivElement>) => {
	return (
		<>
			<GlobalStylesStyled />
			{props.children}
		</>
	);
};

export default GlobalStyles;
