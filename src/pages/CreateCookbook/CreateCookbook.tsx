import React, { createRef, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router-dom';
import Input from '../../components/Input';
import Button from '../../components/shared/Button';
import Card from '../../components/shared/Card';
import Container from '../../components/shared/Container';
import ModalWindowContainer from '../../components/shared/ModalWindow/ModalWindow.Container';
import { errorMassage } from '../../constants/errorMassage';
import { regexString } from '../../constants/regex';
import { routePath } from '../../constants/routePath';
import styles from '../../constants/stylesProperty';
import { useAction } from '../../hooks/useAction';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import useWindowSize from '../../hooks/useWindowSize';
import { CardRecepie } from '../../interfaces/CardRecipe';
import {
	CreateCookbookDropRecepieWrapper,
	CreateCookbookError,
	CreateCookbookFooterBlock,
	CreateCookbookLabel,
	CreateCookbookMainTitle,
	CreateCookbookPrevieImageWrapper,
	CreateCookbookPreviewImage,
	CreateCookbookRecepies,
	CreateCookbookRecepiesItem,
	CreateCookbookRecepiesWrapper,
	CreateCookbookUploadWrapper,
	CreateCookbookWrapper,
} from './CreateCookbook.Styled';

const CreateCookbook = () => {
	const refInputUploadFile = createRef<HTMLInputElement>();

	const { t } = useTranslation();
	const { width } = useWindowSize();
	const navigate = useNavigate();
	const params = useParams();
	const { fetchUserRecepies } = useAction();
	const { id } = useTypedSelector((state) => state.userReducer);
	const { cookbooks } = useTypedSelector(
		(state) => state.userCookbooksReducer,
	);
	const { recepies } = useTypedSelector((state) => state.userRecepiesReducer);
	const [title, setTitle] = useState<string>('');
	const [uploadImage, setUploadImage] = useState<File | string>();
	const [description, setDescription] = useState<string>('');
	const [recepiesInCookbook, setRecepiesInCookbook] = useState<CardRecepie[]>(
		[],
	);

	const [userRecepies, setUserRecepies] = useState<CardRecepie[]>(recepies);
	const [recepieSearch, setRecepieSearch] = useState<string>('');
	const [recepieShow, setRecepieShow] = useState<CardRecepie[]>([]);

	const [titleError, setTitleError] = useState<string>('');
	const [descriptionError, setDescriptionError] = useState<string>('');
	const [imageError, setImageError] = useState<string>('');
	const [recepiesError, setRecepiesError] = useState<string>('');

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
	const handlerRicipeSearchInput = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		if (e.target.value.match(regexString.IS_VALID_STRING) !== null) {
			setRecepieSearch(e.target.value);
			setRecepiesError('');
		}
	};
	const handlerAddRecepieInCookbook = (elem: CardRecepie) => {
		setRecepiesInCookbook([...recepiesInCookbook, elem]);

		// const index = userRecepies.indexOf(elem);

		// setUserRecepies([
		// 	...userRecepies.slice(0, index),
		// 	...userRecepies.slice(index + 1),
		// ]);
	};
	const handlerRemoveRecepieFromCookbook = (elem: CardRecepie) => {
		setUserRecepies([...userRecepies, elem]);
		const index = recepiesInCookbook.indexOf(elem);
		setRecepiesInCookbook([
			...recepiesInCookbook.slice(0, index),
			...recepiesInCookbook.slice(index + 1),
		]);
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

		if (recepiesInCookbook.length === 0) {
			setRecepiesError(errorMassage.NO_RECEPIES);
			error = true;
		}

		if (!error) {
			//post new cookbook and take from server cookbook and push in redux user Cookbooks
			alert('All field is ok');
		} else {
			return;
		}
	};

	useEffect(() => {
		fetchUserRecepies(id);
	}, []);

	useEffect(() => {
		setUserRecepies(recepies);
	}, [recepies]);

	useEffect(() => {
		const recepiesSuitable =
			userRecepies.filter(
				(elem) =>
					elem.titleName.toLowerCase().indexOf(recepieSearch) !== -1,
			) || [];

		setRecepieShow(recepiesSuitable);
	}, [recepieSearch, userRecepies]);

	useEffect(() => {
		const cookbook = cookbooks.find(
			(elem) => elem.to === params.cookbookid,
		);
		if (cookbook) {
			//fetch id cookbook
			params.cookbookid;
			//set value from responce
			setTitle('Responce title');
			setDescription(
				'Responce description Responce description Responce description Responce description Responce description Responce description Responce description',
			);
			setUploadImage('/public/mocks/Image/card1.jpg');
			setRecepiesInCookbook([...recepies.slice(0, 3)]);
		}
	}, [params.cookbookid, cookbooks]);

	useEffect(() => {
		let newRecepieArray = userRecepies;

		recepiesInCookbook.forEach((elem) => {
			const index = newRecepieArray.indexOf(elem);
			if (index !== -1) {
				newRecepieArray = [
					...newRecepieArray.slice(0, index),
					...newRecepieArray.slice(index + 1),
				];
			}
		});

		setUserRecepies(newRecepieArray);
	}, [recepiesInCookbook]);
	return (
		<ModalWindowContainer
			handlerCloseButton={() => {
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
							handlerInput={handlerTitleInput}
							labelText={
								<CreateCookbookLabel>
									{t('cookbookTitle')}
								</CreateCookbookLabel>
							}
							value={title}
							placeholder={t('title')}
							error={titleError}
						/>
						{uploadImage ? (
							<CreateCookbookPrevieImageWrapper>
								<CreateCookbookPreviewImage
									src={
										typeof uploadImage === 'string'
											? uploadImage
											: URL.createObjectURL(uploadImage)
									}
								/>
							</CreateCookbookPrevieImageWrapper>
						) : null}
						<CreateCookbookUploadWrapper>
							<Button
								variant={'solid'}
								onClick={handlerUploadButton}
							>
								{t('uploadCookbookImage')}
							</Button>
							<input
								ref={refInputUploadFile}
								type={'file'}
								onChange={handlerUploadInput}
								accept="image/*"
								hidden
							></input>
							{imageError.length !== 0 ? (
								<CreateCookbookError>
									{imageError}
								</CreateCookbookError>
							) : null}
						</CreateCookbookUploadWrapper>
					</div>

					<Input
						handlerInput={handlerDescriptionInput}
						textArea
						labelText={
							<CreateCookbookLabel>
								{t('description')}
							</CreateCookbookLabel>
						}
						value={description}
						placeholder={t('description')}
						error={descriptionError}
					/>
					<Input
						handlerInput={handlerRicipeSearchInput}
						labelText={
							<CreateCookbookLabel>
								{t('recepies')}
							</CreateCookbookLabel>
						}
						value={recepieSearch}
						placeholder={t('recepieTitle')}
						error={recepiesError}
					/>
					{recepieSearch != '' && recepieShow.length !== 0 ? (
						<CreateCookbookDropRecepieWrapper>
							<CreateCookbookRecepiesWrapper>
								{recepieShow.slice(0, 3).map((elem, i) => (
									<CreateCookbookRecepiesItem
										key={elem.key + i}
										onClick={() => {
											handlerAddRecepieInCookbook(elem);
											setRecepieSearch('');
										}}
									>
										{elem.titleName}
									</CreateCookbookRecepiesItem>
								))}
							</CreateCookbookRecepiesWrapper>
						</CreateCookbookDropRecepieWrapper>
					) : null}
					<CreateCookbookRecepies>
						{width >= parseInt(styles.screenSize.sm)
							? recepiesInCookbook.map((elem) => {
									return (
										<div
											onClick={() => {
												handlerRemoveRecepieFromCookbook(
													elem,
												);
											}}
											key={'newInCookbook' + elem.key}
										>
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
										</div>
									);
							  })
							: recepiesInCookbook.map((elem) => {
									return (
										<div
											onClick={() => {
												handlerRemoveRecepieFromCookbook(
													elem,
												);
											}}
											key={'newInCookbook' + elem.key}
										>
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
										</div>
									);
							  })}
					</CreateCookbookRecepies>
					<CreateCookbookFooterBlock>
						<Button
							variant={'outline'}
							onClick={() => {
								navigate(
									routePath.PROFILE +
										id +
										routePath.COOKBOOKS,
								);
								handlerCloseButton();
							}}
						>
							{t('cancel')}
						</Button>
						<Button variant={'solid'} onClick={handlerConfirm}>
							{t('confirm')}
						</Button>
					</CreateCookbookFooterBlock>
				</CreateCookbookWrapper>
			</Container>
		</ModalWindowContainer>
	);
};

export default CreateCookbook;
