import React from 'react';
import InnerContainer from '../InnerContainer';
import SecondBackground from '../SecondBackground';
import { ContentSearchTemplateProsp } from './ContentSearchTemplate.Interface';
import {
	ContentSearchTemplateWrapper,
	ContentSearchTemplateGrid1x3,
	ContentSearchTemplateRightElem,
	ContentSearchTemplateSelectedPageBlock,
	ContentSearchTemplateVariant,
} from './ContentSearchTemplate.Styled';

const ContentSearchTemplate = (props: ContentSearchTemplateProsp) => {
	return (
		<SecondBackground>
			<ContentSearchTemplateWrapper>
				<InnerContainer>
					<ContentSearchTemplateGrid1x3>
						{props.leftElem}
						<ContentSearchTemplateRightElem>
							<ContentSearchTemplateSelectedPageBlock>
								{props.selectedPage === 'Cookbooks' ? (
									<>
										<ContentSearchTemplateVariant
											aria-selected
										>
											Cookbooks
										</ContentSearchTemplateVariant>
										<ContentSearchTemplateVariant>
											Recepies
										</ContentSearchTemplateVariant>
									</>
								) : (
									<>
										<ContentSearchTemplateVariant>
											Cookbooks
										</ContentSearchTemplateVariant>
										<ContentSearchTemplateVariant
											aria-selected
										>
											Recepies
										</ContentSearchTemplateVariant>
									</>
								)}
							</ContentSearchTemplateSelectedPageBlock>
							{props.rightElem}
						</ContentSearchTemplateRightElem>
					</ContentSearchTemplateGrid1x3>
				</InnerContainer>
			</ContentSearchTemplateWrapper>
		</SecondBackground>
	);
};
export default ContentSearchTemplate;
