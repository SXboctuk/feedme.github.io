import React from 'react';
import { ILink } from './Link.Interface';
import { LinkStyled } from './Link.Styled';

const Link = (props: ILink) => {
    return <LinkStyled {...props}>{props.children}</LinkStyled>;
};

export default Link;
