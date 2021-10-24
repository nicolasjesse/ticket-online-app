import styled from 'styled-components/native';
import normalize from 'react-native-normalize';

interface ContainerProps {
  backgroundColor: string;
}

interface TextProps {
  color: string;
  bold: boolean;
  fontSize: number;
}

export const Container = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${(props: ContainerProps) => props.backgroundColor};
  border-radius: 5px;
  `;

export const Text = styled.Text`
  color: white;
  font-size: ${(props: TextProps) => `${normalize(props.fontSize)}px`};
  color: ${(props: TextProps) => props.color};
  font-weight: ${(props: TextProps) => props.bold ? 'bold' : 'normal'};
`;