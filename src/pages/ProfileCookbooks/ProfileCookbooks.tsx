import { Dispatch } from 'react';
import { useTranslation } from 'react-i18next';
import ContentWrapper from '../../components/ContentWrapper';
import ProfileHeader from '../../components/ProfileHeader';
import ProfileNavigation from '../../components/ProfileNavigation';
import Card from '../../components/shared/Card';
import Container from '../../components/shared/Container';
import Spinner from '../../components/shared/Spinner';
import styles from '../../constants/stylesProperty';

import { CardCookbook } from '../../interfaces/CardCookbook';
import { IUser } from '../../interfaces/User';

import CookbookContainer from '../Cookbook/Cookbook.Container';
import CreateCookbook from '../CreateCookbook';
import { ProfileCookbooksContentWrapper } from './ProfileCookbook.Styled';

const ProfileCookbooks = (props: {
	userData: IUser;
	isOwner: boolean;
	userCookbooks: CardCookbook[];
	cookbookid: string | undefined;
	showCreate: boolean;
	setShowCreate: Dispatch<boolean>;
	error: string | null;
	loadingCookbooks: boolean;
}) => {
	const {
		showCreate,
		userData,
		setShowCreate,
		isOwner,
		userCookbooks,
		cookbookid,
		error,
		loadingCookbooks,
	} = props;
	const { t } = useTranslation();

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
						itemSelect="cookbooks"
						buttonText={t('createNewCookbook')}
						handlerButton={() => setShowCreate(true)}
						isOwner={isOwner}
					/>
					{loadingCookbooks ? (
						<Spinner />
					) : (
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
					)}
				</Container>
			</ContentWrapper>
			{cookbookid && cookbookid !== 'create' ? (
				<CookbookContainer id={cookbookid} />
			) : null}
			{cookbookid === 'create' || showCreate ? (
				<CreateCookbook
					handlerCloseButton={() => setShowCreate(false)}
				/>
			) : null}
		</>
	);
};

export default ProfileCookbooks;
