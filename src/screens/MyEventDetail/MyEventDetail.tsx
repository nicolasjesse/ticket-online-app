import React from 'react';
import { useDispatch } from 'react-redux';
import { useReduxState } from '../../hooks/useReduxState';
import * as TicketActions from '../../actions/ticket';
import Footer from '../../components/Footer/Footer';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as Styled from './MyEventDetail.style';
import AppButton from '../../components/AppButton/AppButton';
import { colors } from '../../config/theme.json';

const MyEventDetail: React.FC = ({
  navigation,
}: any) => {
  const dispatch = useDispatch();
  const { event } = useReduxState();

  const handleParticipantList = () => {
    dispatch(TicketActions.getReport({ eventId: event.detail.id }));
    navigation.navigate('Main', { screen: 'Participants' });
  };

  return (
    <Styled.Container>
      <Styled.TitleWrapper>
        <Styled.Title>{event.detail?.name} ({event.detail.eventType === 1 ? 'Presencial' : 'Online'})</Styled.Title>
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
          <Styled.InfoItemText>{event.detail.price <= 0 ? 'Gratuito' : `R$ ${event.detail?.price}`}</Styled.InfoItemText>
        </Styled.InfoItem>
        <Styled.InfoItem>
          <Styled.InfoItemIconWrapper>
            <Icon name="calendar" size={20} color={colors.black} />
          </Styled.InfoItemIconWrapper>
          <Styled.InfoItemText>{event.detail.date}, {event.detail.schedule}</Styled.InfoItemText>
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
            <Icon name="group" size={16} color={colors.black} />
          </Styled.InfoItemIconWrapper>
          <Styled.InfoItemText>
            {event.detail.tickets?.length} participantes
          </Styled.InfoItemText>
        </Styled.InfoItem>
      </Styled.InfoWrapper>
      <Styled.ButtonWrapper>
        <AppButton
          title={'Ver lista de participantes'}
          onPress={() => handleParticipantList()} />
      </Styled.ButtonWrapper>
      <Footer navigation={navigation} index={1} type={2} />
    </Styled.Container>
  );
};

export default MyEventDetail;
