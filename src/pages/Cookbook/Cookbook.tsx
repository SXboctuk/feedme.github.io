import React from 'react';
import { useTranslation } from 'react-i18next';
import CommentsBlock from '../../components/CommentsBlock';
import Button from '../../components/shared/Button';
import Card from '../../components/shared/Card';
import Container from '../../components/shared/Container';
import ModalWindowContainer from '../../components/shared/ModalWindow/ModalWindow.Container';
import SvgComment from '../../components/Svg/SvgComment';
import SvgHeart from '../../components/Svg/SvgHeart';
import SvgWatch from '../../components/Svg/SvgWatch';
import { routePath } from '../../constants/routePath';
import styles from '../../constants/stylesProperty';
import { ICookbook } from '../../interfaces/Cookbook';
import {
	CookbookHeaderBlock,
	CookbookMainTitle,
	CookbookCreatorBlock,
	CookbookCreator,
	CookbookContentGridBlock,
	CookbookImage,
	CookbookContentTextBlock,
	CookbookTitle,
	CookbookMainText,
	CookbookSocialBlock,
	CookbookSocial,
	CookbookCounter,
	CookbookRecepiesBlock,
	CookbookWrapper,
	CookbookBlock,
	CookbookButtonWrapper,
	CookbookImageWrapper,
	CookbookRecepies,
} from './Cookbook.Styled';

const Cookbook = (props: {
	cookbookData: ICookbook;
	width: number;
	isAuth: boolean;
	isOwner: boolean;
}) => {
	const { cookbookData, width, isOwner, isAuth } = props;
	const {
		comments,
		creatorId,
		creatorName,
		id,
		image,
		likes,
		mainText,
		recepies,
		title,
		views,
	} = cookbookData;
	const { t } = useTranslation();

	return (
		<ModalWindowContainer>
			<Container maxWidth={'1016px'}>
				<CookbookWrapper>
					<CookbookBlock>
						<CookbookHeaderBlock>
							<CookbookMainTitle>{title}</CookbookMainTitle>
							<CookbookButtonWrapper>
								{isAuth && !isOwner ? (
									<Button variant={'solid'}>
										{t('CloneToMyCookbooks')}
									</Button>
								) : null}
							</CookbookButtonWrapper>
						</CookbookHeaderBlock>
						<CookbookCreatorBlock>
							<CookbookCreator to={routePath.PROFILE + creatorId}>
								{creatorName}
							</CookbookCreator>
						</CookbookCreatorBlock>
						<CookbookContentGridBlock>
							<CookbookImageWrapper>
								<CookbookImage src={image} />
							</CookbookImageWrapper>

							<CookbookContentTextBlock>
								<CookbookTitle>
									{t('description')}
								</CookbookTitle>
								<CookbookMainText>{mainText}</CookbookMainText>
							</CookbookContentTextBlock>
						</CookbookContentGridBlock>
						<CookbookSocialBlock>
							<CookbookSocial>
								<SvgHeart />
								<CookbookCounter>
									{likes} {t('likes')}
								</CookbookCounter>
							</CookbookSocial>
							<CookbookSocial>
								<SvgComment />
								<CookbookCounter>
									{comments.length} {t('comments')}
								</CookbookCounter>
							</CookbookSocial>
							<CookbookSocial>
								<SvgWatch />
								<CookbookCounter>
									{views} {t('views')}
								</CookbookCounter>
							</CookbookSocial>
						</CookbookSocialBlock>
						<CookbookRecepiesBlock>
							<CookbookTitle>{t('recepies')}</CookbookTitle>
							<CookbookRecepies>
								{width >= parseInt(styles.screenSize.sm)
									? recepies.map((elem) => {
											return (
												<Card
													to={`${routePath.RECEPIES}/${elem.to}`}
													key={elem.key}
													text={elem.text}
													viewsCounter={
														elem.viewsCounter
													}
													titleName={elem.titleName}
													creatorName={
														elem.creatorName
													}
													imageSrc={elem.imageSrc}
													likesCounter={
														elem.likesCounter
													}
													commentsCounter={
														elem.commentsCounter
													}
													type="wide"
													OptionType={'Recepie'}
													creatorId={elem.creatorId}
												/>
											);
									  })
									: recepies.map((elem) => {
											return (
												<Card
													to={`${routePath.RECEPIES}/${elem.to}`}
													key={elem.key}
													text={elem.text}
													viewsCounter={
														elem.viewsCounter
													}
													titleName={elem.titleName}
													creatorName={
														elem.creatorName
													}
													imageSrc={elem.imageSrc}
													likesCounter={
														elem.likesCounter
													}
													commentsCounter={
														elem.commentsCounter
													}
													OptionType={'Recepie'}
													creatorId={elem.creatorId}
												/>
											);
									  })}
							</CookbookRecepies>
						</CookbookRecepiesBlock>
					</CookbookBlock>
					<CommentsBlock
						comments={comments}
						handlerSendComment={(str) => {
							alert(str);
						}}
					/>
				</CookbookWrapper>
			</Container>
		</ModalWindowContainer>
	);
};

export default Cookbook;
