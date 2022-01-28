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

const Recipe = (props: {
	recipeData: IRecipe;
	isAuth: boolean;
	isOwner: boolean;
}) => {
	const { recipeData, isAuth, isOwner } = props;
	const {
		comments,
		creatorName,
		creatorId,
		directions,
		id,
		image,
		ingredients,
		likes,
		mainText,
		title,
		views,
	} = recipeData;
	const { t } = useTranslation();
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
									{isAuth && !isOwner ? (
										<Button
											variant={'outlineAdd'}
											onClick={() => alert(id)}
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
								<RecipeSocial>
									<SvgHeart />
									<RecipeCounter>
										{likes} {t('likes')}
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
						handlerSendComment={(str) => {
							alert('str: ' + str + ' id: ' + id);
						}}
					/>
				</RecipeWrapper>
			</Container>
		</ModalWindowContainer>
	);
};

export default Recipe;
