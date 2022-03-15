import React from 'react';
import { useTranslation } from 'react-i18next';
import CommentsBlock from '../../components/CommentsBlock';
import Button from '../../components/shared/Button';
import Card from '../../components/shared/Card';
import Container from '../../components/shared/Container';
import ModalWindowContainer from '../../components/shared/ModalWindow/ModalWindow.Container';
import Spinner from '../../components/shared/Spinner';
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
	cookbookData: ICookbook | null;
	width: number;
	isAuth: boolean;
	isSaved: boolean;
	handlerLike: (e: React.MouseEvent<HTMLDivElement>) => void;
	isLikes: boolean;
	likesCounter: number;
	handlerSendComment: (str: string) => void;
}) => {
    const { t } = useTranslation();
    const {
        cookbookData,
        width,
        isSaved,
        isAuth,
        handlerLike,
        isLikes,
        likesCounter,
        handlerSendComment,
    } = props;
    if (cookbookData === null) {
        return <Spinner />;
    }
    const {
        comments,
        creatorId,
        creatorName,

        image,
        mainText,
        recepies,
        title,
        views,
    } = cookbookData;

    return (
        <ModalWindowContainer>
            <Container maxWidth={'1016px'}>
                <CookbookWrapper>
                    <CookbookBlock>
                        <CookbookHeaderBlock>
                            <CookbookMainTitle>{title}</CookbookMainTitle>
                            <CookbookButtonWrapper>
                                {isAuth && !isSaved ? (
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
                            <CookbookSocial
                                className={isLikes ? 'selected' : ''}
                                onClick={handlerLike}
                            >
                                <SvgHeart />
                                <CookbookCounter>
                                    {likesCounter} {t('likes')}
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
                                                to={`${elem.id}`}
                                                key={elem.id}
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
                                                isLikes={elem.isLikes}
                                                cardType={'recepie'}
                                                isSaved={elem.isSaved}
                                                noTo
                                            />
                                        );
									  })
                                    : recepies.map((elem) => {
                                        return (
                                            <Card
                                                to={`${elem.id}`}
                                                key={elem.id}
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
                                                isLikes={elem.isLikes}
                                                cardType={'recepie'}
                                                isSaved={elem.isSaved}
                                                noTo
                                            />
                                        );
									  })}
                            </CookbookRecepies>
                        </CookbookRecepiesBlock>
                    </CookbookBlock>
                    <CommentsBlock
                        comments={comments}
                        handlerSendComment={handlerSendComment}
                    />
                </CookbookWrapper>
            </Container>
        </ModalWindowContainer>
    );
};

export default Cookbook;
