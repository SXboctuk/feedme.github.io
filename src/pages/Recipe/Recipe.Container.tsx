import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Recipe from '.';
import {
	cloneRecepie,
	getRecepieById,
	sendRecepieComment,
	setRecepieLike,
} from '../../api/Feedme.Api';

import { responseInRecepie } from '../../helpers/converter/recepie';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { IRecipe } from '../../interfaces/Recepi';

const RecipeContainer = () => {
	console.log('recepie open');
	const params = useParams();
	const { isAuth } = useTypedSelector((state) => state.userReducer);
	//fetch recipe from server by id

	const [recepie, setRecepie] = useState<IRecipe | null>(null);
	const [isLikes, setIsLikes] = useState(false);
	const [isSaved, setIsSaved] = useState(false);
	const [likesCounter, setLikesCounter] = useState(0);

	useEffect(() => {
		const fetchRecepie = async () => {
			if (params.recipeid) {
				const data = await getRecepieById(params.recipeid);
				// console.log(responseInRecepie(await data.json()));
				const json = await data.json();
				setIsLikes(json.isLikes);
				setLikesCounter(json.likesCounter);
				setIsSaved(json.isSaved);
				setRecepie(responseInRecepie(json));
			}
		};
		fetchRecepie();
	}, []);
	const handlerLike = async (e: React.MouseEvent<HTMLDivElement>) => {
		if (isAuth && recepie) {
			e.preventDefault();
			const res = await setRecepieLike(isLikes, recepie.id);
			setIsLikes(res.value);
			setLikesCounter(res.currentLikesCounter);
		}
	};
	const handlerSave = async () => {
		if (recepie) {
			const res = await cloneRecepie(recepie.id);
			if (res.ok) {
				setIsSaved(true);
			}
		}
	};
	const handlerSendComment = async (str: string) => {
		if (recepie) {
			const res = await sendRecepieComment(recepie.id, str);
			const json = await res.json();
			setRecepie({
				...recepie,
				comments: [
					...recepie.comments,
					{
						createDate: new Date(json.createDate),
						imageSrc: json.imageSrc,
						textComment: json.textComment,
						userId: json.userId,
						userName: json.userName,
					},
				],
			});
		}
	};
	return (
		<Recipe
			isAuth={isAuth}
			isSaved={isSaved}
			recipeData={recepie}
			handlerLike={handlerLike}
			likesCounter={likesCounter}
			isLikes={isLikes}
			handlerSave={handlerSave}
			handlerSendComment={handlerSendComment}
		/>
	);
};

export default RecipeContainer;
