import React from 'react';
import Link from '../../../../components/shared/Link';
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
							<Link to={'#'} color={styles.colors.white}>
								Vegeterian
							</Link>
							<Link to={'#'} color={styles.colors.white}>
								Mexican
							</Link>
							<Link to={'#'} color={styles.colors.white}>
								Greece Kitchen
							</Link>
							<Link to={'#'} color={styles.colors.white}>
								Italy Pizza
							</Link>
							<Link to={'#'} color={styles.colors.white}>
								Philippines
							</Link>
							<Link to={'#'} color={styles.colors.white}>
								Japan Sushi
							</Link>
						</MainLandingLinksBlock>
					</MainContent>
				</Container>
			</BorderWrapper>
		</Container>
	);
};

export default MainScreen;
