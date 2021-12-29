import React from 'react';
import { routePath } from '../../constants/routePath';
import styles from '../../constants/stylesProperty';
import Link from '../shared/Link';
import Logo from '../Logo';
import Container from '../shared/Container';

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
			<Container maxWidth={styles.screenSize.lg}>
				<FooterStyled>
					<FooterLogoBlock>
						<Logo color={styles.colors.white} />
					</FooterLogoBlock>
					<FooterLinksBlock>
						<Link
							color={styles.colors.white}
							to={routePath.COOKBOOKS}
						>
							Cookbooks
						</Link>
						<Link
							color={styles.colors.white}
							to={routePath.RECEPIES}
						>
							Recepies
						</Link>
						<Link
							color={styles.colors.white}
							to={routePath.ABOUTUS}
						>
							About Us
						</Link>
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
			</Container>
		</FooterBackground>
	);
};

export default Footer;
