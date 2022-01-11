import { t } from 'i18next';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Card from '../../components/Card';
import ContentSearchTemplate from '../../components/ContentSearchTemplate';
import { cookbooksMockData } from '../../constants/mocks/Cookbooks';
import { routePath } from '../../constants/routePath';
import { CardCookbook } from '../../interfaces/Cookbook';
import CookbooksFilter from './components/CookbooksFilter';
import { CookbooksFilterOption } from './components/CookbooksFilter/CookbooksFilter.Interface';
import { CookbooksContentMainGrid } from './Cookbooks.Styled';

export const initialCookbooksFilterOption: CookbooksFilterOption = {
	sortBy: 'popular',
	isVegetarian: false,
	isWithoutEggs: false,
	isWithoutMilk: false,

	isHideMyCookbooks: false,
};

const Cookbooks = () => {
	const params = useParams();

	const [cookbooks, setCookbooks] = useState<CardCookbook[]>();
	const [option, setOption] = useState<CookbooksFilterOption>(
		initialCookbooksFilterOption,
	);

	useEffect(() => {
		setCookbooks(cookbooksMockData);
	}, []);

	const filterElems = (): CardCookbook[] => {
		let filterElems: CardCookbook[] = cookbooks || [];

		if (filterElems.length < 1) {
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
					<CookbooksContentMainGrid>
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
									OptionItems={[
										{
											text: t(
												'OptionCard.cloneToMyCookBooks',
											),
											onClick: () =>
												console.log('cookbooks'),
										},
									]}
								/>
							);
						})}
					</CookbooksContentMainGrid>
				}
				selectedPage={'Cookbooks'}
			/>

			{params.id ? <div>params {params.id}</div> : null}
		</>
	);
};

export default Cookbooks;
