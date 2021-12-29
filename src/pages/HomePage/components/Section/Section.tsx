import React from 'react';
import Button from '../../../../components/shared/Button';
import Container from '../../../../components/shared/Container';
import styles from '../../../../constants/stylesProperty';
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
				<Container maxWidth={styles.screenSize.xl}>
					<ContainerBackgroundColor>
						<Container maxWidth={styles.screenSize.lg}>
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
						</Container>
					</ContainerBackgroundColor>
				</Container>
			</SectionMainContainer>
		);
	} else {
		return (
			<SectionMainContainer>
				<Container maxWidth={styles.screenSize.lg}>
					<SectionNameTitle>{nameTitle}</SectionNameTitle>
					<SectionTitle>{title}</SectionTitle>
					<SectionContent>{children}</SectionContent>
					<SectionButtonCenterWrapper>
						<Button onClick={buttonOnClick} variant={variant}>
							{buttonText}
						</Button>
					</SectionButtonCenterWrapper>
				</Container>
			</SectionMainContainer>
		);
	}
};

export default Section;
