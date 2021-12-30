import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { CardProps } from '../../components/Card/Card.Interface';
import ContentSearchTemplate from '../../components/ContentSearchTemplate';
import CookbooksFilter from './components/CookbooksFilter';
import { IFilterOption } from './components/CookbooksFilter/CookbooksFilter.Interface';

export const initialFilterOption: IFilterOption = {
	sortBy: 'test',
	isVegetarian: false,
	isWithoutEggs: false,
	isWithoutMilk: false,

	isHideMyCookbooks: false,
};

const Cookbooks = () => {
	const params = useParams();

	const [cookbooks, setCookbooks] = useState<CardProps>();
	const [option, setOption] = useState<IFilterOption>(initialFilterOption);
	console.log(option);
	return (
		<>
			<ContentSearchTemplate
				leftElem={
					<CookbooksFilter
						filterOption={option}
						setFilterOption={setOption}
					/>
				}
				rightElem={<div>right</div>}
				selectedPage={'Cookbooks'}
			/>

			{params.id ? <div>params {params.id}</div> : null}
		</>
	);
};

export default Cookbooks;
