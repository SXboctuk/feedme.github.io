import React from 'react';
import LinkWithStyles from '../../../../components/LinkWithStyles';
import Container from '../../../../components/shared/Container';
import styles from '../../../../constants/stylesProperty';
import MainScreenSearch from '../MainScreenSearch';
import {
	BorderWrapper,
	MainShadow,
	MainImage,
	MainContent,
	MainTagLine,
	MainLandingLinksBlock,
} from './MainScreen.Styled';

const MainScreen = () => {
	return (
		<Container maxWidth={styles.screenSize.xl}>
			<BorderWrapper>
				<MainImage
					src={
						'../../../../../public/assets/images/MainBackground.png'
					}
				/>
				<MainShadow />
				<Container maxWidth={styles.screenSize.lg}>
					<MainContent>
						<MainTagLine>
							Find Recipies and Create Your Favourite Cookbooks
						</MainTagLine>
						<MainScreenSearch />

						<MainLandingLinksBlock>
							<LinkWithStyles
								to={'#'}
								color={styles.colors.white}
							>
								Vegeterian
							</LinkWithStyles>
							<LinkWithStyles
								to={'#'}
								color={styles.colors.white}
							>
								Mexican
							</LinkWithStyles>
							<LinkWithStyles
								to={'#'}
								color={styles.colors.white}
							>
								Greece Kitchen
							</LinkWithStyles>
							<LinkWithStyles
								to={'#'}
								color={styles.colors.white}
							>
								Italy Pizza
							</LinkWithStyles>
							<LinkWithStyles
								to={'#'}
								color={styles.colors.white}
							>
								Philippines
							</LinkWithStyles>
							<LinkWithStyles
								to={'#'}
								color={styles.colors.white}
							>
								Japan Sushi
							</LinkWithStyles>
						</MainLandingLinksBlock>
					</MainContent>
				</Container>
			</BorderWrapper>
		</Container>
	);
};

export default MainScreen;
