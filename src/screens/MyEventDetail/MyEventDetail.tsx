import React from 'react';
import Footer from '../../components/Footer/Footer';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as Styled from './MyEventDetail.style';
import AppButton from '../../components/AppButton/AppButton';
import { colors } from '../../config/theme.json';

const event = { name: 'ECMAT', price: 0, date: '28/10', schedule: '18h', local: 'IFPB Cajazeiras', type: 2, participants: 2 }

const MyEventDetail: React.FC = ({
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
            <Icon name="group" size={16} color={colors.black} />
          </Styled.InfoItemIconWrapper>
          <Styled.InfoItemText>
            {event.participants} participantes
          </Styled.InfoItemText>
        </Styled.InfoItem>
      </Styled.InfoWrapper>
      <Styled.ButtonWrapper>
        <AppButton
          title={'Ver lista de participantes'}
          onPress={() => navigation.navigate('Main', { screen: 'Participants' })} />
      </Styled.ButtonWrapper>
      <Footer navigation={navigation} index={1} type={2} />
    </Styled.Container>
  );
};

export default MyEventDetail;
