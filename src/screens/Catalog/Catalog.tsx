import React from 'react';
import ListedEvent from '../../components/ListedEvent/ListedEvent';
import Footer from '../../components/Footer/Footer';
import * as S from './Catalog.style';

const events = [
  { name: 'Django Girls', price: 4.99, date: '28/10', schedule: '18h', local: 'IFPB Cajazeiras', type: 1 },
  { name: 'Django Girls 2', price: 4.99, date: '28/10', schedule: '18h', local: 'IFPB Cajazeiras', type: 2 },
]

const Catalog: React.FC = ({
  navigation,
}: any) => {

  return (
    <S.Container>
      <S.ProducersWrapper>
        {events.map((event) => <ListedEvent event={event} onPress={() => { }} key={event.name} />)}
      </S.ProducersWrapper>
      <Footer navigation={navigation} index={1} type={1} />
    </S.Container>
  );
};

export default Catalog;
