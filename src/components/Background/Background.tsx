import React from 'react';
import { Outlet } from 'react-router-dom';
import { backgroundProps } from './Background.Interface';
import { BackgroundStyled } from './Background.Styled';

const Background = (props: backgroundProps) => {
    return (
        <BackgroundStyled backgroundColor={props.backgroundColor}>
            {props.children}
            <Outlet />
        </BackgroundStyled>
    );
};

export default Background;
