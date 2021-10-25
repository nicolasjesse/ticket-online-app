import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import * as S from './Footer.style';
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
    <S.Footer>
      {type === 1 ? <>
        <S.LabeledIconWrapper onPress={() => navigation.navigate('Main', { screen: 'Catalog' })}>
          <S.IconWrapper active={index === 1}>
            <MaterialIcons name="store" size={26} color={colors.white} />
          </S.IconWrapper>
          <S.IconLabel active={index === 1}>
            Comprar
          </S.IconLabel>
        </S.LabeledIconWrapper>
        <S.LabeledIconWrapper onPress={() => navigation.navigate('Main', { screen: 'MyTickets' })}>
          <S.IconWrapper active={index === 2}>
            <FontAwesome name="ticket" size={24} color={colors.white} />
          </S.IconWrapper>
          <S.IconLabel active={index === 2}>
            Meus Ingressos
          </S.IconLabel>
        </S.LabeledIconWrapper>
        <S.LabeledIconWrapper onPress={() => navigation.navigate('Main', { screen: 'Account' })}>
          <S.IconWrapper active={index === 3}>
            <FontAwesome name="user" size={24} color={colors.white} />
          </S.IconWrapper>
          <S.IconLabel active={index === 3}>
            Minha conta
          </S.IconLabel>
        </S.LabeledIconWrapper>
      </> : <>
      <S.LabeledIconWrapper onPress={() => navigation.navigate('Main', { screen: 'Catalog' })}>
        <S.IconWrapper active={index === 1}>
          <MaterialIcons name="store" size={26} color={colors.white} />
        </S.IconWrapper>
        <S.IconLabel active={index === 1}>
          Meus Eventos
        </S.IconLabel>
      </S.LabeledIconWrapper>
      <S.LabeledIconWrapper onPress={() => navigation.navigate('Main', { screen: 'Account' })}>
        <S.IconWrapper active={index === 2}>
          <FontAwesome name="user" size={24} color={colors.white} />
        </S.IconWrapper>
        <S.IconLabel active={index === 2}>
          Minha conta
        </S.IconLabel>
      </S.LabeledIconWrapper>
      </>}
    </S.Footer>
  )
}

export default Footer;