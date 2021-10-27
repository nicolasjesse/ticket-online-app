import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useReduxState } from '../../hooks/useReduxState';
import * as TicketActions from '../../actions/ticket';
import ListedEvent from '../../components/ListedEvent/ListedEvent';
import Footer from '../../components/Footer/Footer';
import * as Styled from './Inventory.style';

const Inventory: React.FC = ({
  navigation,
}: any) => {
  const { ticket, auth } = useReduxState();
  const dispatch = useDispatch();

  const handleClickTicket = (id: string) => {
    dispatch(TicketActions.getDetail(id));
    navigation.navigate('Main', { screen: 'TicketDetail' });
  };

  useEffect(() => {
    dispatch(TicketActions.getReport({ userId: auth.me.id }));
  }, []);

  return (
    <Styled.Container>
      <Styled.TicketsWrapper>
        {ticket.list.map((ticket) => (
          <ListedEvent
            event={ticket.event!}
            paymentStatus={ticket.paymentStatus}
            onPress={() => handleClickTicket(ticket.id!)}
            key={ticket.id}
            status
          />))}
      </Styled.TicketsWrapper>
      <Footer navigation={navigation} index={2} type={1} />
    </Styled.Container>
  );
};

export default Inventory;
