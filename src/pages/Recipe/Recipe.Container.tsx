import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Recipe from '.';
import { setRecepieLike } from '../../api/Feedme.Api';
import { recipeMockData } from '../../constants/mocks/Recipe';
import { useTypedSelector } from '../../hooks/useTypedSelector';

const RecipeContainer = () => {
	const params = useParams();
	const { id, isAuth } = useTypedSelector((state) => state.userReducer);
	//fetch recipe from server by id
	console.log('get recepiid: ' + params.recipeid);
	const data = recipeMockData;
	const isOwner = data.creatorId === id;
	const [isLikes, setIsLikes] = useState(data.isLikes);
	const [likesCounter, setLikesCounter] = useState(data.likes);
	const handlerLike = async (e: React.MouseEvent<HTMLDivElement>) => {
		if (isAuth) {
			e.preventDefault();
			const res = await setRecepieLike(isLikes, data.id);
			setIsLikes(res.value);
			setLikesCounter(res.currentLikesCounter);
		}
	};
	return (
		<Recipe
			isAuth={isAuth}
			isOwner={isOwner}
			recipeData={data}
			handlerLike={handlerLike}
			isLikes={isLikes}
			likesCounter={likesCounter}
		/>
	);
};

export default RecipeContainer;
