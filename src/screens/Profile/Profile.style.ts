import styled from 'styled-components/native';
import normalize from 'react-native-normalize';

import { Dimensions } from 'react-native';
import { colors } from '../../config/theme.json';

interface InfoWrapperProps {
  height: number;
}

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: ${colors.white};
`;

export const ProfileElipse = styled.TouchableOpacity`
  height: ${0.094 * Dimensions.get('window').height}px;
  width: ${0.1 * Dimensions.get('window').height}px;
  margin-top: ${0.1 * Dimensions.get('window').height}px;
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

export const NameLabel = styled.Text`
  margin-top: ${0.01 * Dimensions.get('window').height}px;
  font-size: ${normalize(16)}px;
`;

export const InfoLabel = styled.Text`
  margin-top: ${0.03 * Dimensions.get('window').height}px;
  width: ${0.86 * Dimensions.get('window').width}px;
  color: ${colors.black};
`;

export const InfoWrapper = styled.View`
  margin-top: ${0.008 * Dimensions.get('window').height}px;
  align-items: center;
  justify-content: space-evenly;
  height: ${(props: InfoWrapperProps) => props.height * Dimensions.get('window').height}px;
  width: ${0.9 * Dimensions.get('window').width}px;
  border-radius: 8px;
  border: 1px;
  border-color: ${colors.gray};
  overflow: hidden;
`;

export const InfoLine = styled.TouchableOpacity`
  justify-content: flex-end;
  height: ${0.03 * Dimensions.get('window').height}px;
  width: ${0.8 * Dimensions.get('window').width}px;
  border-bottom-width: 1px;
  border-color: ${colors.gray + 'AA'};
`;

export const InfoLineText = styled.Text`
  margin-left: ${0.01 * Dimensions.get('window').width}px;
  margin-bottom: ${0.002 * Dimensions.get('window').height}px;
  font-size: ${normalize(12)}px;
`;

export const ButtonWrapper = styled.View`
  margin-top: ${0.08 * Dimensions.get('window').height}px;
  height: ${0.05 * Dimensions.get('window').height}px;
  width: ${0.38 * Dimensions.get('window').width}px;
`;

export const ButtonsGroup = styled.View`
  margin-top: ${0.05 * Dimensions.get('window').height}px;
  flex-direction: row;
  justify-content: space-between;
  height: ${0.06 * Dimensions.get('window').height}px;
  width: ${0.9 * Dimensions.get('window').width}px;
`;
