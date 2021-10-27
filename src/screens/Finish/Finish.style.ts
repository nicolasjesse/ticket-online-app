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
  margin-top: ${0.02 * Dimensions.get('window').height}px;
  width: ${1 * Dimensions.get('window').width}px;
`;

export const Title = styled.Text`
  margin-left: ${0.05 * Dimensions.get('window').width}px;
  font-size: ${normalize(22)}px;
  color: ${colors.black};
`;

export const TicketsWrapper = styled.View`
  height: ${0.5 * Dimensions.get('window').height}px;
  width: ${1 * Dimensions.get('window').width}px;
  padding-top: ${0.01 * Dimensions.get('window').height}px;
  align-items: center;
  border-top-width: 1px;
  border-bottom-width: 1px;
  border-color: ${colors.gray + '55'};
  `;

export const OptionsWrapper = styled.View`
  margin-top: ${0.02 * Dimensions.get('window').height}px;
  height: ${0.12 * Dimensions.get('window').height}px;
  `;

export const OptionItem = styled.View`
  width: ${0.9 * Dimensions.get('window').width}px;
  `;

export const OptionItemLabel = styled.Text`
  color: ${colors.black + 'AA'};
  margin-left: ${0.02 * Dimensions.get('window').width}px;
  `;

export const OptionItemButton = styled.TouchableOpacity`
  margin-top: ${0.01 * Dimensions.get('window').height}px;
  height: ${0.043 * Dimensions.get('window').height}px;
  width: ${0.9 * Dimensions.get('window').width}px;
  padding-left: ${0.03 * Dimensions.get('window').width}px;
  padding-right: ${0.03 * Dimensions.get('window').width}px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 5px;
  background-color: ${colors.black + '88'};
  `;

export const OptionItemButtonLabel = styled.Text`
  width: ${0.7 * Dimensions.get('window').width}px;
  margin-left: ${0.03 * Dimensions.get('window').width}px;
  color: ${colors.white};
  `;

export const TotalTextWrapper = styled.View`
  margin-top: ${0.01 * Dimensions.get('window').height}px;
  width: ${0.85 * Dimensions.get('window').width}px;
  flex-direction: row;
  justify-content: space-between;
  `;

export const TotalText = styled.Text`
  color: ${colors.primary};
  font-weight: bold;
`;

export const ButtonWrapper = styled.View`
  margin-top: ${0.04 * Dimensions.get('window').height}px;
  height: ${0.045 * Dimensions.get('window').height}px;
  width: ${0.9 * Dimensions.get('window').width}px;
`;
