import React from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { routePath } from '../../constants/routePath';
import Button from '../shared/Button';
import {
	ProfileNavigationBlock,
	ProfileNavigationButtonWrapper,
	ProfileNavigationItem,
	ProfileNavigationItemsBlock,
} from './ProfileNavigation.Styled';

const ProfileNavigation = (props: {
	handlerButton?: (e: React.MouseEvent) => void;
	buttonText?: string;
	itemSelect: 'cookbooks' | 'recepies' | 'settings';
	isOwner: boolean;
}) => {
	const { handlerButton, buttonText, itemSelect, isOwner } = props;
	const { t } = useTranslation();
	const params = useParams();
	return (
		<ProfileNavigationBlock>
			<ProfileNavigationItemsBlock>
				<ProfileNavigationItem
					className={itemSelect === 'cookbooks' ? 'active' : ''}
					to={
						'../' +
						routePath.PROFILE +
						params.id +
						routePath.PROFILE_COOKBOOKS
					}
				>
					{isOwner ? t('myCookbooks') : t('cookbooks')}
				</ProfileNavigationItem>
				<ProfileNavigationItem
					className={itemSelect === 'recepies' ? 'active' : ''}
					to={
						'../' +
						routePath.PROFILE +
						params.id +
						routePath.PROFILE_RECEPIES
					}
				>
					{isOwner ? t('myRecepies') : t('recepies')}
				</ProfileNavigationItem>
				{isOwner ? (
					<ProfileNavigationItem
						className={itemSelect === 'settings' ? 'active' : ''}
						to={
							'../' +
							routePath.PROFILE +
							params.id +
							routePath.PROFILE_SETTINGS
						}
					>
						{t('mySettings')}
					</ProfileNavigationItem>
				) : null}
			</ProfileNavigationItemsBlock>
			{handlerButton && isOwner ? (
				<ProfileNavigationButtonWrapper>
					<Button variant={'solid'} onClick={handlerButton}>
						{buttonText}
					</Button>
				</ProfileNavigationButtonWrapper>
			) : null}
		</ProfileNavigationBlock>
	);
};

export default ProfileNavigation;
