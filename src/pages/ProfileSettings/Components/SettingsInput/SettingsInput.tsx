import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
	SettingItem,
	SettingsItemName,
	SettingsItemInput,
	SettingsItemButton,
	SettingItemWrapper,
	SettingsButtonsWrapper,
} from './SettingsInput.Styled';

const SettingsInput = (props: {
	value: string;
	name: string;
	buttonName: string;
	saveButton: (newValue: string) => void;
	isPassword?: true;
}) => {
	const { value, name, buttonName, saveButton, isPassword } = props;
	const [showInput, setShowInput] = useState(false);
	const [newValue, setNewValue] = useState(value);
	const { t } = useTranslation();
	const handlerInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		setNewValue(e.target.value);
	};

	return (
		<SettingItem>
			<SettingsItemName>{name}</SettingsItemName>
			{showInput ? (
				<SettingItemWrapper>
					<SettingsItemInput
						style={{ width: newValue.length * 10.7 + 'px' }}
						value={newValue}
						onChange={handlerInput}
						autoFocus
					/>
				</SettingItemWrapper>
			) : (
				<SettingsItemInput
					style={{ width: newValue.length * 10.7 + 'px' }}
					value={isPassword ? '000000' : newValue}
					onChange={handlerInput}
					autoFocus
					disabled
					type={isPassword ? 'password' : ''}
				/>
			)}
			{showInput ? (
				<SettingsButtonsWrapper>
					<SettingsItemButton onClick={() => saveButton(newValue)}>
						{t('save')}
					</SettingsItemButton>
					<SettingsItemButton
						onClick={() => {
							setNewValue(value);
							setShowInput(false);
						}}
					>
						{t('close')}
					</SettingsItemButton>
				</SettingsButtonsWrapper>
			) : (
				<SettingsItemButton onClick={() => setShowInput(true)}>
					{buttonName}
				</SettingsItemButton>
			)}
		</SettingItem>
	);
};

export default SettingsInput;
