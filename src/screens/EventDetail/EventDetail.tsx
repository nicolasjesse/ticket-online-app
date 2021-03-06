import React from 'react';
import { useReduxState } from '../../hooks/useReduxState';
import Footer from '../../components/Footer/Footer';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as Styled from './EventDetail.style';
import AppButton from '../../components/AppButton/AppButton';
import { colors } from '../../config/theme.json';

const EventDetail: React.FC = ({
  navigation,
}: any) => {
  const { event, auth } = useReduxState();

  return (
    <Styled.Container>
      <Styled.TitleWrapper>
        <Styled.Title ellipsizeMode='tail' numberOfLines={1}>
          {event.detail.name + ' '}
          ({event.detail.eventType === 1 ? 'Presencial' : 'Online'})
        </Styled.Title>
      </Styled.TitleWrapper>
      <Styled.EventImage
        resizeMode={'contain'}
        source={require('../../assets/event-logo.jpg')}
      />
      <Styled.InfoWrapper>
        <Styled.InfoItem>
          <Styled.InfoItemIconWrapper>
            <Icon name="dollar" size={20} color={colors.black} />
          </Styled.InfoItemIconWrapper>
          <Styled.InfoItemText>
            {event.detail.price <= 0 ?
              ' Gratuito' : `R$ ${event.detail.price
                .toFixed(2)
                .replace('.', ',')}`}
          </Styled.InfoItemText>
        </Styled.InfoItem>
        <Styled.InfoItem>
          <Styled.InfoItemIconWrapper>
            <Icon name="calendar" size={20} color={colors.black} />
          </Styled.InfoItemIconWrapper>
          <Styled.InfoItemText>
            {event.detail.date}, {event.detail.schedule}
          </Styled.InfoItemText>
        </Styled.InfoItem>
        {event.detail.eventType === 1 ? <>
          <Styled.InfoItem>
            <Styled.InfoItemIconWrapper>
              <Icon name="map-marker" size={20} color={colors.black} />
            </Styled.InfoItemIconWrapper>
            <Styled.InfoItemText>{event.detail.local}</Styled.InfoItemText>
          </Styled.InfoItem>
        </> : <></>}
        <Styled.InfoItem>
          <Styled.InfoItemIconWrapper>
            <Icon name="info" size={20} color={colors.black} />
          </Styled.InfoItemIconWrapper>
          <Styled.InfoItemText>
            {event.detail.eventType === 1 ?
              'Ap??s adquirir um ingresso virtual, voc?? deve usar a tela do dispositivo como entrada, voc?? pode acess??-lo em Meus Ingressos.'
              : 'O link do evento ser?? disponibilizado ap??s a conclus??o do pagamento, voc?? pode acess??-lo em Meus Ingressos'}
          </Styled.InfoItemText>
        </Styled.InfoItem>
      </Styled.InfoWrapper>
      <Styled.ButtonWrapper>
        <AppButton
          title={'Comprar Ingresso'}
          onPress={() => navigation.navigate('Main', { screen: 'Finish' })}
          disabled={(event.detail.tickets && event?.detail?.tickets?.filter((obj) => obj.userId === auth?.me?.id).length! > 0) || false}
        />
      </Styled.ButtonWrapper>
      {event.detail.tickets && event.detail.tickets.filter((obj) => obj.userId === auth.me.id).length > 0 ?
        <><Styled.AlreadyHas>Voc?? ja possui um ingresso do evento.</Styled.AlreadyHas></> :
        <></>}
      <Footer navigation={navigation} index={1} type={1} />
    </Styled.Container>
  );
};

export default EventDetail;
