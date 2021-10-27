import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useReduxState } from '../../hooks/useReduxState';
import * as EventActions from '../../actions/event';
import ListedEvent from '../../components/ListedEvent/ListedEvent';
import Footer from '../../components/Footer/Footer';
import * as Styled from './MyEvents.style';

const MyEvents: React.FC = ({
  navigation,
}: any) => {
  const dispatch = useDispatch();
  const { event, auth } = useReduxState();

  const handleClickEvent = (id: string) => {
    dispatch(EventActions.getDetail(id));
    navigation.navigate('Main', { screen: 'MyEventDetail' });
  };

  useEffect(() => {
    dispatch(EventActions.getReport({ userId: auth.me.id }));
  }, [event.detail]);

  return (
    <Styled.Container>
      <Styled.EventsWrapper>
        {event.list?.map((ev) => (
          <ListedEvent
            event={ev}
            participants={ev.tickets?.length}
            type={2}
            onPress={() => handleClickEvent(ev.id!)}
            key={ev.id} />
        ))}
      </Styled.EventsWrapper>
      <Footer navigation={navigation} index={1} type={2} />
    </Styled.Container>
  );
};

export default MyEvents;
