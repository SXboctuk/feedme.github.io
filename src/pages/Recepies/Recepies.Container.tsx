import React, { useEffect, useState } from 'react';
import Recepies from '.';
import { useAction } from '../../hooks/useAction';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import useWindowSize from '../../hooks/useWindowSize';
import { CardRecepie } from '../../interfaces/CardRecipe';
import { initialRecepiesFilterOption } from './Recepies.Constant';
import { RecepiesFilterOption } from './Recepies.Interface';

const RecepiesContainer = () => {
	const [option, setOption] = useState<RecepiesFilterOption>(
		initialRecepiesFilterOption,
	);

	const { loading, error, recepies } = useTypedSelector(
		(state) => state.recepiesReducer,
	);

	const { fetchRecepies } = useAction();
	const { width } = useWindowSize();

	useEffect(() => {
		fetchRecepies();
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
			recepiesCard={filterItem()}
			loading={loading}
			error={error}
			width={width}
		/>
	);
};

export default RecepiesContainer;
