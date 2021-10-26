import styled from 'styled-components/native';
import normalize from 'react-native-normalize';

import { Dimensions } from 'react-native';
import { colors } from '../../config/theme.json';

interface Props {
  error?: boolean;
  width: number;
}

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: ${(props: Props) => props.width * Dimensions.get('window').width}px;
  height: ${0.07 * Dimensions.get('window').height}px;
  padding-right: ${0.03 * Dimensions.get('window').width}px;
  border-style: solid;
  border-width: 1px;
  border-color: ${(props: Props) => (props.error ? 'rgba(255, 0, 0, 1)' : 'rgba(0, 0, 0, 0.6)')};
  background-color: ${(props: Props) => (props.error ? 'rgba(255, 0, 0, 0.03)' : 'white')};
`;

export const Input = styled.TextInput`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding-left: ${0.04 * Dimensions.get('window').width}px;
  font-size: ${normalize(14)}px;
  color: ${colors.black};
`;
