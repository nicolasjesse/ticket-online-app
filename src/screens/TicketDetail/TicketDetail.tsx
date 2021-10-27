import React from 'react';
import { useDispatch } from 'react-redux';
import { useReduxState } from '../../hooks/useReduxState';
import * as TicketActions from '../../actions/ticket';
import Footer from '../../components/Footer/Footer';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as Styled from './TicketDetail.style';
import { colors } from '../../config/theme.json';

const TicketDetail: React.FC = ({
  navigation,
}: any) => {
  const { ticket } = useReduxState();

  return (
    <Styled.Container>
      <Styled.TitleWrapper>
        <Styled.Title>{ticket.detail.event?.name} ({ticket.detail.event?.eventType === 1 ? 'Presencial' : 'Online'})</Styled.Title>
      </Styled.TitleWrapper>
      <Styled.MainInfoWrapper>
        <Styled.IdLabel>ID: {ticket.detail.id}</Styled.IdLabel>
        <Styled.StatusLabel>
          Status: <Styled.StatusValue status={ticket.detail.paymentStatus}>
            {ticket.detail.paymentStatus === 1 ? 'Aguardando Pagamento' : (ticket.detail.paymentStatus === 2 ? 'Aprovado' : 'Recusado')}
          </Styled.StatusValue>
        </Styled.StatusLabel>
        {ticket.detail.paymentStatus === 2 && ticket.detail.event?.eventType === 1 ? <Styled.QRCImage
          resizeMode={'contain'}
          source={require('../../assets/qrcode.webp')}
        /> : <></>}
      </Styled.MainInfoWrapper>
      <Styled.InfoWrapper>
        <Styled.InfoItem>
          <Styled.InfoItemIconWrapper>
            <Icon name="dollar" size={20} color={colors.black} />
          </Styled.InfoItemIconWrapper>
          <Styled.InfoItemText>{ticket.detail.event!.price <= 0 ? 'Gratuito' : `R$ ${ticket.detail.event?.price}`}</Styled.InfoItemText>
        </Styled.InfoItem>
        <Styled.InfoItem>
          <Styled.InfoItemIconWrapper>
            <Icon name="calendar" size={20} color={colors.black} />
          </Styled.InfoItemIconWrapper>
          <Styled.InfoItemText>{ticket.detail.event?.date}, {ticket.detail.event?.schedule}</Styled.InfoItemText>
        </Styled.InfoItem>
        {ticket.detail.event?.eventType === 1 ? <>
          <Styled.InfoItem>
            <Styled.InfoItemIconWrapper>
              <Icon name="map-marker" size={20} color={colors.black} />
            </Styled.InfoItemIconWrapper>
            <Styled.InfoItemText>{ticket.detail.event?.local}</Styled.InfoItemText>
          </Styled.InfoItem>
        </> : <>
          <Styled.InfoItem>
            <Styled.InfoItemIconWrapper>
              <Icon name="link" size={20} color={colors.black} />
            </Styled.InfoItemIconWrapper>
            <Styled.InfoItemText>
              {ticket.detail.paymentStatus === 1 ? 'O link será disponibilizado quando o pagamento for aprovado.' :
                (ticket.detail.paymentStatus === 2 ? ticket.detail.event?.local : 'Você não pode acessar o link devido o pagamento ter sido recusado.')}
            </Styled.InfoItemText>
          </Styled.InfoItem>
        </>}
      </Styled.InfoWrapper>
      <Footer navigation={navigation} index={2} type={1} />
    </Styled.Container>
  );
};

export default TicketDetail;
