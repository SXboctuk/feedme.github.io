import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { CardProps } from '../../components/Card/Card.Interface';
import ContentSearchTemplate from '../../components/ContentSearchTemplate';
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

	const [recepies, setRecepies] = useState<CardProps[]>();
	const [option, setOption] = useState<RecepiesFilterOption>(
		initialRecepiesFilterOption,
	);

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
						{/* {resultCookbooks?.map((elem) => {
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
								/>
							);
						})} */}
					</RecepiesContentWrapper>
				}
				selectedPage={'Recepies'}
			/>

			{params.id ? <div>params {params.id}</div> : null}
		</>
	);
};

export default Recepies;
