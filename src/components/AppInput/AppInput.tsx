import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import * as Styled from './AppInput.style';
import { colors } from '../../config/theme.json';

interface IProps {
  placeholder: string;
  secureTextEntry?: boolean | false;
  value?: string;
  error?: boolean;
  width?: number;
  password?: boolean;
  onEyeClick?: () => void;
  onChange: (text: string) => void;
}

const AppInput: React.FC<IProps> = ({
  placeholder,
  secureTextEntry,
  width = 0.78,
  value = '',
  error = false,
  password = false,
  onEyeClick,
  onChange,
}) => {

  return (
    <Styled.Container error={error} width={width}>
      <Styled.Input placeholder={placeholder} secureTextEntry={secureTextEntry} value={value} onChangeText={(e) => onChange(e)} placeholderTextColor={colors.gray} />
      {password ? (secureTextEntry ? <Icon name="eye-off" size={24} onPress={onEyeClick} /> : <Icon name="eye" size={24} onPress={onEyeClick} />) : <></>}
    </Styled.Container>
  )
}

export default AppInput;