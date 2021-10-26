import React from 'react';
import ListedEvent from '../../components/ListedEvent/ListedEvent';
import Footer from '../../components/Footer/Footer';
import * as S from './MyEvents.style';

const events = [
  { name: 'ECMAT', price: 0, date: '28/10', schedule: '18h', local: 'IFPB Cajazeiras', type: 1, participants: 2 },
  { name: 'ECMAT 2', price: 4.99, date: '28/10', schedule: '18h', local: 'IFPB Cajazeiras', type: 2, participants: 3 },
]

const MyEvents: React.FC = ({
  navigation,
}: any) => {

  return (
    <S.Container>
      <S.EventsWrapper>
        {events.map((event) => <ListedEvent event={event} type={2} onPress={() => navigation.navigate('Main', { screen: 'MyEventDetail' })} key={event.name} />)}
      </S.EventsWrapper>
      <Footer navigation={navigation} index={1} type={2} />
    </S.Container>
  );
};

export default MyEvents;
