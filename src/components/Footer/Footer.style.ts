import styled from 'styled-components/native';
import normalize from 'react-native-normalize';

import { Dimensions } from 'react-native';
import { colors } from '../../config/theme.json';

interface IconWrapperProps {
  active?: boolean;
}

export const Footer = styled.View`
  flex-direction: row;
  justify-content: center;
  position: absolute;
  bottom: 0;
  height: ${0.09 * Dimensions.get('window').height}px;
  width: ${1 * Dimensions.get('window').width}px;
  border: 1px;
  border-color: ${colors.primary+'66'};
`;

export const LabeledIconWrapper = styled.TouchableOpacity`
  width: ${0.25 * Dimensions.get('window').width}px;
  align-items: center;
`;

export const IconWrapper = styled.View`
  align-items: center;
  justify-content: center;
  margin-top: ${0.005 * Dimensions.get('window').height}px;
  width: ${0.1 * Dimensions.get('window').width}px;
  height: ${0.045 * Dimensions.get('window').height}px;
  border-radius: 5px;
  background-color: ${(props: IconWrapperProps) => props.active ? colors.primary : colors.gray};
`;

export const IconLabel = styled.Text`
  font-size: ${normalize(12)}px;
  font-weight: bold;
  color: ${(props: IconWrapperProps) => props.active ? colors.primary : colors.gray};
`;
