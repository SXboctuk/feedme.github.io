import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Card from '../../components/Card';
import ContentSearchTemplate from '../../components/ContentSearchTemplate';
import { recepiesMockData } from '../../constants/mocks/Recepies';
import { routePath } from '../../constants/routePath';
import { CardRecepie } from '../../interfaces/Recepie';
import RecepiesFilter from './components/RecepiesFilter';
import { RecepiesFilterOption } from './components/RecepiesFilter/Recepies.Interface';
import { RecepiesContentWrapper } from './Recepies.Styled';

export const initialRecepiesFilterOption: RecepiesFilterOption = {
	sortBy: 'popular',
	cookingTimeFrom: 0,
	cookingTimeTo: 240,
};

const Recepies = () => {
	const params = useParams();

	const [recepies, setRecepies] = useState<CardRecepie[]>();
	const [option, setOption] = useState<RecepiesFilterOption>(
		initialRecepiesFilterOption,
	);

	useEffect(() => {
		setRecepies(recepiesMockData);
	}, []);
	const filterItem = (): CardRecepie[] => {
		let filterElems: CardRecepie[] = recepies || [];

		if (filterElems.length < 1) {
			return filterElems;
		}

		filterElems = filterElems.filter(
			(elem) =>
				elem.cookingTime >= option.cookingTimeFrom &&
				elem.cookingTime <= option.cookingTimeTo,
		);

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
	const resultRecepies = filterItem();
	return (
		<>
			<ContentSearchTemplate
				leftElem={
					<RecepiesFilter
						filterOption={option}
						setFilterOption={setOption}
					/>
				}
				rightElem={
					<RecepiesContentWrapper>
						{resultRecepies?.map((elem) => {
							return (
								<Card
									to={`${routePath.RECEPIES}/${elem.to}`}
									key={elem.key}
									text={elem.text}
									viewsCounter={elem.viewsCounter}
									titleName={elem.titleName}
									creatorName={elem.creatorName}
									imageSrc={elem.imageSrc}
									likesCounter={elem.likesCounter}
									commentsCounter={elem.commentsCounter}
									type="wide"
								/>
							);
						})}
					</RecepiesContentWrapper>
				}
				selectedPage={'Recepies'}
			/>

			{params.id ? <div>params {params.id}</div> : null}
		</>
	);
};

export default Recepies;
