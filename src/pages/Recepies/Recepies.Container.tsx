import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Recepies from '.';
import { recepiesMockData } from '../../constants/mocks/Recepies';
import { CardRecepie } from '../../interfaces/Recepie';
import { initialRecepiesFilterOption } from './Recepies.Constant';
import { RecepiesFilterOption } from './Recepies.Interface';

const RecepiesContainer = () => {
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

	return (
		<Recepies
			filterOption={option}
			setFilterOption={setOption}
			RecepieById={params.id ? params.id : null}
			RecepiesCard={filterItem()}
		/>
	);
};

export default RecepiesContainer;
