import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as Styled from './ListedEvent.style';
import { colors } from '../../config/theme.json';

interface IProps {
  event: models.Event;
  status?: boolean;
  type?: number;
  paymentStatus?: number;
  participants?: number;
  onPress?: () => void;
}

const ListedEvent: React.FC<IProps> = ({
  event,
  status = false,
  type = 1,
  paymentStatus = 0,
  participants = 0,
  onPress = () => null,
}) => {

  return (
    <Styled.Container onPress={onPress}>
      <Styled.LeftWrapper>
        <Styled.EventImage
          resizeMode={'cover'}
          source={require('../../assets/event-logo.jpg')}
        />
        <Styled.NameLabel ellipsizeMode='tail' numberOfLines={2}>{event.name}</Styled.NameLabel>
      </Styled.LeftWrapper>
      <Styled.MiddleWrapper>
        {type === 1 ?
          <Styled.SectionWrapper>
            <Styled.IconWrapper>
              <Icon name="dollar" size={16} color={colors.primary} />
            </Styled.IconWrapper>
            <Styled.SectionLabel ellipsizeMode='tail' numberOfLines={1}>
              Preço:
              <Styled.SectionText>
                {event.price <= 0 ? ' Gratuito' :
                  ` R$ ${event.price.toFixed(2).replace('.', ',')}`}
              </Styled.SectionText>
            </Styled.SectionLabel>
          </Styled.SectionWrapper> :
          <Styled.SectionWrapper>
            <Styled.IconWrapper>
              <Icon name="group" size={16} color={colors.primary} />
            </Styled.IconWrapper>
            <Styled.SectionLabel ellipsizeMode='tail' numberOfLines={1}>
              Participantes: <Styled.SectionText>{participants}</Styled.SectionText>
            </Styled.SectionLabel>
          </Styled.SectionWrapper>}
        <Styled.SectionWrapper>
          <Styled.IconWrapper>
            <Icon name="calendar" size={16} color={colors.primary} />
          </Styled.IconWrapper>
          <Styled.SectionLabel>Data: <Styled.SectionText>{event.date}</Styled.SectionText></Styled.SectionLabel>
        </Styled.SectionWrapper>
        <Styled.SectionWrapper>
          <Styled.IconWrapper>
            <Icon name="clock-o" size={16} color={colors.primary} />
          </Styled.IconWrapper>
          <Styled.SectionLabel>Horário: <Styled.SectionText>{event.schedule}</Styled.SectionText></Styled.SectionLabel>
        </Styled.SectionWrapper>
        {event.eventType === 2 ? <></> : <>
          <Styled.SectionWrapper>
            <Styled.IconWrapper>
              <Icon name="map-marker" size={16} color={colors.primary} />
            </Styled.IconWrapper>
            <Styled.SectionLabel ellipsizeMode='tail' numberOfLines={1}>Local: <Styled.SectionText>{event.local}</Styled.SectionText></Styled.SectionLabel>
          </Styled.SectionWrapper>
        </>}
      </Styled.MiddleWrapper>
      <Styled.RightWrapper>
        {type === 1 ? <>
          {status ?
            <Styled.StatusLabel status={paymentStatus}>
              {paymentStatus === 1 ? 'Aguardando Pagamento' : (paymentStatus === 2 ? 'Aprovado' : 'Recusado')}
            </Styled.StatusLabel> :
            <Styled.TypeLabel>
              {event.eventType === 1 ? 'Presencial' : 'Online'}
            </Styled.TypeLabel>}
        </> : <></>}
      </Styled.RightWrapper>
    </Styled.Container>
  );
};

export default ListedEvent;
