import React from 'react';
import Footer from '../../components/Footer/Footer';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as S from './TicketDetail.style';
import { colors } from '../../config/theme.json';

const ticket = { id: '37724582129', name: 'ECMAT', price: 0, date: '28/10', schedule: '18h', local: 'IFPB Cajazeiras', type: 1, status: 2, url: 'www.google.com' }

const TicketDetail: React.FC = ({
  navigation,
}: any) => {

  return (
    <S.Container>
      <S.TitleWrapper>
        <S.Title>{ticket.name} ({ticket.type === 1 ? 'Presencial' : 'Online'})</S.Title>
      </S.TitleWrapper>
      <S.MainInfoWrapper>
        <S.IdLabel>ID: {ticket.id}</S.IdLabel>
        <S.StatusLabel>
          Status: <S.StatusValue status={ticket.status}>
            {ticket.status === 1 ? 'Aguardando Pagamento' : (ticket.status === 2 ? 'Aprovado' : 'Recusado')}
          </S.StatusValue>
        </S.StatusLabel>
        {ticket.status === 2 && ticket.type === 1 ? <S.QRCImage
          resizeMode={'contain'}
          source={require('../../assets/qrcode.webp')}
        /> : <></>}
      </S.MainInfoWrapper>
      <S.InfoWrapper>
        <S.InfoItem>
          <S.InfoItemIconWrapper>
            <Icon name="dollar" size={20} color={colors.black} />
          </S.InfoItemIconWrapper>
          <S.InfoItemText>{ticket.price <= 0 ? 'Gratuito' : `R$ ${ticket.price}`}</S.InfoItemText>
        </S.InfoItem>
        <S.InfoItem>
          <S.InfoItemIconWrapper>
            <Icon name="calendar" size={20} color={colors.black} />
          </S.InfoItemIconWrapper>
          <S.InfoItemText>{ticket.date}, {ticket.schedule}</S.InfoItemText>
        </S.InfoItem>
        {ticket.type === 1 ? <>
          <S.InfoItem>
            <S.InfoItemIconWrapper>
              <Icon name="map-marker" size={20} color={colors.black} />
            </S.InfoItemIconWrapper>
            <S.InfoItemText>{ticket.local}</S.InfoItemText>
          </S.InfoItem>
        </> : <>
          <S.InfoItem>
            <S.InfoItemIconWrapper>
              <Icon name="link" size={20} color={colors.black} />
            </S.InfoItemIconWrapper>
            <S.InfoItemText>
              {ticket.status === 1 ? 'O link será disponibilizado quando o pagamento for aprovado.' :
                (ticket.status === 2 ? ticket.url : 'Você não pode acessar o link devido o pagamento ter sido recusado.')}
            </S.InfoItemText>
          </S.InfoItem>
        </>}
      </S.InfoWrapper>
      <Footer navigation={navigation} index={2} type={1} />
    </S.Container>
  );
};

export default TicketDetail;
