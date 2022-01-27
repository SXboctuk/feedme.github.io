import React from 'react';
import Recipe from '.';
import { recipeMockData } from '../../constants/mocks/Recipe';
import { useTypedSelector } from '../../hooks/useTypedSelector';

const RecipeContainer = (props: { id: string }) => {
	const { id, isAuth } = useTypedSelector((state) => state.userReducer);
	//fetch recipe from server by id
	console.log('recepiid ' + props.id);
	const data = recipeMockData;
	const isOwner = data.creatorId === id;
	return <Recipe isAuth={isAuth} isOwner={isOwner} recipeData={data} />;
};

export default RecipeContainer;
