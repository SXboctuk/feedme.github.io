import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import OptionButton from '.';
import {
	cloneCookbook,
	cloneRecepie,
	deleteCookbook,
	deleteRecepie,
} from '../../api/Feedme.Api';
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
	const [isSaved, setIsSaved] = useState(props.isSaved);
	const OptionButtons: { [name: string]: React.ReactElement } = {
		RECEPIE: (
			<OptionButton
				isShow={isShow}
				setIsShow={setIsShow}
				handlerMainButton={handlerMainButton}
				ItemsButton={[
					{
						text: t('CloneToMyRecepies'),
						onClick: async () => {
							const res = await cloneRecepie(elemId);
							if (res.ok) {
								setIsSaved(true);
							}
						},
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
						onClick: async () => {
							const res = await cloneCookbook(elemId);
							if (res.ok) {
								setIsSaved(true);
							}
						},
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
						onClick: async () => {
							const res = await deleteRecepie(elemId);
							if (res.ok) {
								setIsSaved(false);
							}
						},
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
						text: t('DeleteCookbook'),
						onClick: async () => {
							const res = await deleteCookbook(elemId);
							if (res.ok) {
								setIsSaved(false);
							}
						},
					},
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
				]}
			/>
		),

		RECEPIE_SAVED: (
			<OptionButton
				isShow={isShow}
				setIsShow={setIsShow}
				handlerMainButton={handlerMainButton}
				ItemsButton={[
					{
						text: t('DeleteRecepie'),
						onClick: async () => {
							const res = await deleteRecepie(elemId);
							if (res.ok) {
								setIsSaved(false);
							}
						},
					},
				]}
			/>
		),

		COOKBOOK_SAVED: (
			<OptionButton
				isShow={isShow}
				setIsShow={setIsShow}
				handlerMainButton={handlerMainButton}
				ItemsButton={[
					{
						text: t('DeleteCookbook'),
						onClick: async () => {
							const res = await deleteCookbook(elemId);
							if (res.ok) {
								setIsSaved(false);
							}
						},
					},
				]}
			/>
		),
	};

	if (type === 'Recepie') {
		if (id === creatorId) {
			return OptionButtons[OptionButtonType.RECEPIE_OWNER];
		} else if (isSaved) {
			return OptionButtons[OptionButtonType.RECEPIE_SAVED];
		} else {
			return OptionButtons[OptionButtonType.RECEPIE];
		}
	} else if (type === 'Cookbook') {
		if (id === creatorId) {
			return OptionButtons[OptionButtonType.COOKBOOK_OWNER];
		} else if (isSaved) {
			return OptionButtons[OptionButtonType.COOKBOOK_SAVED];
		} else {
			return OptionButtons[OptionButtonType.COOKBOOK];
		}
	} else {
		return null;
	}
};

export default OptionButtonContainer;
