import styled from 'styled-components';
import { backgroundProps } from './Background.Interface';

export const BackgroundStyled = styled.div<backgroundProps>`
	background-color: ${({ backgroundColor }) => backgroundColor};
`;
