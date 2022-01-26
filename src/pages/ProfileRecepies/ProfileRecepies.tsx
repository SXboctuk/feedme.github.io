import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import ContentWrapper from '../../components/ContentWrapper';
import ProfileHeader from '../../components/ProfileHeader';
import ProfileNavigation from '../../components/ProfileNavigation';
import Card from '../../components/shared/Card';
import Container from '../../components/shared/Container';
import styles from '../../constants/stylesProperty';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import useWindowSize from '../../hooks/useWindowSize';
import { CardRecepie } from '../../interfaces/CardRecipe';
import { IUser } from '../../interfaces/User';
import CreateRecepie from '../CreateRecepie';
import RecipeContainer from '../Recipe/Recipe.Container';
import { ProfileRecepiesContentWrapper } from './ProfileRecepies.Styled';

import data from '/src/constants/mocks/RecepiesCard.json';

const ProfileRecepies = (props: { create?: true }) => {
	const { create } = props;
	const { t } = useTranslation();
	const params = useParams();
	const { id, userName, image, userText } = useTypedSelector(
		(state) => state.userReducer,
	);
	const { width } = useWindowSize();
	const [userData, setUserData] = useState<IUser>({
		userName: '',
		imageSrc: '',
		userText: '',
	});
	const [userRecepies, setUserRecepies] = useState<CardRecepie[]>([]);
	const [showCreate, setShowCreate] = useState(create || false);
	const isOwner = params.id === id;
	useEffect(() => {
		if (isOwner) {
			setUserData({
				userName: userName,
				imageSrc: image,
				userText: userText,
			});
		} else {
			//fetch user by params.id
			setUserData({
				userName: 'UserName',
				imageSrc: '/public/assets/images/SignIn.jpg',
				userText: 'UserTEXT',
			});
		}
		//fetch user recepies by params.id
		setUserRecepies(data);
	}, []);

	return (
		<>
			<ContentWrapper>
				<Container maxWidth={styles.screenSize.lg}>
					<ProfileHeader
						imageSrc={userData.imageSrc}
						userName={userData.userName}
						userText={userData.userText}
					/>
					<ProfileNavigation
						itemSelect="recepies"
						buttonText={t('createNewRecepie')}
						handlerButton={() => {
							setShowCreate(true);
						}}
						isOwner={isOwner}
					/>
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
				</Container>
			</ContentWrapper>
			{params.recipeid ? <RecipeContainer id={params.recipeid} /> : null}
			{showCreate ? (
				<CreateRecepie
					handlerCloseButton={() => setShowCreate(false)}
				/>
			) : null}
		</>
	);
};

export default ProfileRecepies;
