import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { regexString } from '../../../../constants/regex';
import {
    SettingItem,
    SettingsItemName,
    SettingsItemInput,
    SettingsItemButton,
    SettingItemWrapper,
    SettingsButtonsWrapper,
    SettingErrorText,
} from './SettingsInput.Styled';

const SettingsInput = (props: {
	value: string;
	name: string;
	buttonName: string;
	saveButton: (newValue: string) => Promise<boolean>;
	isPassword?: true;
	error?: string;
	handlerInputChange?: () => void;
	isEmail?: true;
}) => {
    const {
        value,
        name,
        buttonName,
        saveButton,
        isPassword,
        error,
        handlerInputChange,
        isEmail,
    } = props;
    const [showInput, setShowInput] = useState(false);
    const [newValue, setNewValue] = useState(value);
    const { t } = useTranslation();
    const handlerInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (isEmail) {
            if (
                e.target.value.match(regexString.IS_VALID_STRING_EMAIL) !== null
            ) {
                setNewValue(e.target.value);
                if (handlerInputChange) {
                    handlerInputChange();
                }
            }
        } else {
            if (e.target.value.match(regexString.IS_VALID_STRING) !== null) {
                setNewValue(e.target.value);
                if (handlerInputChange) {
                    handlerInputChange();
                }
            }
        }
    };

    return (
        <SettingItem>
            <SettingsItemName>{name}</SettingsItemName>
            {showInput ? (
                <>
                    <SettingItemWrapper>
                        <SettingsItemInput
                            style={{ width: newValue.length * 10.7 + 'px' }}
                            value={newValue}
                            onChange={handlerInput}
                            autoFocus
                        />
                    </SettingItemWrapper>
                    {error && error.length !== 0 ? (
                        <SettingErrorText>{error}</SettingErrorText>
                    ) : null}
                </>
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
                    <SettingsItemButton
                        onClick={async () => {
                            const res = await saveButton(newValue);

                            if (res) {
                                setShowInput(false);
                            }
                        }}
                    >
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
