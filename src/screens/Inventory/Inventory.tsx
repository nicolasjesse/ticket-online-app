import React from 'react';
import ListedEvent from '../../components/ListedEvent/ListedEvent';
import Footer from '../../components/Footer/Footer';
import * as Styled from './Inventory.style';

const tickets = [
  { id: '1', name: 'ECMAT', price: 4.99, date: '28/10', schedule: '18h', local: 'IFPB Cajazeiras', type: 1, status: 1 },
  { id: '2', name: 'ECMAT 2', price: 4.99, date: '28/10', schedule: '18h', local: 'IFPB Cajazeiras', type: 2, status: 2 },
]

const Inventory: React.FC = ({
  navigation,
}: any) => {

  return (
    <Styled.Container>
      <Styled.TicketsWrapper>
        {tickets.map((event) => <ListedEvent event={event} onPress={() => navigation.navigate('Main', { screen: 'TicketDetail' })} key={event.id} status/>)}
      </Styled.TicketsWrapper>
      <Footer navigation={navigation} index={2} type={1} />
    </Styled.Container>
  );
};

export default Inventory;
