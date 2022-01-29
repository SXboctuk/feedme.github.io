import React, { createRef, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router-dom';
import Input from '../../components/Input';
import Button from '../../components/shared/Button';
import Container from '../../components/shared/Container';
import ModalWindowContainer from '../../components/shared/ModalWindow/ModalWindow.Container';
import { errorMassage } from '../../constants/errorMassage';
import { regexString } from '../../constants/regex';
import { useTypedSelector } from '../../hooks/useTypedSelector';
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
	CreateRecepiePrevieImageWrapper,
	CreateRecepiePreviewImage,
	CreateRecepieError,
} from './CreateRecepie.Styled';

const CreateRecepie = () => {
	// const { handlerCloseButton } = props;
	const refInputUploadFile = createRef<HTMLInputElement>();

	const { t } = useTranslation();
	const navigate = useNavigate();
	const params = useParams();
	const [ingredientsValue, setIngredientsValue] = useState<string>('');
	const [directionsValue, setDirectionsValue] = useState<string>('');

	const [title, setTitle] = useState<string>('');
	const [uploadImage, setUploadImage] = useState<File | string>();
	const [description, setDescription] = useState<string>('');
	const [ingredients, setIngredients] = useState<string[]>([]);
	const [directions, setDirections] = useState<string[]>([]);

	const [titleError, setTitleError] = useState<string>('');
	const [descriptionError, setDescriptionError] = useState<string>('');
	const [imageError, setImageError] = useState<string>('');
	const [ingredientsError, setIngredientsError] = useState<string>('');
	const [directionsError, setDirectionsError] = useState<string>('');

	const handlerCloseButton = () => {
		navigate('../');
	};

	const handlerUploadButton = () => {
		refInputUploadFile.current?.click();
	};

	const handlerUploadInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.files) {
			setUploadImage(e.target.files[0]);
			setImageError('');
		}
	};
	const handlerTitleInput = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		if (e.target.value.match(regexString.IS_VALID_STRING) !== null) {
			setTitle(e.target.value);
			setTitleError('');
		}
	};
	const handlerDescriptionInput = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		if (e.target.value.match(regexString.IS_VALID_STRING) !== null) {
			setDescription(e.target.value);
			setDescriptionError('');
		}
	};
	const handlerIngridiendsInput = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		if (e.target.value.match(regexString.IS_VALID_STRING) !== null) {
			setIngredientsValue(e.target.value);
			setIngredientsError('');
		}
	};
	const handlerDirectionsInput = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		if (e.target.value.match(regexString.IS_VALID_STRING) !== null) {
			setDirectionsValue(e.target.value);
			setDirectionsError('');
		}
	};
	const handlerIngridiendsKey = (
		e: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		if (e.key === 'Enter') {
			if (ingredientsValue.match(regexString.IS_STRING_SHORT) === null) {
				setIngredients([...ingredients, ingredientsValue]);
				setIngredientsValue('');
			} else {
				setIngredientsError(errorMassage.IS_SHORT);
			}
		}
	};
	const handlerDirectionsKey = (
		e: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		if (e.key === 'Enter') {
			if (directionsValue.match(regexString.IS_STRING_SHORT) === null) {
				setIngredients([...ingredients, ingredientsValue]);
				setIngredientsValue('');
			} else {
				setDirectionsError(errorMassage.IS_SHORT);
			}
		}
	};

	const handlerConfirm = () => {
		let error = false;
		if (title.match(regexString.IS_STRING_SHORT)) {
			setTitleError(errorMassage.IS_SHORT);
			error = true;
		}

		if (!uploadImage) {
			setImageError(errorMassage.NO_IMAGE);
			error = true;
		}
		if (description.match(regexString.IS_STRING_SHORT_DESCRIPTION)) {
			setDescriptionError(errorMassage.IS_SHORT_DESCRIPTION);
			error = true;
		}

		if (ingredients.length === 0) {
			setIngredientsError(errorMassage.NO_INGREDIENTS);
			error = true;
		}
		if (ingredients.length === 0) {
			setDirectionsError(errorMassage.NO_DIRECTIONS);
			error = true;
		}
		if (!error) {
			//fetch new cookbook and take from server cookbook and push in redux user Cookbooks
			alert('All field is ok');
		} else {
			return;
		}
	};
	const { recepies } = useTypedSelector((state) => state.userRecepiesReducer);
	useEffect(() => {
		const recepie = recepies.find((elem) => elem.id === params.recipeid);
		console.log(recepie);
		if (recepie) {
			console.log('EDIT');
			//fetch id recepies
			params.recipeid;
			//set value from responce
			setTitle('Responce title');
			setDescription(
				'Responce description Responce description Responce description Responce description Responce description Responce description Responce description',
			);
			setUploadImage('/public/mocks/Image/card1.jpg');
			setIngredients([]);
			setDirections([]);
		}
	}, [params.recipeid, recepies]);

	return (
		<ModalWindowContainer handlerCloseButton={handlerCloseButton}>
			<Container maxWidth={'808px'}>
				<CreateRecepieWrapper>
					<CreateRecepieMainTitle>
						{t('createNewRecepie')}
					</CreateRecepieMainTitle>
					<div>
						<Input
							handlerInput={handlerTitleInput}
							labelText={
								<CreateRecepieLabel>
									{t('recepiTitle')}
								</CreateRecepieLabel>
							}
							value={title}
							placeholder={t('title')}
							error={titleError}
						/>
						{uploadImage ? (
							<CreateRecepiePrevieImageWrapper>
								<CreateRecepiePreviewImage
									src={
										typeof uploadImage === 'string'
											? uploadImage
											: URL.createObjectURL(uploadImage)
									}
								/>
							</CreateRecepiePrevieImageWrapper>
						) : null}
						<CreateRecepieUploadWrapper>
							<Button
								variant={'solid'}
								onClick={handlerUploadButton}
							>
								{t('uploadRecepieImage')}
							</Button>
							<input
								ref={refInputUploadFile}
								type={'file'}
								onChange={handlerUploadInput}
								accept="image/*"
								hidden
							></input>
							{imageError.length !== 0 ? (
								<CreateRecepieError>
									{imageError}
								</CreateRecepieError>
							) : null}
						</CreateRecepieUploadWrapper>
					</div>

					<Input
						handlerInput={handlerDescriptionInput}
						textArea
						labelText={
							<CreateRecepieLabel>
								{t('description')}
							</CreateRecepieLabel>
						}
						value={description}
						placeholder={t('description')}
						error={descriptionError}
					/>
					<CreateRecepieGrid>
						<div>
							<Input
								handlerInput={handlerIngridiendsInput}
								handlerKeyDown={handlerIngridiendsKey}
								labelText={
									<CreateRecepieLabel>
										{t('ingredients')}
									</CreateRecepieLabel>
								}
								value={ingredientsValue}
								placeholder={t('ingredients')}
							/>
							{ingredientsError.length !== 0 ? (
								<CreateRecepieError>
									{ingredientsError}
								</CreateRecepieError>
							) : null}
							{ingredients.length > 0 ? (
								<CreateRecepieGridContent>
									{ingredients.map((elem, i) => (
										<CreateRecepieGridContentItem
											key={elem + i}
										>
											<div>{elem}</div>
											<CreateRecepieGridContentDeleate
												onClick={() => {
													const index =
														ingredients.indexOf(
															elem,
														);
													setIngredients([
														...ingredients.slice(
															0,
															index,
														),
														...ingredients.slice(
															index + 1,
														),
													]);
												}}
											/>
										</CreateRecepieGridContentItem>
									))}
								</CreateRecepieGridContent>
							) : null}
						</div>
						<div>
							<Input
								handlerInput={handlerDirectionsInput}
								handlerKeyDown={handlerDirectionsKey}
								labelText={
									<CreateRecepieLabel>
										{t('directions')}
									</CreateRecepieLabel>
								}
								value={directionsValue}
								placeholder={t('directions')}
							/>
							{directionsError.length !== 0 ? (
								<CreateRecepieError>
									{directionsError}
								</CreateRecepieError>
							) : null}
							{directions.length > 0 ? (
								<CreateRecepieGridContent>
									{directions.map((elem, i) => (
										<CreateRecepieGridContentItem
											key={elem + i}
										>
											<div>{`${i}:${t(
												'step',
											)} ${elem}`}</div>
											<CreateRecepieGridContentDeleate
												onClick={() => {
													const index =
														directions.indexOf(
															elem,
														);
													setDirections([
														...directions.slice(
															0,
															index,
														),
														...directions.slice(
															index + 1,
														),
													]);
												}}
											/>
										</CreateRecepieGridContentItem>
									))}
								</CreateRecepieGridContent>
							) : null}
						</div>
					</CreateRecepieGrid>
					<CreateRecepieFooterBlock>
						<Button
							variant={'outline'}
							onClick={() => handlerCloseButton()}
						>
							{t('cancel')}
						</Button>
						<Button variant={'solid'} onClick={handlerConfirm}>
							{t('confirm')}
						</Button>
					</CreateRecepieFooterBlock>
				</CreateRecepieWrapper>
			</Container>
		</ModalWindowContainer>
	);
};

export default CreateRecepie;
