import React from 'react';
import * as Styled from './ListedParticipant.style';

interface IProps {
  participant: any;
  status?: boolean;
  type?: number;
}

const ListedParticipant: React.FC<IProps> = ({
  participant,
}) => {

  return (
    <Styled.Container >
      <Styled.LeftWrapper>
        <Styled.Elipse>
          <Styled.FaceImage
            resizeMode={'contain'}
            source={require('../../assets/face.png')}
          />
        </Styled.Elipse>
      </Styled.LeftWrapper>
      <Styled.RightWrapper>
        <Styled.SectionWrapper>
          <Styled.SectionLabel>ID: <Styled.SectionText>{participant.id}</Styled.SectionText></Styled.SectionLabel>
        </Styled.SectionWrapper>
        <Styled.SectionWrapper>
          <Styled.SectionLabel>Status:
            <Styled.StatusLabel status={participant.status}>
              {participant.status === 1 ? ' Aguardando Pagamento' : (participant.status === 2 ? ' Aprovado' : ' Recusado')}
            </Styled.StatusLabel>
          </Styled.SectionLabel>
        </Styled.SectionWrapper>
        <Styled.SectionWrapper>
          <Styled.SectionLabel>Nome: <Styled.SectionText>{participant.name}</Styled.SectionText></Styled.SectionLabel>
        </Styled.SectionWrapper>
      </Styled.RightWrapper>
    </Styled.Container>
  );
};

export default ListedParticipant;
