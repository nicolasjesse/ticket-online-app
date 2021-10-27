import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useReduxState } from '../../hooks/useReduxState';
import * as EventActions from '../../actions/event';
import ListedEvent from '../../components/ListedEvent/ListedEvent';
import Footer from '../../components/Footer/Footer';
import * as Styled from './Catalog.style';

const Catalog: React.FC = ({
  navigation,
}: any) => {
  const dispatch = useDispatch();
  const { event } = useReduxState();

  const handleEventClick = (id: string) => {
    dispatch(EventActions.getDetail(id));
    navigation.navigate('Main', { screen: 'EventDetail' });
  };

  useEffect(() => {
    dispatch(EventActions.getReport());
  }, []);

  return (
    <Styled.Container>
      <Styled.EventsWrapper>
        {event.list.map((ev: models.Event) => (
          <ListedEvent
            event={ev}
            onPress={() => handleEventClick(ev.id!)}
            key={ev.id} />
        ))}
      </Styled.EventsWrapper>
      <Footer navigation={navigation} index={1} type={1} />
    </Styled.Container>
  );
};

export default Catalog;
