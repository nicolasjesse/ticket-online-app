import React, { useState } from 'react';

import * as S from './AppButton.style';
import { colors } from '../../config/theme.json';

interface IProps {
  title: string;
  disabled?: boolean;
  color?: string;
  backgroundColor?: string;
  onPress?: any;
  fontSize?: number;
  bold?: boolean;
}

const AppButton: React.FC<IProps> = ({
  onPress,
  disabled = false,
  title = '',
  color = colors.white,
  backgroundColor = colors.default,
  fontSize = 16,
  bold = true,
}) => {

  return (
    <S.Container backgroundColor={backgroundColor} onPress={disabled? null : onPress}>
      <S.Text color={color} bold={bold} fontSize={fontSize}>
        {title}
      </S.Text>
    </S.Container>
  )
}

export default AppButton;