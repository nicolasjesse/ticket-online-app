import React from 'react';
import ListedParticipant from '../../components/ListedParticipant/ListedParticipant';
import Footer from '../../components/Footer/Footer';
import * as Styled from './Participants.style';

const participants = [
  { id: '37724582129', name: 'Nícolas Jessé', status: 2 },
  { id: '85124582128', name: 'Maria Eduarda', status: 1 },
]

const Participants: React.FC = ({
  navigation,
}: any) => {

  return (
    <Styled.Container>
      <Styled.ParticipantsWrapper>
        {participants.map((participant) => <ListedParticipant participant={participant} type={2} key={participant.id} />)}
      </Styled.ParticipantsWrapper>
      <Footer navigation={navigation} index={1} type={2} />
    </Styled.Container>
  );
};

export default Participants;
