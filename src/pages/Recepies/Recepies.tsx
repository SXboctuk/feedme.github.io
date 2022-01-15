import Card from '../../components/Card';
import ContentSearchTemplate from '../../components/ContentSearchTemplate';
import { routePath } from '../../constants/routePath';
import RecepiesFilter from './components/RecepiesFilter';
import { RecepiesContentWrapper } from './Recepies.Styled';
import { RecepiesProps } from './Recepies.Interface';
import Spinner from '../../components/shared/Spinner';
import styles from '../../constants/stylesProperty';

const Recepies = (props: RecepiesProps) => {
	const {
		loading,
		error,
		filterOption,
		setFilterOption,
		recepieById,
		recepiesCard,
		width,
	} = props;
	if (error) {
		return <div>{error}</div>;
	}

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
					loading ? (
						<Spinner />
					) : (
						<RecepiesContentWrapper>
							{width >= parseInt(styles.screenSize.sm)
								? recepiesCard.map((elem) => {
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
												commentsCounter={
													elem.commentsCounter
												}
												type="wide"
												OptionType={'Recepie'}
												creatorId={elem.creatorId}
											/>
										);
								  })
								: recepiesCard.map((elem) => {
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
												commentsCounter={
													elem.commentsCounter
												}
												OptionType={'Recepie'}
												creatorId={elem.creatorId}
											/>
										);
								  })}
							{/* {recepiesCard.map((elem) => {
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
										creatorId={elem.creatorId}
									/>
								);
							})} */}
						</RecepiesContentWrapper>
					)
				}
				selectedPage={'Recepies'}
			/>

			{recepieById ? recepieById : null}
		</>
	);
};

export default Recepies;
