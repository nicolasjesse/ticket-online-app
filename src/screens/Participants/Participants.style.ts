import styled from 'styled-components/native';

import { Dimensions } from 'react-native';
import { colors } from '../../config/theme.json';

export const Container = styled.View`
  padding-top: ${0.02 * Dimensions.get('window').height}px;
  flex: 1;
  flex-direction: column;
  background-color: ${colors.white};
  padding-bottom: ${0.09 * Dimensions.get('window').height}px;
`;

export const ParticipantsWrapper = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  keyboardShouldPersistTaps: 'handled',
  bounces: false,
  overScrollMode: 'never',
  contentContainerStyle: {
    flexGrow: 1,
    justifyContent: 'flex-start',
    flexDirection: 'column',
    alignItems: 'center',
  },
})`
padding-bottom: ${0.09 * Dimensions.get('window').height}px;
`;

export const ParticipantsLabel = styled.Text`
  color: ${colors.black};
  margin-left: ${0.05 * Dimensions.get('window').width}px;
  margin-bottom: ${0.02 * Dimensions.get('window').height}px;
`;
