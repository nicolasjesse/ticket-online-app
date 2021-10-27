import styled from 'styled-components/native';
import normalize from 'react-native-normalize';

import { Dimensions } from 'react-native';
import { colors } from '../../config/theme.json';

interface StatusProps {
  status: number;
}

export const Container = styled.View`
  align-items: center;
  width: ${0.91 * Dimensions.get('window').width}px;
  height: ${0.138 * Dimensions.get('window').height}px;
  margin-bottom: ${0.014 * Dimensions.get('window').height}px;
  flex-direction: row;
  border-radius: 8px;
  border: 1px;
  border-color: ${colors.gray};
  overflow: hidden;
`;

export const LeftWrapper = styled.View`
  width: ${0.28 * Dimensions.get('window').width}px;
  justify-content: center;
  align-items: center;
`;

export const MiddleWrapper = styled.View`
  flex: 1;
  height: ${0.125 * Dimensions.get('window').height}px;
  justify-content: space-evenly;
`;

export const RightWrapper = styled.View`
  flex: 1;
  height: ${0.125 * Dimensions.get('window').height}px;
  align-items: flex-start;
  justify-content: space-evenly;
`;

export const Elipse = styled.View`
  height: ${0.094 * Dimensions.get('window').height}px;
  width: ${0.1 * Dimensions.get('window').height}px;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  background-color: ${colors.primary + '99'};
`;

export const FaceImage = styled.Image`
  border-radius: 5px;
  height: ${0.1 * Dimensions.get('window').height}px;
  width: ${0.1 * Dimensions.get('window').width}px;
`;

export const SectionWrapper = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const IconWrapper = styled.View`
  align-items: center;
  width: ${0.05 * Dimensions.get('window').width}px;
`;

export const SectionLabel = styled.Text`
  margin-left: ${0.01 * Dimensions.get('window').width}px;
  font-size: ${normalize(14)}px;
  font-weight: bold;
  color: ${colors.black};
  width: ${0.611 * Dimensions.get('window').width}px;
`;

export const SectionText = styled.Text`
  font-weight: normal;
`;

export const StatusLabel = styled.Text`
  font-size: ${normalize(14)}px;
  color: ${(props: StatusProps) => props.status === 1 ? colors.yellow : (props.status === 2 ? colors.green : colors.red)};
`;
