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

import { useTranslation } from 'react-i18next';
import { companyEmail, projectName } from '../../constants/source';

const Footer = () => {
	const { t } = useTranslation();
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
							{t('cookbook')}
						</Link>
						<Link
							color={styles.colors.white}
							to={routePath.RECEPIES}
						>
							{t('recepies')}
						</Link>
						<Link
							color={styles.colors.white}
							to={routePath.ABOUTUS}
						>
							About Us {t('aboutus')}
						</Link>
						<FooterEmailLink href={`mailto:${companyEmail}`}>
							{companyEmail}
						</FooterEmailLink>
					</FooterLinksBlock>
					<FooterProjectInfo>
						<FooterProjectInfoSmallBlock>
							{projectName}
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
