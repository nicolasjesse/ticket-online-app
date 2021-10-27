import React from 'react';
import { useDispatch } from 'react-redux';
import { useReduxState } from '../../hooks/useReduxState';
import ListedParticipant from '../../components/ListedParticipant/ListedParticipant';
import Footer from '../../components/Footer/Footer';
import * as Styled from './Participants.style';

const Participants: React.FC = ({
  navigation,
}: any) => {
  const { ticket } = useReduxState();

  return (
    <Styled.Container>
      <Styled.ParticipantsWrapper>
        {ticket.list?.map((tic) => (
          <ListedParticipant
            ticket={tic}
            type={2}
            key={tic.id} />
        ))}
      </Styled.ParticipantsWrapper>
      <Footer navigation={navigation} index={1} type={2} />
    </Styled.Container>
  );
};

export default Participants;
