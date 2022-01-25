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
import { CardCookbook } from '../../interfaces/CardCookbook';
import { IUser } from '../../interfaces/User';
import CookbookContainer from '../Cookbook/Cookbook.Container';
import { ProfileCookbooksContentWrapper } from './ProfileCookbook.Styled';

import data from '/src/constants/mocks/CookbooksCard.json';

const ProfileCookbooks = () => {
	const { t } = useTranslation();
	const params = useParams();
	const { id, image, userName, userText } = useTypedSelector(
		(state) => state.userReducer,
	);
	const [userData, setUserData] = useState<IUser>({
		userName: '',
		imageSrc: '',
		userText: '',
	});
	const isOwner = params.id === id;
	const [userCookbooks, setUserCookbooks] = useState<CardCookbook[]>([]);
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
		setUserCookbooks(data);
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
						itemSelect="cookbooks"
						buttonText={t('createNewCookbook')}
						handlerButton={(e) => e}
						isOwner={isOwner}
					/>
					<ProfileCookbooksContentWrapper>
						{userCookbooks.map((elem) => {
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
									commentsCounter={elem.commentsCounter}
									OptionType={'Cookbook'}
									creatorId={elem.creatorId}
								/>
							);
						})}
					</ProfileCookbooksContentWrapper>
				</Container>
			</ContentWrapper>
			{params.cookbookid ? (
				<CookbookContainer id={params.cookbookid} />
			) : null}
		</>
	);
};

export default ProfileCookbooks;
