import React from 'react';
import { useTranslation } from 'react-i18next';
import { Outlet, useNavigate } from 'react-router-dom';

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
import { ProfileRecepiesContentWrapper } from './ProfileRecepies.Styled';

const ProfileRecepies = (props: {
	userData: IUser;
	isOwner: boolean;
	userRecepies: CardRecepie[];
	error: string | null;
	loadingRecepies: boolean;
}) => {
	const {
		userData,

		isOwner,
		userRecepies,

		error,
		loadingRecepies,
	} = props;
	const { t } = useTranslation();
	const { width } = useWindowSize();
	const navigate = useNavigate();
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
							navigate('create');
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
			<Outlet />
		</>
	);
};

export default ProfileRecepies;
