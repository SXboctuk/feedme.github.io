import React from 'react';
import Card from '../../components/Card';
import ContentSearchTemplate from '../../components/ContentSearchTemplate';
import Spinner from '../../components/shared/Spinner';
import { routePath } from '../../constants/routePath';
import CookbooksFilter from './components/CookbooksFilter';
import { CookbooksProps } from './Cookbooks.Interface';
import { CookbooksContentMainGrid } from './Cookbooks.Styled';

const Cookbooks = (props: CookbooksProps) => {
	const {
		loading,
		error,
		filterOption,
		setFilterOption,
		CookbooksCard,
		CookbookById,
	} = props;
	if (error) {
		return <div>{error}</div>;
	}
	return (
		<>
			<ContentSearchTemplate
				leftElem={
					<CookbooksFilter
						filterOption={filterOption}
						setFilterOption={setFilterOption}
					/>
				}
				rightElem={
					loading ? (
						<Spinner />
					) : (
						<CookbooksContentMainGrid>
							{CookbooksCard.map((elem) => {
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
										OptionType={'Cookbook'}
									/>
								);
							})}
						</CookbooksContentMainGrid>
					)
				}
				selectedPage={'Cookbooks'}
			/>

			{CookbookById ? CookbookById : null}
		</>
	);
};

export default Cookbooks;
