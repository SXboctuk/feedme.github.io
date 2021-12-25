import React from 'react';
import Button from '../../../../components/Button';
import InnerContainer from '../../../../components/InnerContainer';
import OuterContainer from '../../../../components/OuterContainer';
import { ISectionProps } from './Section.Interface';
import {
	ContainerBackgroundColor,
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
		colorNameTitle,
		buttonOnClick,
	} = props;
	if (background) {
		return (
			<SectionMainContainer>
				<OuterContainer>
					<ContainerBackgroundColor>
						<InnerContainer>
							<SectionNameTitle color={colorNameTitle}>
								{nameTitle}
							</SectionNameTitle>
							<SectionTitle>{title}</SectionTitle>
							<SectionContent>{children}</SectionContent>
							<SectionButtonCenterWrapper>
								<Button
									onClick={buttonOnClick}
									variant={variant}
								>
									{buttonText}
								</Button>
							</SectionButtonCenterWrapper>
						</InnerContainer>
					</ContainerBackgroundColor>
				</OuterContainer>
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
						<Button onClick={buttonOnClick} variant={variant}>
							{buttonText}
						</Button>
					</SectionButtonCenterWrapper>
				</InnerContainer>
			</SectionMainContainer>
		);
	}
};

export default Section;
