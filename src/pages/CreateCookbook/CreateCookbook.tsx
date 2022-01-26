import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import Input from '../../components/Input';
import Button from '../../components/shared/Button';
import Card from '../../components/shared/Card';
import Container from '../../components/shared/Container';
import ModalWindowContainer from '../../components/shared/ModalWindow/ModalWindow.Container';
import { recepiesMockData } from '../../constants/mocks/Recepies';
import { routePath } from '../../constants/routePath';
import styles from '../../constants/stylesProperty';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import useWindowSize from '../../hooks/useWindowSize';
import { CardRecepie } from '../../interfaces/CardRecipe';
import {
	CreateCookbookDropRecepieWrapper,
	CreateCookbookFooterBlock,
	CreateCookbookLabel,
	CreateCookbookMainTitle,
	CreateCookbookRecepies,
	CreateCookbookRecepiesItem,
	CreateCookbookRecepiesWrapper,
	CreateCookbookUploadWrapper,
	CreateCookbookWrapper,
} from './CreateCookbook.Styled';

const CreateCookbook = (props: { handlerCloseButton: () => void }) => {
	const { handlerCloseButton } = props;
	const { t } = useTranslation();
	const [recipe, setRecepi] = useState<CardRecepie[]>([]);
	const { width } = useWindowSize();
	const navigate = useNavigate();
	const { id } = useTypedSelector((state) => state.userReducer);
	useEffect(() => {
		setRecepi(recepiesMockData.slice(0, 2));
	}, []);

	return (
		<ModalWindowContainer
			handlerCloseButton={() => {
				navigate(routePath.PROFILE + id + routePath.COOKBOOKS);
				handlerCloseButton();
			}}
		>
			<Container maxWidth={'808px'}>
				<CreateCookbookWrapper>
					<CreateCookbookMainTitle>
						{t('createNewCookbook')}
					</CreateCookbookMainTitle>
					<div>
						<Input
							handlerInput={() => 1}
							labelText={
								<CreateCookbookLabel>
									{t('cookbookTitle')}
								</CreateCookbookLabel>
							}
							value={''}
							placeholder={t('title')}
						/>
						<CreateCookbookUploadWrapper>
							<Button variant={'solid'}>
								{t('uploadCookbookImage')}
							</Button>
						</CreateCookbookUploadWrapper>
					</div>

					<Input
						handlerInput={() => 1}
						textArea
						labelText={
							<CreateCookbookLabel>
								{t('description')}
							</CreateCookbookLabel>
						}
						value={''}
						placeholder={t('description')}
					/>
					<Input
						handlerInput={() => 1}
						labelText={
							<CreateCookbookLabel>
								{t('recepies')}
							</CreateCookbookLabel>
						}
						value={''}
						placeholder={t('recepieTitle')}
					/>
					<CreateCookbookDropRecepieWrapper>
						<CreateCookbookRecepiesWrapper>
							<CreateCookbookRecepiesItem>
								test
							</CreateCookbookRecepiesItem>
							<CreateCookbookRecepiesItem>
								test
							</CreateCookbookRecepiesItem>
							<CreateCookbookRecepiesItem>
								test
							</CreateCookbookRecepiesItem>
							<CreateCookbookRecepiesItem>
								test
							</CreateCookbookRecepiesItem>
						</CreateCookbookRecepiesWrapper>
					</CreateCookbookDropRecepieWrapper>
					<CreateCookbookRecepies>
						{width >= parseInt(styles.screenSize.sm)
							? recipe.map((elem) => {
									return (
										<Card
											to={'#'}
											key={elem.key}
											text={elem.text}
											viewsCounter={elem.viewsCounter}
											titleName={elem.titleName}
											creatorName={elem.creatorName}
											imageSrc={elem.imageSrc}
											likesCounter={elem.likesCounter}
											commentsCounter={
												elem.commentsCounter
											}
											type="wide"
											OptionType={'Hidden'}
											creatorId={elem.creatorId}
										/>
									);
							  })
							: recipe.map((elem) => {
									return (
										<Card
											to={'#'}
											key={elem.key}
											text={elem.text}
											viewsCounter={elem.viewsCounter}
											titleName={elem.titleName}
											creatorName={elem.creatorName}
											imageSrc={elem.imageSrc}
											likesCounter={elem.likesCounter}
											commentsCounter={
												elem.commentsCounter
											}
											OptionType={'Hidden'}
											creatorId={elem.creatorId}
										/>
									);
							  })}
					</CreateCookbookRecepies>
					<CreateCookbookFooterBlock>
						<Button variant={'outline'}>{t('cancel')}</Button>
						<Button variant={'solid'}>{t('confirm')}</Button>
					</CreateCookbookFooterBlock>
				</CreateCookbookWrapper>
			</Container>
		</ModalWindowContainer>
	);
};

export default CreateCookbook;
