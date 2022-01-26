import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Input from '../../components/Input';
import Button from '../../components/shared/Button';
import Container from '../../components/shared/Container';
import ModalWindowContainer from '../../components/shared/ModalWindow/ModalWindow.Container';
import {
	CreateRecepieWrapper,
	CreateRecepieMainTitle,
	CreateRecepieLabel,
	CreateRecepieUploadWrapper,
	CreateRecepieFooterBlock,
	CreateRecepieGrid,
	CreateRecepieGridContent,
	CreateRecepieGridContentItem,
	CreateRecepieGridContentDeleate,
} from './CreateRecepie.Styled';

const CreateRecepie = (props: { handlerCloseButton: () => void }) => {
	const { handlerCloseButton } = props;
	const { t } = useTranslation();
	const [ingredients, setIngredients] = useState<string[]>([]);
	const [directions, setDirections] = useState<string[]>([]);
	return (
		<ModalWindowContainer handlerCloseButton={handlerCloseButton}>
			<Container maxWidth={'808px'}>
				<CreateRecepieWrapper>
					<CreateRecepieMainTitle>
						{t('createNewRecepie')}
					</CreateRecepieMainTitle>
					<div>
						<Input
							handlerInput={() => 1}
							labelText={
								<CreateRecepieLabel>
									{t('recepiTitle')}
								</CreateRecepieLabel>
							}
							value={''}
							placeholder={t('title')}
						/>
						<CreateRecepieUploadWrapper>
							<Button variant={'solid'}>
								{t('uploadRecepieImage')}
							</Button>
						</CreateRecepieUploadWrapper>
					</div>

					<Input
						handlerInput={() => 1}
						textArea
						labelText={
							<CreateRecepieLabel>
								{t('description')}
							</CreateRecepieLabel>
						}
						value={''}
						placeholder={t('description')}
					/>
					<CreateRecepieGrid>
						<div>
							<Input
								handlerInput={() => 1}
								labelText={
									<CreateRecepieLabel>
										{t('ingredients')}
									</CreateRecepieLabel>
								}
								value={''}
								placeholder={t('ingredients')}
							/>
							<CreateRecepieGridContent>
								<CreateRecepieGridContentItem>
									<div>1</div>
									<CreateRecepieGridContentDeleate />
								</CreateRecepieGridContentItem>
							</CreateRecepieGridContent>
						</div>
						<div>
							<Input
								handlerInput={() => 1}
								labelText={
									<CreateRecepieLabel>
										{t('directions')}
									</CreateRecepieLabel>
								}
								value={''}
								placeholder={t('directions')}
							/>
							<CreateRecepieGridContent>
								<CreateRecepieGridContentItem>
									<div>1</div>
									<CreateRecepieGridContentDeleate />
								</CreateRecepieGridContentItem>
							</CreateRecepieGridContent>
						</div>
					</CreateRecepieGrid>
					{/* <Input
						handlerInput={() => 1}
						labelText={
							<CreateCookbookLabel>
								{t('recepies')}
							</CreateCookbookLabel>
						}
						value={''}
						placeholder={t('recepieTitle')}
					/> */}

					<CreateRecepieFooterBlock>
						<Button variant={'outline'}>{t('cancel')}</Button>
						<Button variant={'solid'}>{t('confirm')}</Button>
					</CreateRecepieFooterBlock>
				</CreateRecepieWrapper>
			</Container>
		</ModalWindowContainer>
	);
};

export default CreateRecepie;
