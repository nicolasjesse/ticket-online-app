import styled from 'styled-components/native';
import normalize from 'react-native-normalize';

import { Dimensions } from 'react-native';
import { colors } from '../../config/theme.json';

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

export const Title = styled.Text`
  margin-left: ${0.05 * Dimensions.get('window').width}px;
  font-size: ${normalize(22)}px;
  color: ${colors.black};
`;

export const InputWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: ${0.78 * Dimensions.get('window').width}px;
  height: ${0.07 * Dimensions.get('window').height}px;
`;

export const Form = styled.View`
  margin-top: ${0.06 * Dimensions.get('window').height}px;
  justify-content: space-between;
  height: ${0.4 * Dimensions.get('window').height}px;
`;

export const SubmitButtonWrapper = styled.View`
  margin-top: ${0.04 * Dimensions.get('window').height}px;
  height: ${0.07 * Dimensions.get('window').height}px;
  width: ${0.8 * Dimensions.get('window').width}px;
`;

export const PickerWrapper = styled.View`
  width: ${0.78 * Dimensions.get('window').width}px;
  height: ${0.07 * Dimensions.get('window').height}px;
  border-width: 1px;
  border-color: 'rgba(0, 0, 0, 0.6)';
`;