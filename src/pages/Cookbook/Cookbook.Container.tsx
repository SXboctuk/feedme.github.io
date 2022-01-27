import React from 'react';
import Cookbook from '.';
import { cookbookMockData } from '../../constants/mocks/Cookbook';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import useWindowSize from '../../hooks/useWindowSize';

const CookbookContainer = (props: { id: string }) => {
	const { id, isAuth } = useTypedSelector((state) => state.userReducer);
	const { width } = useWindowSize();

	//fetch cookbook from server by id
	console.log('cookbookid' + props.id);
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
