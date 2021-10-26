import React from 'react';
import Footer from '../../components/Footer/Footer';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as Styled from './EventDetail.style';
import AppButton from '../../components/AppButton/AppButton';
import { colors } from '../../config/theme.json';

const event = { name: 'ECMAT', price: 0, date: '28/10', schedule: '18h', local: 'IFPB Cajazeiras', type: 2 }

const EventDetail: React.FC = ({
  navigation,
}: any) => {

  return (
    <Styled.Container>
      <Styled.TitleWrapper>
        <Styled.Title>{event.name} ({event.type === 1 ? 'Presencial' : 'Online'})</Styled.Title>
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
          <Styled.InfoItemText>{event.price <= 0 ? 'Gratuito' : `R$ ${event.price}`}</Styled.InfoItemText>
        </Styled.InfoItem>
        <Styled.InfoItem>
          <Styled.InfoItemIconWrapper>
            <Icon name="calendar" size={20} color={colors.black} />
          </Styled.InfoItemIconWrapper>
          <Styled.InfoItemText>{event.date}, {event.schedule}</Styled.InfoItemText>
        </Styled.InfoItem>
        {event.type === 1 ? <>
          <Styled.InfoItem>
            <Styled.InfoItemIconWrapper>
              <Icon name="map-marker" size={20} color={colors.black} />
            </Styled.InfoItemIconWrapper>
            <Styled.InfoItemText>{event.local}</Styled.InfoItemText>
          </Styled.InfoItem>
        </> : <></>}
        <Styled.InfoItem>
          <Styled.InfoItemIconWrapper>
            <Icon name="info" size={20} color={colors.black} />
          </Styled.InfoItemIconWrapper>
          <Styled.InfoItemText>
            {event.type === 1 ?
              'Após adquirir um ingresso virtual, você deve usar a tela do dispositivo como entrada, você pode acessá-lo em Meus Ingressos.'
              : 'O link do evento será disponibilizado após a conclusão do pagamento, você pode acessá-lo em Meus Ingressos'}
          </Styled.InfoItemText>
        </Styled.InfoItem>
      </Styled.InfoWrapper>
      <Styled.ButtonWrapper>
        <AppButton
          title={'Comprar Ingresso'}
          onPress={() => navigation.navigate('Main', { screen: 'Finish' }) } />
      </Styled.ButtonWrapper>
      <Footer navigation={navigation} index={1} type={1} />
    </Styled.Container>
  );
};

export default EventDetail;
