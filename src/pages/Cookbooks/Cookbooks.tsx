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
	sortBy: 'popular',
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

	const filterElems = (): CardProps[] => {
		let filterElems: CardProps[] = cookbooks || [];

		if (filterElems.length <= 1) {
			return filterElems;
		}

		if (option.isVegetarian) {
			filterElems = filterElems.filter(
				(elem) => elem.isVegatarian === true,
			);
		}
		if (option.isWithoutMilk) {
			filterElems = filterElems.filter(
				(elem) => elem.isWithoutMilk === true,
			);
		}
		if (option.isWithoutEggs) {
			filterElems = filterElems.filter(
				(elem) => elem.isWithoutEggs === true,
			);
		}
		if (option.isHideMyCookbooks) {
			// filterElem = filterElem.filter((elem) => elem.creatorId === myId);
		}

		if (option.sortBy === 'likes') {
			filterElems = filterElems.sort((a, b) => {
				if (
					typeof a.likesCounter === 'number' &&
					typeof b.likesCounter === 'number'
				) {
					return b.likesCounter - a.likesCounter;
				} else return 0;
			});
		} else if (option.sortBy === 'popular') {
			filterElems = filterElems.sort((a, b) => {
				if (
					typeof a.viewsCounter === 'number' &&
					typeof b.viewsCounter === 'number'
				) {
					return b.viewsCounter - a.viewsCounter;
				} else return 0;
			});
		}

		return filterElems;
	};

	const resultCookbooks = filterElems();
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
						{resultCookbooks?.map((elem) => {
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
