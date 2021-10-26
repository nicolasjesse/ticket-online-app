import React from 'react';
import * as Styled from './Header.style';
import { colors } from '../../config/theme.json';

const Header: React.FC<any> = (props: any) => {

  return (
    <Styled.Header>
      <Styled.LogoImage
        resizeMode={'contain'}
        source={require('../../assets/logo-name.png')}
        style={{ tintColor: colors.primary }}
      />
      {props?.route?.name === 'Inventory' || props?.route?.name === 'Catalog' ?
        <Styled.FilterText onPress={() => { }}>Filtrar</Styled.FilterText> :
        <></>}
    </Styled.Header>
  );
};

export default Header;