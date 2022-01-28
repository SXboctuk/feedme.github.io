import React, { createRef } from 'react';
import { routePath } from '../../constants/routePath';
import Button from '../shared/Button';
import HeaderSearch from '../HeaderSearch';
import Link from '../shared/Link';
import Logo from '../Logo';
import Container from '../shared/Container';
import SvgHamburgetButton from '../Svg/SvgHamburgerButton/SvgHamburget';
import {
	HeaderBackground,
	HeaderButtonWrapper,
	HeaderHamburger,
	HeaderNavBlock,
	HeaderStyled,
	HeaderUserWrapper,
} from './Header.Styled';
import styles from '../../constants/stylesProperty';

import { useTranslation } from 'react-i18next';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import SvgUser from '../Svg/SvgUser';
import { useNavigate } from 'react-router-dom';

const Header = () => {
	const { t } = useTranslation();
	const navigate = useNavigate();
	const headerNavBlockRef = createRef<HTMLDivElement>();

	const hamburgerHandler = () => {
		headerNavBlockRef.current?.classList.toggle('opened');
	};

	const { userName, isAuth, id } = useTypedSelector(
		(state) => state.userReducer,
	);

	return (
		<HeaderBackground>
			<Container maxWidth={styles.screenSize.lg}>
				<HeaderStyled>
					<Logo />
					<HeaderNavBlock ref={headerNavBlockRef}>
						<Link to={routePath.RECEPIES}>{t('recepies')}</Link>
						<Link to={routePath.COOKBOOKS}>{t('cookbooks')}</Link>
						<HeaderSearch />
						<HeaderButtonWrapper>
							<Button
								variant="outline"
								onClick={() => {
									if (isAuth) {
										navigate(
											routePath.PROFILE +
												id +
												routePath.PROFILE_COOKBOOKS +
												routePath.CREATE_COOKBOOK,
										);
									} else {
										navigate('../' + routePath.SIGN_IN);
									}
								}}
							>
								{t('buttonCreateCookbook')}
							</Button>
						</HeaderButtonWrapper>

						{isAuth ? (
							<HeaderUserWrapper>
								<SvgUser />{' '}
								<Link to={routePath.PROFILE + id}>
									{userName}
								</Link>
							</HeaderUserWrapper>
						) : (
							<Link to={routePath.SIGN_IN}>{t('signin')}</Link>
						)}
					</HeaderNavBlock>
					<HeaderHamburger>
						<SvgHamburgetButton
							onClick={() => {
								hamburgerHandler();
							}}
						/>
					</HeaderHamburger>
				</HeaderStyled>
			</Container>
		</HeaderBackground>
	);
};

export default Header;
