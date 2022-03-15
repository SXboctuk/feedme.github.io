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

import { CardCookbook } from '../../interfaces/CardCookbook';
import { IUser } from '../../interfaces/User';

import { ProfileCookbooksContentWrapper } from './ProfileCookbook.Styled';

const ProfileCookbooks = (props: {
	userData: IUser;
	isOwner: boolean;
	userCookbooks: CardCookbook[];
	error: string | null;
	loadingCookbooks: boolean;
}) => {
    const {
        userData,
        isOwner,
        userCookbooks,

        error,
        loadingCookbooks,
    } = props;
    const { t } = useTranslation();
    const navigate = useNavigate();

    if (error) return <div>{error}</div>;
    return (
        <>
            <ContentWrapper>
                <Container maxWidth={styles.screenSize.lg}>
                    <ProfileHeader
                        isOwner={false}
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
                        handlerButton={() => navigate('create')}
                        isOwner={isOwner}
                    />
                    {loadingCookbooks ? (
                        <Spinner />
                    ) : (
                        <ProfileCookbooksContentWrapper>
                            {userCookbooks.map((elem) => {
                                return (
                                    <Card
                                        to={`./${elem.id}`}
                                        key={elem.id}
                                        text={elem.text}
                                        viewsCounter={elem.viewsCounter}
                                        titleName={elem.titleName}
                                        creatorName={elem.creatorName}
                                        imageSrc={elem.imageSrc}
                                        likesCounter={elem.likesCounter}
                                        commentsCounter={elem.commentsCounter}
                                        OptionType={'Cookbook'}
                                        creatorId={elem.creatorId}
                                        isLikes={elem.isLikes}
                                        cardType={'recepie'}
                                        isSaved={elem.isSaved}
                                    />
                                );
                            })}
                        </ProfileCookbooksContentWrapper>
                    )}
                </Container>
            </ContentWrapper>
            <Outlet />
        </>
    );
};

export default ProfileCookbooks;
