import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
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
      {props?.route?.name === 'MyEvents' ?
        <Styled.PlusButton><Icon name="plus-square-o" size={24} color={colors.primary} onPress={() => props.navigation.navigate('Main', { screen: 'AddEvent' })}/></Styled.PlusButton> :
        <></>}
    </Styled.Header>
  );
};

export default Header;