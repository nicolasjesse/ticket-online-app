import styled from 'styled-components/native';
import normalize from 'react-native-normalize';

import { Dimensions } from 'react-native';
import { colors, fonts } from '../../config/theme.json';

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: ${colors.white};
`;

export const TitleWrapper = styled.View`
  align-items: center;
  flex-direction: row;
  margin-top: ${0.08 * Dimensions.get('window').height}px;
  width: ${1 * Dimensions.get('window').width}px;
`;

export const Rectangle = styled.View`
  height: ${0.1 * Dimensions.get('window').height}px;
  width: ${0.05 * Dimensions.get('window').width}px;
  background-color: ${colors.default};
`;

export const Title = styled.Text`
  margin-left: ${0.05 * Dimensions.get('window').width}px;
  font-size: ${normalize(22)}px;
  color: ${colors.black};
  font-family: ${fonts.regular};
`;

export const TextLink = styled.TouchableOpacity`
`;

export const PasswordRecoveryText = styled.Text`
`;

export const RegisterText = styled.Text`
`;

export const Form = styled.View`
  margin-top: ${0.16 * Dimensions.get('window').height}px;
  justify-content: space-between;
  height: ${0.154 * Dimensions.get('window').height}px;
`;

export const FormSubmit = styled.View`
  align-items: center;
  margin-bottom: ${0.01 * Dimensions.get('window').height}px;
`;

export const EnterButtonWrapper = styled.View`
  margin-top: ${0.04 * Dimensions.get('window').height}px;
  height: ${0.07 * Dimensions.get('window').height}px;
  width: ${0.8 * Dimensions.get('window').width}px;
`;

export const ForgetPasswordWrapper = styled.View`
  height: ${0.05 * Dimensions.get('window').height}px;
  width: ${0.8 * Dimensions.get('window').width}px;
`;

export const NoAccountWrapper = styled.View`
  height: ${0.03 * Dimensions.get('window').height}px;
  width: ${0.8 * Dimensions.get('window').width}px;
`;