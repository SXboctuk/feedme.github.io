import React from 'react';
import InnerContainer from '../../../../components/InnerContainer';
import LinkWithStyles from '../../../../components/LinkWithStyles';
import OuterContainer from '../../../../components/OuterContainer';
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
		<OuterContainer>
			<BorderWrapper>
				<MainImage
					src={
						'../../../../../public/assets/images/MainBackground.png'
					}
				/>
				<MainShadow />
				<InnerContainer>
					<MainContent>
						<MainTagLine>
							Find Recipies and Create Your Favourite Cookbooks
						</MainTagLine>
						<MainScreenSearch />

						<MainLandingLinksBlock>
							<LinkWithStyles to={'#'} color="#FFFFFF">
								Vegeterian
							</LinkWithStyles>
							<LinkWithStyles to={'#'} color="#FFFFFF">
								Mexican
							</LinkWithStyles>
							<LinkWithStyles to={'#'} color="#FFFFFF">
								Greece Kitchen
							</LinkWithStyles>
							<LinkWithStyles to={'#'} color="#FFFFFF">
								Italy Pizza
							</LinkWithStyles>
							<LinkWithStyles to={'#'} color="#FFFFFF">
								Philippines
							</LinkWithStyles>
							<LinkWithStyles to={'#'} color="#FFFFFF">
								Japan Sushi
							</LinkWithStyles>
						</MainLandingLinksBlock>
					</MainContent>
				</InnerContainer>
			</BorderWrapper>
		</OuterContainer>
	);
};

export default MainScreen;
