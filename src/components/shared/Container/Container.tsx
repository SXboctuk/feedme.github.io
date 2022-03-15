import React from 'react';
import { containerProps } from './Container.Interface';
import { ContainerStyled } from './Container.Styled';

const Container = (props: containerProps) => {
    const { children, maxWidth } = props;
    return <ContainerStyled maxWidth={maxWidth}>{children}</ContainerStyled>;
};

export default Container;
