import styled from 'styled-components/native';

import { Dimensions } from 'react-native';
import { colors } from '../../config/theme.json';

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  background-color: ${colors.white};
  padding-bottom: ${0.095 * Dimensions.get('window').height}px;
`;

export const EventsWrapper = styled.ScrollView.attrs({
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
  padding-top: ${0.013 * Dimensions.get('window').height}px;
`;