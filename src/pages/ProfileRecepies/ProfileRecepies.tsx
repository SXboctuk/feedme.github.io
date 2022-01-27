import React, { Dispatch } from 'react';
import { useTranslation } from 'react-i18next';

import ContentWrapper from '../../components/ContentWrapper';
import ProfileHeader from '../../components/ProfileHeader';
import ProfileNavigation from '../../components/ProfileNavigation';
import Card from '../../components/shared/Card';
import Container from '../../components/shared/Container';
import Spinner from '../../components/shared/Spinner';
import styles from '../../constants/stylesProperty';
import useWindowSize from '../../hooks/useWindowSize';
import { CardRecepie } from '../../interfaces/CardRecipe';
import { IUser } from '../../interfaces/User';
import CreateRecepie from '../CreateRecepie';
import RecipeContainer from '../Recipe/Recipe.Container';
import { ProfileRecepiesContentWrapper } from './ProfileRecepies.Styled';

const ProfileRecepies = (props: {
	userData: IUser;
	isOwner: boolean;
	userRecepies: CardRecepie[];
	recipeid: string | undefined;
	showCreate: boolean;
	setShowCreate: Dispatch<boolean>;
	error: string | null;
	loadingRecepies: boolean;
}) => {
	const {
		showCreate,
		userData,
		setShowCreate,
		isOwner,
		userRecepies,
		recipeid,
		error,
		loadingRecepies,
	} = props;
	const { t } = useTranslation();
	const { width } = useWindowSize();
	// const params = useParams();
	// const { id, userName, image, userText } = useTypedSelector(
	// 	(state) => state.userReducer,
	// );

	// const [userData, setUserData] = useState<IUser>({
	// 	userName: '',
	// 	imageSrc: '',
	// 	userText: '',
	// });
	// const [userRecepies, setUserRecepies] = useState<CardRecepie[]>([]);
	// const [showCreate, setShowCreate] = useState(create || false);
	// const isOwner = params.id === id;
	// useEffect(() => {
	// 	if (isOwner) {
	// 		setUserData({
	// 			userName: userName,
	// 			imageSrc: image,
	// 			userText: userText,
	// 		});
	// 	} else {
	// 		//fetch user by params.id
	// 		setUserData({
	// 			userName: 'UserName',
	// 			imageSrc: '/public/assets/images/SignIn.jpg',
	// 			userText: 'UserTEXT',
	// 		});
	// 	}
	// 	//fetch user recepies by params.id
	// 	setUserRecepies(data);
	// }, []);
	if (error) return <div>Error</div>;
	return (
		<>
			<ContentWrapper>
				<Container maxWidth={styles.screenSize.lg}>
					<ProfileHeader
						imageSrc={
							userData.imageSrc === ''
								? '/public/assets/images/userDefault.png'
								: userData.imageSrc
						}
						userName={
							userData.userName === ''
								? 'Loading...'
								: userData.userName
						}
						userText={
							userData.userText === ''
								? 'Loading...'
								: userData.userText
						}
					/>
					<ProfileNavigation
						itemSelect="recepies"
						buttonText={t('createNewRecepie')}
						handlerButton={() => {
							setShowCreate(true);
						}}
						isOwner={isOwner}
					/>
					{loadingRecepies ? (
						<Spinner />
					) : (
						<ProfileRecepiesContentWrapper>
							{width >= parseInt(styles.screenSize.sm)
								? userRecepies.map((elem) => {
										return (
											<Card
												to={`./${elem.to}`}
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
								: userRecepies.map((elem) => {
										return (
											<Card
												to={`./${elem.to}`}
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
						</ProfileRecepiesContentWrapper>
					)}
				</Container>
			</ContentWrapper>
			{recipeid ? <RecipeContainer id={recipeid} /> : null}
			{showCreate ? (
				<CreateRecepie
					handlerCloseButton={() => setShowCreate(false)}
				/>
			) : null}
		</>
	);
};

export default ProfileRecepies;
