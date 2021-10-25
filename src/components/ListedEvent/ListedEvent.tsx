import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as S from './ListedEvent.style';
import { colors } from '../../config/theme.json';

interface IProps {
  event: any;
  onPress: () => void;
}

const ListedEvent: React.FC<IProps> = ({
  event,
  onPress,
}) => {

  return (
    <S.Container onPress={onPress}>
      <S.LeftWrapper>
        <S.EventImage
          resizeMode={'cover'}
          source={require('../../assets/django-logo.jpg')}
        />
        <S.NameLabel>{event.name}</S.NameLabel>
      </S.LeftWrapper>
      <S.MiddleWrapper>
        <S.SectionWrapper>
          <S.IconWrapper>
            <Icon name="dollar" size={16} color={colors.black} />
          </S.IconWrapper>
          <S.SectionLabel ellipsizeMode='tail' numberOfLines={1}>Preço: <S.SectionText>{event.price}</S.SectionText></S.SectionLabel>
        </S.SectionWrapper>
        <S.SectionWrapper>
          <S.IconWrapper>
            <Icon name="calendar" size={16} color={colors.black} />
          </S.IconWrapper>
          <S.SectionLabel>Data: <S.SectionText>{event.date}</S.SectionText></S.SectionLabel>
        </S.SectionWrapper>
        <S.SectionWrapper>
          <S.IconWrapper>
            <Icon name="clock-o" size={16} color={colors.black} />
          </S.IconWrapper>
          <S.SectionLabel>Horário: <S.SectionText>{event.schedule}</S.SectionText></S.SectionLabel>
        </S.SectionWrapper>
        {event.type === 2 ?
          <>
          </> :
          <>
            <S.SectionWrapper>
              <S.IconWrapper>
                <Icon name="map-marker" size={16} color={colors.black} />
              </S.IconWrapper>
              <S.SectionLabel ellipsizeMode='tail' numberOfLines={1}>Local: <S.SectionText>{event.local}</S.SectionText></S.SectionLabel>
            </S.SectionWrapper>
          </>}
      </S.MiddleWrapper>
      <S.RightWrapper>
        <S.TypeLabel>{event.type === 1 ? 'Presencial' : 'Online'}</S.TypeLabel>
      </S.RightWrapper>
    </S.Container>
  );
};

export default ListedEvent;
