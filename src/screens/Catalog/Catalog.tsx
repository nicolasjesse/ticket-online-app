import React from 'react';
import ListedEvent from '../../components/ListedEvent/ListedEvent';
import Footer from '../../components/Footer/Footer';
import * as S from './Catalog.style';

const events = [
  { name: 'ECMAT', price: 0, date: '28/10', schedule: '18h', local: 'IFPB Cajazeiras', type: 1 },
  { name: 'ECMAT 2', price: 4.99, date: '28/10', schedule: '18h', local: 'IFPB Cajazeiras', type: 2 },
]

const Catalog: React.FC = ({
  navigation,
}: any) => {

  return (
    <S.Container>
      <S.EventsWrapper>
        {events.map((event) => <ListedEvent event={event} onPress={() => navigation.navigate('Main', { screen: 'EventDetail' })} key={event.name} />)}
      </S.EventsWrapper>
      <Footer navigation={navigation} index={1} type={1} />
    </S.Container>
  );
};

export default Catalog;
