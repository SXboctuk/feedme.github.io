import React from 'react';
import { routePath } from '../../constants/routePath';
import InnerContainer from '../InnerContainer';
import LinkWithStyles from '../LinkWithStyles';
import Logo from '../Logo';

import SvgCompany from '../Svg/SvgCompany';
import {
	FooterBackground,
	FooterLinksBlock,
	FooterEmailLink,
	FooterProjectInfo,
	FooterProjectInfoSmallBlock,
	FooterProjectInfoBigBlock,
	FooterStyled,
	FooterLogoBlock,
} from './Footer.Styled';

const Footer = () => {
	return (
		<FooterBackground>
			<InnerContainer>
				<FooterStyled>
					<FooterLogoBlock>
						<Logo color="white" />
					</FooterLogoBlock>
					<FooterLinksBlock>
						<LinkWithStyles
							color="#FFFFFF"
							to={routePath.COOKBOOKS}
						>
							Cookbooks
						</LinkWithStyles>
						<LinkWithStyles color="#FFFFFF" to={routePath.RECEPIES}>
							Recepies
						</LinkWithStyles>
						<LinkWithStyles color="#FFFFFF" to={routePath.ABOUTUS}>
							About Us
						</LinkWithStyles>
						<FooterEmailLink href="mailto:plzfeedme@itechart.com">
							plzfeedme@itechart.com
						</FooterEmailLink>
					</FooterLinksBlock>
					<FooterProjectInfo>
						<FooterProjectInfoSmallBlock>
							Study Project v2, 2021
						</FooterProjectInfoSmallBlock>
						<FooterProjectInfoBigBlock>
							<SvgCompany />
						</FooterProjectInfoBigBlock>
					</FooterProjectInfo>
				</FooterStyled>
			</InnerContainer>
		</FooterBackground>
	);
};

export default Footer;
