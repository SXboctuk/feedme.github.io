import React from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import ContentWrapper from '../../components/ContentWrapper';
import ProfileHeader from '../../components/ProfileHeader';
import ProfileNavigation from '../../components/ProfileNavigation';
import Container from '../../components/shared/Container';
import styles from '../../constants/stylesProperty';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import SettingsInput from './Components/SettingsInput/SettingsInput';
import {
	ProfileSettingsContentWrapper,
	ProfileSettingsMainTitle,
	ProfileSettingsItemsBlock,
} from './ProfileSettings.Styled';

const ProfileSettings = () => {
	const { t } = useTranslation();
	const params = useParams();
	const { id, userText, userName, email, image } = useTypedSelector(
		(state) => state.userReducer,
	);

	const isOwner = params.id === id;

	if (!isOwner) {
		return <div>Wooops</div>;
	}

	return (
		<>
			<ContentWrapper>
				<Container maxWidth={styles.screenSize.lg}>
					<ProfileHeader
						imageSrc={image}
						userName={userName}
						userText={userText}
						handlerPhotoClick={(e) => e}
					/>
					<ProfileNavigation
						itemSelect="settings"
						isOwner={isOwner}
					/>
					<ProfileSettingsContentWrapper>
						<ProfileSettingsMainTitle>
							{t('personalInformation')}
						</ProfileSettingsMainTitle>
						<ProfileSettingsItemsBlock>
							<SettingsInput
								buttonName={t('edit')}
								name={t('name')}
								value={userName}
								saveButton={(newValue) => newValue}
							/>
							<SettingsInput
								buttonName={t('edit')}
								name={t('email')}
								value={email}
								saveButton={(newValue) => newValue}
							/>
							<SettingsInput
								buttonName={t('changeMyPassword')}
								name={t('Password')}
								value={''}
								saveButton={(newValue) => newValue}
								isPassword
							/>
						</ProfileSettingsItemsBlock>
					</ProfileSettingsContentWrapper>
				</Container>
			</ContentWrapper>
		</>
	);
};

export default ProfileSettings;
