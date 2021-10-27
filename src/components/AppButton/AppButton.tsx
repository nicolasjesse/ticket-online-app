import React, { useState } from 'react';

import * as Styled from './AppButton.style';
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
  backgroundColor = colors.primary,
  fontSize = 16,
  bold = true,
}) => {

  return (
    <Styled.Container backgroundColor={backgroundColor} onPress={disabled ? null : onPress}>
      <Styled.Text color={color} bold={bold} fontSize={fontSize}>
        {title}
      </Styled.Text>
    </Styled.Container>
  );
};

export default AppButton;