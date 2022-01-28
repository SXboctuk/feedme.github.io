import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import OptionButton from '.';
import { routePath } from '../../constants/routePath';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { OptionButtonType } from './OptionButton.Contstants';
import { OptionButtonContainerProps } from './OptionButton.Interface';

const OptionButtonContainer = (props: OptionButtonContainerProps) => {
	const [isShow, setIsShow] = useState(false);
	const navigate = useNavigate();
	const handlerMainButton = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.stopPropagation();
		e.preventDefault();
		setIsShow(!isShow);
	};
	const { elemId, type, creatorId } = props;
	const { id } = useTypedSelector((state) => state.userReducer);
	const { t } = useTranslation();
	const OptionButtons: { [name: string]: React.ReactElement } = {
		RECEPIE: (
			<OptionButton
				isShow={isShow}
				setIsShow={setIsShow}
				handlerMainButton={handlerMainButton}
				ItemsButton={[
					{
						text: t('CloneToMyRecepies'),
						onClick: () => console.log('recepie' + elemId),
					},
				]}
			/>
		),

		COOKBOOK: (
			<OptionButton
				isShow={isShow}
				setIsShow={setIsShow}
				handlerMainButton={handlerMainButton}
				ItemsButton={[
					{
						text: t('CloneToMyRecepies'),
						onClick: () => console.log('Cookbook' + elemId),
					},
				]}
			/>
		),

		RECEPIE_OWNER: (
			<OptionButton
				isShow={isShow}
				setIsShow={setIsShow}
				handlerMainButton={handlerMainButton}
				ItemsButton={[
					{
						text: t('EditRecepie'),
						onClick: () => {
							navigate(
								`/${routePath.PROFILE}/
									${id}/
									${routePath.RECEPIES}/
									${elemId}/
									${routePath.EDIT}`,
							);
						},
					},
					{
						text: t('DeleteRecepie'),
						onClick: () => console.log('RecepieOwner' + elemId),
					},
				]}
			/>
		),

		COOKBOOK_OWNER: (
			<OptionButton
				isShow={isShow}
				setIsShow={setIsShow}
				handlerMainButton={handlerMainButton}
				ItemsButton={[
					{
						text: t('EditCookbook'),
						onClick: () => {
							navigate(
								`/${routePath.PROFILE}/
									${id}/
									${routePath.COOKBOOKS}/
									${elemId}/
									${routePath.EDIT}`,
							);
						},
					},
					{
						text: t('DeleteCookbook'),
						onClick: () => console.log('CookbookOwner' + elemId),
					},
				]}
			/>
		),
	};

	if (type === 'Recepie') {
		if (id === creatorId) {
			return OptionButtons[OptionButtonType.RECEPIE_OWNER];
		} else {
			return OptionButtons[OptionButtonType.RECEPIE];
		}
	} else if (type === 'Cookbook') {
		if (id === creatorId) {
			return OptionButtons[OptionButtonType.COOKBOOK_OWNER];
		} else {
			return OptionButtons[OptionButtonType.COOKBOOK];
		}
	} else {
		return null;
	}
};

export default OptionButtonContainer;
