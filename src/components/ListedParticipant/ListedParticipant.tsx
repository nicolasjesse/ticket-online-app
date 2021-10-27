import React from 'react';
import * as Styled from './ListedParticipant.style';

interface IProps {
  ticket: models.Ticket;
  status?: boolean;
  type?: number;
}

const ListedParticipant: React.FC<IProps> = ({
  ticket,
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
          <Styled.SectionLabel ellipsizeMode='tail' numberOfLines={1}>ID: <Styled.SectionText>{ticket?.id}</Styled.SectionText></Styled.SectionLabel>
        </Styled.SectionWrapper>
        <Styled.SectionWrapper>
          <Styled.SectionLabel>Status:
            <Styled.StatusLabel status={ticket?.paymentStatus}>
              {ticket?.paymentStatus === 1 ? ' Aguardando Pagamento' : (ticket?.paymentStatus === 2 ? ' Aprovado' : ' Recusado')}
            </Styled.StatusLabel>
          </Styled.SectionLabel>
        </Styled.SectionWrapper>
        <Styled.SectionWrapper>
          <Styled.SectionLabel>Nome: <Styled.SectionText>{ticket?.user?.name}</Styled.SectionText></Styled.SectionLabel>
        </Styled.SectionWrapper>
      </Styled.RightWrapper>
    </Styled.Container>
  );
};

export default ListedParticipant;
