import React from 'react';
import ListedEvent from '../../components/ListedEvent/ListedEvent';
import Footer from '../../components/Footer/Footer';
import * as S from './Inventory.style';

const events = [
  { id: '1', name: 'Django Girls', price: 4.99, date: '28/10', schedule: '18h', local: 'IFPB Cajazeiras', type: 1, status: 1 },
  { id: '2', name: 'Django Girls 2', price: 4.99, date: '28/10', schedule: '18h', local: 'IFPB Cajazeiras', type: 2, status: 2 },
]

const Catalog: React.FC = ({
  navigation,
}: any) => {

  return (
    <S.Container>
      <S.TicketsWrapper>
        {events.map((event) => <ListedEvent event={event} onPress={() => navigation.navigate('Main', { screen: 'TicketDetail' })} key={event.id} status/>)}
      </S.TicketsWrapper>
      <Footer navigation={navigation} index={2} type={1} />
    </S.Container>
  );
};

export default Catalog;
