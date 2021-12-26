import React from 'react';
import { useParams } from 'react-router-dom';

const Recipe = () => {
	const params = useParams();
	return <div>Recepies {params.id}</div>;
};

export default Recipe;
