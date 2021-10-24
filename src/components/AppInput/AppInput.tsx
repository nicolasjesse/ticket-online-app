import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import * as S from './AppInput.style';
import { colors } from '../../config/theme.json';

interface IProps {
  placeholder: string;
  secureTextEntry?: boolean | false;
  value?: string;
  error?: boolean;
  password?: boolean;
  onEyeClick?: () => void;
  onChange: (text: string) => void;
}

const AppInput: React.FC<IProps> = ({
  placeholder,
  secureTextEntry,
  value = '',
  error = false,
  password = false,
  onEyeClick,
  onChange,
}) => {

  return (
    <S.Container error={error}>
      <S.Input placeholder={placeholder} secureTextEntry={secureTextEntry} value={value} onChangeText={(e) => onChange(e)} placeholderTextColor={colors.gray} />
      {password ? (secureTextEntry ? <Icon name="eye-off" size={24} onPress={onEyeClick} /> : <Icon name="eye" size={24} onPress={onEyeClick} />) : <></>}
    </S.Container>
  )
}

export default AppInput;