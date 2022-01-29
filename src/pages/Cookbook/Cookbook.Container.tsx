import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Cookbook from '.';
import { setCookbookLike } from '../../api/Feedme.Api';
import { cookbookMockData } from '../../constants/mocks/Cookbook';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import useWindowSize from '../../hooks/useWindowSize';

const CookbookContainer = () => {
	const { id, isAuth } = useTypedSelector((state) => state.userReducer);
	const { width } = useWindowSize();
	const params = useParams();
	//fetch cookbook from server by id
	console.log('get - cookbookid: ' + params.cookbookid);
	const data = cookbookMockData;
	const isOwner = data.creatorId === id;

	const [isLikes, setIsLikes] = useState(data.isLikes);
	const [likesCounter, setLikesCounter] = useState(data.likes);
	const handlerLike = async (e: React.MouseEvent<HTMLDivElement>) => {
		if (isAuth) {
			e.preventDefault();
			const res = await setCookbookLike(isLikes, data.id);
			setIsLikes(res.value);
			setLikesCounter(res.currentLikesCounter);
		}
	};
	return (
		<Cookbook
			isAuth={isAuth}
			isOwner={isOwner}
			cookbookData={data}
			width={width}
			handlerLike={handlerLike}
			isLikes={isLikes}
			likesCounter={likesCounter}
		/>
	);
};

export default CookbookContainer;
