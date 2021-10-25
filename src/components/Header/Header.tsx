import React from 'react';
import * as S from './Header.style';
import { colors } from '../../config/theme.json';

const Header: React.FC<any> = (props: any) => {

  return (
    <S.Header>
      <S.LogoImage
        resizeMode={'contain'}
        source={require('../../assets/logo-name.png')}
        style={{ tintColor: colors.primary }}
      />
      {props?.route?.name === 'Catalog' ?
        <S.FilterText onPress={() => { }}>Filtrar</S.FilterText> :
        <></>}
    </S.Header>
  );
};

export default Header;