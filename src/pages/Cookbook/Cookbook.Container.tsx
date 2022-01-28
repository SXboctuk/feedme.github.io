import React from 'react';
import { useParams } from 'react-router-dom';
import Cookbook from '.';
import { cookbookMockData } from '../../constants/mocks/Cookbook';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import useWindowSize from '../../hooks/useWindowSize';

const CookbookContainer = () => {
	const { id, isAuth } = useTypedSelector((state) => state.userReducer);
	const { width } = useWindowSize();
	const params = useParams();
	//fetch cookbook from server by id
	console.log('cookbookid' + params.cookbookid);
	const data = cookbookMockData;
	const isOwner = data.creatorId === id;
	return (
		<Cookbook
			isAuth={isAuth}
			isOwner={isOwner}
			cookbookData={data}
			width={width}
		/>
	);
};

export default CookbookContainer;
