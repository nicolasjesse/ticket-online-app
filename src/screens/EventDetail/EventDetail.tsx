import React from 'react';
import Footer from '../../components/Footer/Footer';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as S from './EventDetail.style';
import AppButton from '../../components/AppButton/AppButton';
import { colors } from '../../config/theme.json';

const event = { name: 'ECMAT', price: 0, date: '28/10', schedule: '18h', local: 'IFPB Cajazeiras', type: 2 }

const EventDetail: React.FC = ({
  navigation,
}: any) => {

  return (
    <S.Container>
      <S.TitleWrapper>
        <S.Title>{event.name} ({event.type === 1 ? 'Presencial' : 'Online'})</S.Title>
      </S.TitleWrapper>
      <S.EventImage
        resizeMode={'contain'}
        source={require('../../assets/event-logo.jpg')}
      />
      <S.InfoWrapper>
        <S.InfoItem>
          <S.InfoItemIconWrapper>
            <Icon name="dollar" size={20} color={colors.black} />
          </S.InfoItemIconWrapper>
          <S.InfoItemText>{event.price <= 0 ? 'Gratuito' : `R$ ${event.price}`}</S.InfoItemText>
        </S.InfoItem>
        <S.InfoItem>
          <S.InfoItemIconWrapper>
            <Icon name="calendar" size={20} color={colors.black} />
          </S.InfoItemIconWrapper>
          <S.InfoItemText>{event.date}, {event.schedule}</S.InfoItemText>
        </S.InfoItem>
        {event.type === 1 ? <>
          <S.InfoItem>
            <S.InfoItemIconWrapper>
              <Icon name="map-marker" size={20} color={colors.black} />
            </S.InfoItemIconWrapper>
            <S.InfoItemText>{event.local}</S.InfoItemText>
          </S.InfoItem>
        </> : <></>}
        <S.InfoItem>
          <S.InfoItemIconWrapper>
            <Icon name="info" size={20} color={colors.black} />
          </S.InfoItemIconWrapper>
          <S.InfoItemText>
            {event.type === 1 ?
              'Após adquirir um ingresso virtual, você deve usar a tela do dispositivo como entrada, você pode acessá-lo em Meus Ingressos.'
              : 'O link do evento será disponibilizado após a conclusão do pagamento, você pode acessá-lo em Meus Ingressos'}
          </S.InfoItemText>
        </S.InfoItem>
      </S.InfoWrapper>
      <S.ButtonWrapper>
        <AppButton
          title={'Comprar Ingresso'}
          onPress={() => navigation.navigate('Main', { screen: 'Finish' }) } />
      </S.ButtonWrapper>
      <Footer navigation={navigation} index={1} type={1} />
    </S.Container>
  );
};

export default EventDetail;
