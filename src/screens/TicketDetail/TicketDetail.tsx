import React from 'react';
import Footer from '../../components/Footer/Footer';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as Styled from './TicketDetail.style';
import { colors } from '../../config/theme.json';

const ticket = { id: '37724582129', name: 'ECMAT', price: 0, date: '28/10', schedule: '18h', local: 'IFPB Cajazeiras', type: 1, status: 2, url: 'www.google.com' }

const TicketDetail: React.FC = ({
  navigation,
}: any) => {

  return (
    <Styled.Container>
      <Styled.TitleWrapper>
        <Styled.Title>{ticket.name} ({ticket.type === 1 ? 'Presencial' : 'Online'})</Styled.Title>
      </Styled.TitleWrapper>
      <Styled.MainInfoWrapper>
        <Styled.IdLabel>ID: {ticket.id}</Styled.IdLabel>
        <Styled.StatusLabel>
          Status: <Styled.StatusValue status={ticket.status}>
            {ticket.status === 1 ? 'Aguardando Pagamento' : (ticket.status === 2 ? 'Aprovado' : 'Recusado')}
          </Styled.StatusValue>
        </Styled.StatusLabel>
        {ticket.status === 2 && ticket.type === 1 ? <Styled.QRCImage
          resizeMode={'contain'}
          source={require('../../assets/qrcode.webp')}
        /> : <></>}
      </Styled.MainInfoWrapper>
      <Styled.InfoWrapper>
        <Styled.InfoItem>
          <Styled.InfoItemIconWrapper>
            <Icon name="dollar" size={20} color={colors.black} />
          </Styled.InfoItemIconWrapper>
          <Styled.InfoItemText>{ticket.price <= 0 ? 'Gratuito' : `R$ ${ticket.price}`}</Styled.InfoItemText>
        </Styled.InfoItem>
        <Styled.InfoItem>
          <Styled.InfoItemIconWrapper>
            <Icon name="calendar" size={20} color={colors.black} />
          </Styled.InfoItemIconWrapper>
          <Styled.InfoItemText>{ticket.date}, {ticket.schedule}</Styled.InfoItemText>
        </Styled.InfoItem>
        {ticket.type === 1 ? <>
          <Styled.InfoItem>
            <Styled.InfoItemIconWrapper>
              <Icon name="map-marker" size={20} color={colors.black} />
            </Styled.InfoItemIconWrapper>
            <Styled.InfoItemText>{ticket.local}</Styled.InfoItemText>
          </Styled.InfoItem>
        </> : <>
          <Styled.InfoItem>
            <Styled.InfoItemIconWrapper>
              <Icon name="link" size={20} color={colors.black} />
            </Styled.InfoItemIconWrapper>
            <Styled.InfoItemText>
              {ticket.status === 1 ? 'O link será disponibilizado quando o pagamento for aprovado.' :
                (ticket.status === 2 ? ticket.url : 'Você não pode acessar o link devido o pagamento ter sido recusado.')}
            </Styled.InfoItemText>
          </Styled.InfoItem>
        </>}
      </Styled.InfoWrapper>
      <Footer navigation={navigation} index={2} type={1} />
    </Styled.Container>
  );
};

export default TicketDetail;
