import styled from 'styled-components/native';

import { Dimensions } from 'react-native';
import { colors } from '../../config/theme.json';

export const Header = styled.View`
  align-items: center;
  justify-content: center;
  height: ${0.095 * Dimensions.get('window').height}px;
  width: ${1 * Dimensions.get('window').width}px;
  border: 1px;
  border-color: ${colors.gray + '66'};
  background-color: ${colors.white};
`;

export const LogoImage = styled.Image`
  height: ${0.1 * Dimensions.get('window').height}px;
  width: ${0.35 * Dimensions.get('window').width}px;
`;

export const FilterText = styled.Text`
  position: absolute;
  top: ${0.01 * Dimensions.get('window').height}px;
  right: ${0.02 * Dimensions.get('window').width}px;
  color: ${colors.primary};
`;

export const PlusButton = styled.View`
  position: absolute;
  top: ${0.05 * Dimensions.get('window').height}px;
  right: ${0.03 * Dimensions.get('window').width}px;
  color: ${colors.primary};
`;
