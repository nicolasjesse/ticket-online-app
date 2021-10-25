import styled from 'styled-components/native';

import { Dimensions } from 'react-native';
import { colors } from '../../config/theme.json';

export const Container = styled.View`
  padding-top: ${0.02 * Dimensions.get('window').height}px;
  flex: 1;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: ${colors.white};
`;

export const ProducersWrapper = styled.View`
  flex: 1;
`;