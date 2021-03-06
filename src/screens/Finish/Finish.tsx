import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useReduxState } from '../../hooks/useReduxState';
import * as TicketActions from '../../actions/ticket';
import Footer from '../../components/Footer/Footer';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as Styled from './Finish.style';
import AppButton from '../../components/AppButton/AppButton';
import ListedEvent from '../../components/ListedEvent/ListedEvent';
import { colors } from '../../config/theme.json';

const Finish: React.FC = ({
  navigation,
}: any) => {
  const dispatch = useDispatch();
  const { event, auth } = useReduxState();

  const [paymentOption, setPaymentOption] = useState(1);

  const handleClickBuy = () => {
    dispatch(TicketActions.create({
      paymentStatus: event.detail.price > 0 ? 1 : 2,
      eventId: event.detail.id!,
      userId: auth.me.id!
    }))
    navigation.navigate('Main', { screen: 'Inventory' });
  };

  return (
    <Styled.Container>
      <Styled.OptionsWrapper>
        <Styled.OptionItem>
          <Styled.OptionItemLabel>Forma de pagamento</Styled.OptionItemLabel>
          <Styled.OptionItemButton>
            {paymentOption === 1 ?
              <Icon name="credit-card" size={20} color={colors.white} /> :
              <Icon name="barcode" size={20} color={colors.white} />}
            <Styled.OptionItemButtonLabel>{paymentOption === 1 ? 'Cartão de crédito' : 'Boleto'}</Styled.OptionItemButtonLabel>
            <Icon name="angle-right" size={20} color={colors.white} />
          </Styled.OptionItemButton>
        </Styled.OptionItem>
      </Styled.OptionsWrapper>
      <Styled.TicketsWrapper>
        <ListedEvent event={event.detail} />
      </Styled.TicketsWrapper>
      <Styled.TotalTextWrapper>
        <Styled.TotalText>Total</Styled.TotalText>
        <Styled.TotalText>R$ {event.detail.price.toFixed(2).replace('.', ',')}</Styled.TotalText>
      </Styled.TotalTextWrapper>
      <Styled.ButtonWrapper>
        <AppButton
          title={'Efetuar Compra'}
          onPress={() => handleClickBuy()}
        />
      </Styled.ButtonWrapper>
      <Footer navigation={navigation} index={1} type={1} />
    </Styled.Container>
  );
};

export default Finish;
