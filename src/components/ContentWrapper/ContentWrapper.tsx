import React from 'react';
import { ContentWrapperStyled } from './ConterntWrapper.Styled';

const ContentWrapper = (props: React.HTMLProps<HTMLDivElement>) => {
    return <ContentWrapperStyled>{props.children}</ContentWrapperStyled>;
};

export default ContentWrapper;
