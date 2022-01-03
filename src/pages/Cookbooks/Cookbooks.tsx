import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Card from '../../components/Card';
import { CardProps } from '../../components/Card/Card.Interface';
import ContentSearchTemplate from '../../components/ContentSearchTemplate';
import { cookbooksMockData } from '../../constants/mocks/Cookbooks/Cookbooks';
import { routePath } from '../../constants/routePath';
import CookbooksContent from './components/CookbooksContent';
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

	const [cookbooks, setCookbooks] = useState<CardProps[]>();
	const [option, setOption] = useState<IFilterOption>(initialFilterOption);

	useEffect(() => {
		setCookbooks(cookbooksMockData);
	}, []);

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
				rightElem={
					<CookbooksContent>
						{cookbooks?.map((elem) => {
							return (
								<Card
									to={`${routePath.COOKBOOKS}/${elem.to}`}
									key={elem.key}
									text={elem.text}
									viewsCounter={elem.viewsCounter}
									titleName={elem.titleName}
									creatorName={elem.creatorName}
									imageSrc={elem.imageSrc}
									likesCounter={elem.likesCounter}
									commentsCounter={elem.commentsCounter}
								/>
							);
						})}
					</CookbooksContent>
				}
				selectedPage={'Cookbooks'}
			/>

			{params.id ? <div>params {params.id}</div> : null}
		</>
	);
};

export default Cookbooks;
