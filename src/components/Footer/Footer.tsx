import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import * as Styled from './Footer.style';
import { colors } from '../../config/theme.json';

interface IProps {
  index: number;
  type: number;
  navigation: any;
}

const Footer: React.FC<IProps> = ({
  index,
  type,
  navigation,
}: IProps) => {

  return (
    <Styled.Footer>
      {type === 1 ? <>
        <Styled.LabeledIconWrapper onPress={() => navigation.navigate('Main', { screen: 'Catalog' })}>
          <Styled.IconWrapper active={index === 1}>
            <MaterialIcons name="store" size={26} color={colors.white} />
          </Styled.IconWrapper>
          <Styled.IconLabel active={index === 1}>
            Comprar
          </Styled.IconLabel>
        </Styled.LabeledIconWrapper>
        <Styled.LabeledIconWrapper onPress={() => navigation.navigate('Main', { screen: 'Inventory' })}>
          <Styled.IconWrapper active={index === 2}>
            <FontAwesome name="ticket" size={24} color={colors.white} />
          </Styled.IconWrapper>
          <Styled.IconLabel active={index === 2}>
            Meus Ingressos
          </Styled.IconLabel>
        </Styled.LabeledIconWrapper>
        <Styled.LabeledIconWrapper onPress={() => navigation.navigate('Main', { screen: 'Profile' })}>
          <Styled.IconWrapper active={index === 3}>
            <FontAwesome name="user" size={24} color={colors.white} />
          </Styled.IconWrapper>
          <Styled.IconLabel active={index === 3}>
            Minha conta
          </Styled.IconLabel>
        </Styled.LabeledIconWrapper>
      </> : <>
        <Styled.LabeledIconWrapper onPress={() => navigation.navigate('Main', { screen: 'MyEvents' })}>
          <Styled.IconWrapper active={index === 1}>
            <MaterialIcons name="store" size={26} color={colors.white} />
          </Styled.IconWrapper>
          <Styled.IconLabel active={index === 1}>
            Meus Eventos
          </Styled.IconLabel>
        </Styled.LabeledIconWrapper>
        <Styled.LabeledIconWrapper onPress={() => navigation.navigate('Main', { screen: 'Profile' })}>
          <Styled.IconWrapper active={index === 2}>
            <FontAwesome name="user" size={24} color={colors.white} />
          </Styled.IconWrapper>
          <Styled.IconLabel active={index === 2}>
            Minha conta
          </Styled.IconLabel>
        </Styled.LabeledIconWrapper>
      </>}
    </Styled.Footer>
  )
}

export default Footer;