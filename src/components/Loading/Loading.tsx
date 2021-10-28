import React from 'react';
import { ActivityIndicator } from 'react-native';
import * as S from './Loading.style';
import { colors } from '../../config/theme.json';

const Loading: React.FC = () => {

  return (
    <S.Container>
      <ActivityIndicator size={40} color={colors.white} />
    </S.Container>
  );
};

export default Loading;