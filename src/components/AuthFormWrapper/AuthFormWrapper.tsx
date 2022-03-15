import React from 'react';
import Logo from '../Logo';
import {
    AuthFormTitle,
    AuthFormUnderTitleBlock,
    AuthFormUnderTitleLink,
    AuthFormUnderTitleText,
    AuthFormWrapperStyled,
} from './AuthFormWrapper.Styled';

const AuthFormWrapper = (props: {
	children: React.ReactNode | React.ReactNode[];
	title: string;
	underTitleText: string;
	linkText: string;
	linkPath: string;
}) => {
    const { children, title, underTitleText, linkText, linkPath } = props;

    return (
        <AuthFormWrapperStyled>
            <Logo fontSize="28px" svgSize={30} />
            <AuthFormTitle>{title}</AuthFormTitle>
            <AuthFormUnderTitleBlock>
                <AuthFormUnderTitleText>
                    {underTitleText}
                </AuthFormUnderTitleText>{' '}
                <AuthFormUnderTitleLink to={linkPath}>
                    {linkText}
                </AuthFormUnderTitleLink>
            </AuthFormUnderTitleBlock>
            {children}
        </AuthFormWrapperStyled>
    );
};

export default AuthFormWrapper;
