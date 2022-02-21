import React from 'react';
import { useTranslation } from 'react-i18next';
import Button from '../../components/shared/Button';
import Container from '../../components/shared/Container';

import ModalWindowContainer from '../../components/shared/ModalWindow/ModalWindow.Container';
import SvgComment from '../../components/Svg/SvgComment';
import SvgHeart from '../../components/Svg/SvgHeart';
import SvgWatch from '../../components/Svg/SvgWatch';
import { routePath } from '../../constants/routePath';
import { IRecipe } from '../../interfaces/Recepi';
import {
	RecipeWrapper,
	RecipeBlock,
	RecipeImage,
	RecipeContent,
	RecipeHeader,
	RecipeMainTitle,
	RecipeButtonWrapper,
	RecipeCreatorName,
	RecipeTextBlock,
	RecipeText,
	RecipeComponentsBlock,
	RecipeComponent,
	RecipeTitle,
	RecipeDirection,
	RecipeDirectionStep,
	RecipeIngredient,
	RecipeSociaBlock,
	RecipeSocial,
	RecipeCounter,
} from './Recipe.Styled';
import CommentsBlock from '../../components/CommentsBlock';
import Spinner from '../../components/shared/Spinner';

const Recipe = (props: {
	recipeData: IRecipe | null;
	isAuth: boolean;
	isSaved: boolean;
	handlerLike: (e: React.MouseEvent<HTMLDivElement>) => void;
	isLikes: boolean;
	likesCounter: number;
	handlerSave: () => void;
	handlerSendComment: (str: string) => void;
}) => {
	const { t } = useTranslation();
	const {
		recipeData,
		isAuth,
		isLikes,
		handlerLike,
		isSaved,
		likesCounter,
		handlerSave,
		handlerSendComment,
	} = props;
	if (recipeData === null) {
		return (
			<ModalWindowContainer>
				<Spinner />
			</ModalWindowContainer>
		);
	}
	const {
		comments,
		creatorName,
		creatorId,
		directions,
		image,
		ingredients,
		mainText,
		title,
		views,
	} = recipeData;
	return (
		<ModalWindowContainer>
			<Container maxWidth={'1016px'}>
				<RecipeWrapper>
					<RecipeBlock>
						<RecipeImage src={image} />
						<RecipeContent>
							<RecipeHeader>
								<RecipeMainTitle>{title}</RecipeMainTitle>
								<RecipeButtonWrapper>
									{isAuth && !isSaved ? (
										<Button
											variant={'outlineAdd'}
											onClick={() => {
												handlerSave();
											}}
										/>
									) : null}
								</RecipeButtonWrapper>
							</RecipeHeader>
							<RecipeCreatorName
								to={routePath.PROFILE + creatorId}
							>
								{creatorName}
							</RecipeCreatorName>
							<RecipeTextBlock>
								<RecipeTitle>{t('description')}</RecipeTitle>
								<RecipeText>{mainText}</RecipeText>
							</RecipeTextBlock>
							<RecipeComponentsBlock>
								<RecipeComponent>
									<RecipeTitle>{t('directions')}</RecipeTitle>
									{directions.map((elem, i) => (
										<RecipeDirection key={elem + i}>
											<RecipeDirectionStep>
												step {i + 1}:{' '}
											</RecipeDirectionStep>
											{elem}
										</RecipeDirection>
									))}
								</RecipeComponent>
								<RecipeComponent>
									<RecipeTitle>
										{t('ingredients')}
									</RecipeTitle>
									{ingredients.map((elem, i) => (
										<RecipeIngredient key={elem + i}>
											{elem}
										</RecipeIngredient>
									))}
								</RecipeComponent>
							</RecipeComponentsBlock>
							<RecipeSociaBlock>
								<RecipeSocial>
									<SvgWatch />
									<RecipeCounter>
										{views} {t('views')}
									</RecipeCounter>
								</RecipeSocial>
								<RecipeSocial
									className={isLikes ? 'selected' : ''}
									onClick={handlerLike}
								>
									<SvgHeart />
									<RecipeCounter>
										{likesCounter} {t('likes')}
									</RecipeCounter>
								</RecipeSocial>
								<RecipeSocial>
									<SvgComment />
									<RecipeCounter>
										{`${comments.length} ` + t('comments')}
									</RecipeCounter>
								</RecipeSocial>
							</RecipeSociaBlock>
						</RecipeContent>
					</RecipeBlock>

					<CommentsBlock
						comments={comments}
						handlerSendComment={handlerSendComment}
					/>
				</RecipeWrapper>
			</Container>
		</ModalWindowContainer>
	);
};

export default Recipe;
