import React from 'react';
import Cookbook from '.';
import { cookbookMockData } from '../../constants/mocks/Cookbook';
import useWindowSize from '../../hooks/useWindowSize';

const CookbookContainer = (props: { id: string }) => {
	//fetch cookbook from server by id
	const data = cookbookMockData;
	console.log(props.id);
	const { width } = useWindowSize();
	return <Cookbook cookbookData={data} width={width} />;
};

export default CookbookContainer;
