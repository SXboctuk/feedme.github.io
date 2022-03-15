import styled from 'styled-components';
import styles from '../../constants/stylesProperty';

export const AuthStyledBlock = styled.div`
	padding: ${styles.distances.mdPlus};
	height: 100vh;
	width: 100%;
	position: relative;

	@media (max-width: ${styles.screenSize.sm}) {
		padding: 0;
		min-height: 100vh;
		height: 100%;
	}
`;
export const AuthWrapperImageWrapper = styled.div<{ positionX: string }>`
	position: relative;
	height: 100%;
	width: 60%;
	border-radius: ${({ theme }) => theme.borderRadiusImage};

	${({ positionX }) => {
        if (positionX === 'right') {
            return 'margin-right: auto;';
        }
        if (positionX === 'left') {
            return 'margin-left: auto;';
        }
    }}

	overflow: hidden;

	@media (max-width: ${styles.screenSize.lg}) {
		width: 100%;
	}
	@media (max-width: ${styles.screenSize.sm}) {
		border-radius: 0;
	}
`;

export const AuthWrapperImage = styled.img`
	/* position: absolute;
	top: 0; */
	object-fit: cover;
	width: 100%;
	height: 100%;
	min-height: 100vh;
`;

export const AuthWrapperContentWrapper = styled.div<{ positionX: string }>`
	position: absolute;
	border-radius: ${({ theme }) => theme.borderRadiusImage};
	background-color: ${({ theme }) => theme.colors.white};
	box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.08);
	padding: ${styles.distances.xxl} ${styles.distances.xl};
	top: 50%;
	transform: translateY(-50%);
	max-width: 600px;
	width: 100%;
	${({ positionX }) => {
        if (positionX === 'right') {
            return 'left: 50%;';
        }
        if (positionX === 'left') {
            return 'right: 50%;';
        }
    }}
	@media (max-width: ${styles.screenSize.lg}) {
		left: 50%;
		top: 50%;
		transform: translateX(-50%) translateY(-50%);
		width: 90%;
	}
`;
