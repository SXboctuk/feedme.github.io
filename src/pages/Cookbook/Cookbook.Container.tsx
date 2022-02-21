import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Cookbook from '.';
import {
	getCookbookById,
	sendCookbookComment,
	setCookbookLike,
} from '../../api/Feedme.Api';
import { responseInCookbook } from '../../helpers/converter/cookbook';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import useWindowSize from '../../hooks/useWindowSize';
import { ICookbook } from '../../interfaces/Cookbook';

const CookbookContainer = () => {
	const { isAuth } = useTypedSelector((state) => state.userReducer);
	const { width } = useWindowSize();
	const params = useParams();
	//fetch cookbook from server by id

	const [cookbook, setCookbook] = useState<ICookbook | null>(null);
	const [isLikes, setIsLikes] = useState(false);
	const [isSaved, setIsSaved] = useState(false);
	const [likesCounter, setLikesCounter] = useState(0);
	useEffect(() => {
		const fetchRecepie = async () => {
			if (params.cookbookid) {
				const data = await getCookbookById(params.cookbookid);

				const json = await data.json();
				setIsLikes(json.isLikes);
				setLikesCounter(json.likesCounter);
				setIsSaved(json.isSaved);

				setCookbook(responseInCookbook(json));
			}
		};
		fetchRecepie();
	}, []);
	const handlerLike = async (e: React.MouseEvent<HTMLDivElement>) => {
		if (isAuth && cookbook) {
			e.preventDefault();
			const res = await setCookbookLike(isLikes, cookbook.id);
			setIsLikes(res.value);
			setLikesCounter(res.currentLikesCounter);
		}
	};
	const handlerSendComment = async (str: string) => {
		if (cookbook) {
			const res = await sendCookbookComment(cookbook.id, str);
			const json = await res.json();
			console.log(json);
			setCookbook({
				...cookbook,
				comments: [
					...cookbook.comments,
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
		<Cookbook
			isAuth={isAuth}
			isSaved={isSaved}
			cookbookData={cookbook}
			width={width}
			handlerLike={handlerLike}
			isLikes={isLikes}
			likesCounter={likesCounter}
			handlerSendComment={handlerSendComment}
		/>
	);
};

export default CookbookContainer;
