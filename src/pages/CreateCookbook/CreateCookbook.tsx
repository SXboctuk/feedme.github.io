import React, { createRef, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router-dom';
import {
	createNewCookbook,
	getCookbookById,
	updateCookbook,
} from '../../api/Feedme.Api';
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
	CookbookCreateCheckboxInput,
	CookbookCreateCheckboxInputWrapper,
	CookbookCreateCheckboxLabel,
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
	// const { cookbooks } = useTypedSelector(
	// 	(state) => state.userCookbooksReducer,
	// );
	const { recepies } = useTypedSelector((state) => state.userRecepiesReducer);
	const [title, setTitle] = useState<string>('');
	const [uploadImage, setUploadImage] = useState<File | string>();
	const [description, setDescription] = useState<string>('');
	const [recepiesInCookbook, setRecepiesInCookbook] = useState<CardRecepie[]>(
		[],
	);
	const [isVegatarian, setIsVegatarian] = useState(false);
	const [isWithoutEggs, setIsWithoutEggs] = useState(false);
	const [isWithoutMilk, setIsWithoutMilk] = useState(false);

	const [userRecepies, setUserRecepies] = useState<CardRecepie[]>(recepies);
	const [recepieSearch, setRecepieSearch] = useState<string>('');
	const [recepieShow, setRecepieShow] = useState<CardRecepie[]>([]);

	const [titleError, setTitleError] = useState<string>('');
	const [descriptionError, setDescriptionError] = useState<string>('');
	const [imageError, setImageError] = useState<string>('');
	const [recepiesError, setRecepiesError] = useState<string>('');

	const handlerIsVegatarian = () => {
		setIsVegatarian(!isVegatarian);
	};
	const handlerIsWithoutEggs = () => {
		setIsWithoutEggs(!isWithoutEggs);
	};
	const handlerIsWithoutMilk = () => {
		setIsWithoutMilk(!isWithoutMilk);
	};

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
	const handlerConfirm = async () => {
		let error = false;
		if (title.match(regexString.IS_STRING_SHORT) === null) {
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

			if (uploadImage instanceof File) {
				const recepieIdList = recepiesInCookbook.map(
					(recepie) => recepie.id,
				);
				if (params.cookbookid) {
					const image =
						uploadImage instanceof File ? uploadImage : undefined;
					const res = await updateCookbook(
						params.cookbookid,
						image,
						title,
						isVegatarian,
						isWithoutMilk,
						isWithoutEggs,
						description,
						recepieIdList,
					);
					console.log(res);
				} else {
					const res = await createNewCookbook(
						uploadImage,
						title,
						isVegatarian,
						isWithoutMilk,
						isWithoutEggs,
						description,
						recepieIdList,
					);
					console.log(res);
				}
			}
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
		if (params.cookbookid) {
			//fetch id cookbook

			const fetchCookbook = async () => {
				if (params.cookbookid) {
					const res = await getCookbookById(params.cookbookid);
					const json = await res.json();

					setTitle(json.cookbook.title);
					setDescription(json.cookbook.description);
					setUploadImage(json.cookbook.imagePath);
					let newRecepieArray = userRecepies;
					setRecepiesInCookbook(
						json.recepies.map((elem: any) => {
							let recepie: CardRecepie | null = null;
							userRecepies.forEach((res) => {
								if (res.id == elem.id) {
									const index = newRecepieArray.indexOf(res);

									newRecepieArray = [
										...newRecepieArray.slice(0, index),
										...newRecepieArray.slice(index + 1),
									];
									recepie = res;
								}
							});
							if (recepie !== null) {
								return recepie;
							}
						}),
					);

					setUserRecepies(newRecepieArray);
				}
			};
			fetchCookbook();
			//set value from responce
		}
	}, [params.cookbookid]);

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
					<div>
						<CookbookCreateCheckboxInputWrapper>
							<CookbookCreateCheckboxInput
								onChange={handlerIsVegatarian}
								checked={isVegatarian}
								type="checkbox"
								name="Vegetarian"
								id="Vegetarian"
							/>
							<CookbookCreateCheckboxLabel htmlFor="Vegetarian">
								{t('vegetarian')}
							</CookbookCreateCheckboxLabel>
						</CookbookCreateCheckboxInputWrapper>
						<CookbookCreateCheckboxInputWrapper>
							<CookbookCreateCheckboxInput
								onChange={handlerIsWithoutMilk}
								checked={isWithoutMilk}
								type="checkbox"
								name="Without milk"
								id="WithoutMilk"
							/>
							<CookbookCreateCheckboxLabel htmlFor="WithoutMilk">
								{t('withoutMilk')}
							</CookbookCreateCheckboxLabel>
						</CookbookCreateCheckboxInputWrapper>
						<CookbookCreateCheckboxInputWrapper>
							<CookbookCreateCheckboxInput
								onChange={handlerIsWithoutEggs}
								checked={isWithoutEggs}
								type="checkbox"
								name="Without eggs"
								id="WithoutEggs"
							/>
							<CookbookCreateCheckboxLabel htmlFor="WithoutEggs">
								{t('withoutEggs')}
							</CookbookCreateCheckboxLabel>
						</CookbookCreateCheckboxInputWrapper>
					</div>
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
										key={elem.id + i}
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
											key={'newInCookbook' + elem.id}
										>
											<Card
												to={'#'}
												key={elem?.id}
												text={elem?.text}
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
												isLikes={elem.isLikes}
												cardType={'recepie'}
												isSaved={false}
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
											key={'newInCookbook' + elem.id}
										>
											<Card
												to={'#'}
												key={elem.id}
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
												isLikes={elem.isLikes}
												cardType={'recepie'}
												isSaved={false}
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
