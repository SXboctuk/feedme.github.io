import Card from '../../components/shared/Card';
import ContentSearchTemplate from '../../components/ContentSearchTemplate';
import RecepiesFilter from './components/RecepiesFilter';
import { RecepiesContentWrapper } from './Recepies.Styled';
import { RecepiesProps } from './Recepies.Interface';
import Spinner from '../../components/shared/Spinner';
import styles from '../../constants/stylesProperty';
import ContentWrapper from '../../components/ContentWrapper';
import { Outlet } from 'react-router-dom';

const Recepies = (props: RecepiesProps) => {
	const {
		loading,
		error,
		filterOption,
		setFilterOption,
		recepiesCard,
		width,
	} = props;
	if (error) {
		return <div>{error}</div>;
	}

	return (
		<ContentWrapper>
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
												to={`${elem.id}`}
												key={elem.id}
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
												isLikes={elem.isLikes}
												cardType={'recepie'}
											/>
										);
								  })
								: recepiesCard.map((elem) => {
										return (
											<Card
												to={`$${elem.id}`}
												key={elem.id}
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
												isLikes={elem.isLikes}
												cardType={'recepie'}
											/>
										);
								  })}
						</RecepiesContentWrapper>
					)
				}
				selectedPage={'Recepies'}
			/>

			<Outlet />
		</ContentWrapper>
	);
};

export default Recepies;
