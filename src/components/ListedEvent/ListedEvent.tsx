import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as S from './ListedEvent.style';
import { colors } from '../../config/theme.json';

interface IProps {
  event: any;
  status?: boolean;
  type?: number;
  onPress?: () => void;
}

const ListedEvent: React.FC<IProps> = ({
  event,
  status = false,
  type = 1,
  onPress = () => null,
}) => {

  return (
    <S.Container onPress={onPress}>
      <S.LeftWrapper>
        <S.EventImage
          resizeMode={'cover'}
          source={require('../../assets/event-logo.jpg')}
        />
        <S.NameLabel>{event.name}</S.NameLabel>
      </S.LeftWrapper>
      <S.MiddleWrapper>
        {type === 1 ?
          <S.SectionWrapper>
            <S.IconWrapper>
              <Icon name="dollar" size={16} color={colors.black} />
            </S.IconWrapper>
            <S.SectionLabel ellipsizeMode='tail' numberOfLines={1}>
              Preço: <S.SectionText>{event.price <= 0 ? 'Gratuito' : `R$ ${event.price}`}</S.SectionText>
            </S.SectionLabel>
          </S.SectionWrapper> :
          <S.SectionWrapper>
            <S.IconWrapper>
              <Icon name="group" size={16} color={colors.black} />
            </S.IconWrapper>
            <S.SectionLabel ellipsizeMode='tail' numberOfLines={1}>
              Participantes: <S.SectionText>{event.participants}</S.SectionText>
            </S.SectionLabel>
          </S.SectionWrapper>}
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
        {event.type === 2 ? <></> : <>
          <S.SectionWrapper>
            <S.IconWrapper>
              <Icon name="map-marker" size={16} color={colors.black} />
            </S.IconWrapper>
            <S.SectionLabel ellipsizeMode='tail' numberOfLines={1}>Local: <S.SectionText>{event.local}</S.SectionText></S.SectionLabel>
          </S.SectionWrapper>
        </>}
      </S.MiddleWrapper>
      <S.RightWrapper>
        {type === 1 ? <>
          {status ?
            <S.StatusLabel status={event.status}>
              {event.status === 1 ? 'Aguardando Pagamento' : (event.status === 2 ? 'Aprovado' : 'Recusado')}
            </S.StatusLabel> :
            <S.TypeLabel>
              {event.type === 1 ? 'Presencial' : 'Online'}
            </S.TypeLabel>}
        </> : <></>}
      </S.RightWrapper>
    </S.Container>
  );
};

export default ListedEvent;
