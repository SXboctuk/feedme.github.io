import React from 'react';
import Button from '../../../../components/Button';
import InnerContainer from '../../../../components/InnerContainer';
import { ISectionProps } from './Section.Interface';
import {
	SectionButtonCenterWrapper,
	SectionContent,
	SectionMainContainer,
	SectionNameTitle,
	SectionTitle,
} from './Section.Styled';

const Section = (props: ISectionProps) => {
	const {
		children,
		variant,
		nameTitle,
		title,
		buttonText,
		background,
		nameTitleColor,
	} = props;
	if (background) {
		return (
			<SectionMainContainer>
				<InnerContainer>
					<SectionNameTitle color={nameTitleColor}>
						{nameTitle}
					</SectionNameTitle>
					<SectionTitle>{title}</SectionTitle>
					<SectionContent>{children}</SectionContent>
					<SectionButtonCenterWrapper>
						<Button variant={variant}>{buttonText}</Button>
					</SectionButtonCenterWrapper>
				</InnerContainer>
			</SectionMainContainer>
		);
	} else {
		return (
			<SectionMainContainer>
				<InnerContainer>
					<SectionNameTitle>{nameTitle}</SectionNameTitle>
					<SectionTitle>{title}</SectionTitle>
					<SectionContent>{children}</SectionContent>
					<SectionButtonCenterWrapper>
						<Button variant={variant}>{buttonText}</Button>
					</SectionButtonCenterWrapper>
				</InnerContainer>
			</SectionMainContainer>
		);
	}
};

export default Section;
