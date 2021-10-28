import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

export const Container = styled.TouchableOpacity`
  height: ${1 * Dimensions.get('window').height}px;
  width: ${1 * Dimensions.get('window').width}px;
  position: absolute;
  z-index: 500;
  flex: 1;
  background-color: rgba(0, 0, 0, 0.7);
  justify-content: center;
  align-items: center;
`;