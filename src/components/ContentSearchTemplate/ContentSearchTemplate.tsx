import React from 'react';
import styles from '../../constants/stylesProperty';
import Container from '../shared/Container';
import { ContentSearchTemplateProsp } from './ContentSearchTemplate.Interface';
import {
	ContentSearchTemplateWrapper,
	ContentSearchTemplateGrid1x3,
	ContentSearchTemplateRightElem,
	ContentSearchTemplateSelectedPageBlock,
	ContentSearchTemplateVariant,
} from './ContentSearchTemplate.Styled';

import { useTranslation } from 'react-i18next';
import { routePath } from '../../constants/routePath';

const ContentSearchTemplate = (props: ContentSearchTemplateProsp) => {
	const { t } = useTranslation();
	return (
		<ContentSearchTemplateWrapper>
			<Container maxWidth={styles.screenSize.lg}>
				<ContentSearchTemplateGrid1x3>
					{props.leftElem}
					<ContentSearchTemplateRightElem>
						<ContentSearchTemplateSelectedPageBlock>
							{props.selectedPage === 'Cookbooks' ? (
								<>
									<ContentSearchTemplateVariant
										to={'/' + routePath.COOKBOOKS}
										aria-selected
									>
										{t('cookbooks')}
									</ContentSearchTemplateVariant>
									<ContentSearchTemplateVariant
										to={'/' + routePath.RECEPIES}
									>
										{t('recepies')}
									</ContentSearchTemplateVariant>
								</>
							) : (
								<>
									<ContentSearchTemplateVariant
										to={'/' + routePath.COOKBOOKS}
									>
										{t('cookbooks')}
									</ContentSearchTemplateVariant>
									<ContentSearchTemplateVariant
										to={'/' + routePath.RECEPIES}
										aria-selected
									>
										{t('recepies')}
									</ContentSearchTemplateVariant>
								</>
							)}
						</ContentSearchTemplateSelectedPageBlock>
						{props.rightElem}
					</ContentSearchTemplateRightElem>
				</ContentSearchTemplateGrid1x3>
			</Container>
		</ContentSearchTemplateWrapper>
	);
};
export default ContentSearchTemplate;
