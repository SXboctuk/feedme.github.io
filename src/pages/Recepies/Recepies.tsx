import Card from '../../components/Card';
import ContentSearchTemplate from '../../components/ContentSearchTemplate';
import { routePath } from '../../constants/routePath';
import RecepiesFilter from './components/RecepiesFilter';
import { RecepiesContentWrapper } from './Recepies.Styled';
import { RecepiesProps } from './Recepies.Interface';

const Recepies = (props: RecepiesProps) => {
	const { filterOption, setFilterOption, RecepieById, RecepiesCard } = props;
	return (
		<>
			<ContentSearchTemplate
				leftElem={
					<RecepiesFilter
						filterOption={filterOption}
						setFilterOption={setFilterOption}
					/>
				}
				rightElem={
					<RecepiesContentWrapper>
						{RecepiesCard.map((elem) => {
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
									OptionType={'Recepie'}
								/>
							);
						})}
					</RecepiesContentWrapper>
				}
				selectedPage={'Recepies'}
			/>

			{RecepieById ? RecepieById : null}
		</>
	);
};

export default Recepies;
