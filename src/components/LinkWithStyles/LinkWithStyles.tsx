import React from 'react';
import { ILink } from './LinkWithStyles.Interface';
import { LinkStyled } from './LinkWithStyles.Styled';

const LinkWithStyles = (props: ILink) => {
	return <LinkStyled {...props}>{props.children}</LinkStyled>;
};

export default LinkWithStyles;
