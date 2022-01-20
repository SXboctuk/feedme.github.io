import React from 'react';
import Recipe from '.';
import { recipeMockData } from '../../constants/mocks/Recipe';

const RecipeContainer = (props: { id: string }) => {
	//fetch recipe from server by id
	const data = recipeMockData;
	return <Recipe recipeData={data} />;
};

export default RecipeContainer;
