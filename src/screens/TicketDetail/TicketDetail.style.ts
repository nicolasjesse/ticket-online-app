import styled from 'styled-components/native';
import normalize from 'react-native-normalize';

import { Dimensions } from 'react-native';
import { colors } from '../../config/theme.json';

interface StatusProps {
  status: number;
}

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

export const QRCImage = styled.Image`
  margin-top: ${0.01 * Dimensions.get('window').height}px;
  border-radius: 5px;
  height: ${0.35 * Dimensions.get('window').height}px;
  width: ${0.8 * Dimensions.get('window').width}px;
`;

export const InfoWrapper = styled.View`
  justify-content: center;
  margin-top: ${0.03 * Dimensions.get('window').height}px;
  height: ${0.3 * Dimensions.get('window').height}px;
`;

export const InfoItem = styled.View`
  flex-direction: row;
  align-items: center;
  width: ${0.8 * Dimensions.get('window').width}px;
  height: ${0.07 * Dimensions.get('window').height}px;
`;

export const InfoItemText = styled.Text`
  width: ${0.7 * Dimensions.get('window').width}px;
  margin-left: ${0.05 * Dimensions.get('window').width}px;
  font-size: ${normalize(14)}px;
  color: ${colors.black};
`;

export const InfoItemIconWrapper = styled.View`
  justify-content: center;
  align-items: center;
  height: ${0.048 * Dimensions.get('window').height}px;
  width: ${0.048 * Dimensions.get('window').height}px;
  border-radius: 100px;
  border-width: 1px;
`;

export const IdLabel = styled.Text`
  font-size: ${normalize(18)}px;
  color: ${colors.black};
`;

export const StatusLabel = styled.Text`
  font-size: ${normalize(18)}px;
  color: ${colors.black};
`;

export const StatusValue = styled.Text`
  color: ${(props: StatusProps) => props.status === 1 ? colors.yellow : (props.status === 2 ? colors.green : colors.red)};
`;

export const MainInfoWrapper = styled.View`
  height: ${0.35 * Dimensions.get('window').height}px;
  width: ${0.8 * Dimensions.get('window').width}px;
  margin-top: ${0.05 * Dimensions.get('window').height}px;
  justify-content: flex-start;
`;