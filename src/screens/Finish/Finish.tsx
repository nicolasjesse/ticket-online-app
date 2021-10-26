import React, { useState } from 'react';
import Footer from '../../components/Footer/Footer';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as Styled from './Finish.style';
import AppButton from '../../components/AppButton/AppButton';
import ListedEvent from '../../components/ListedEvent/ListedEvent';
import { colors } from '../../config/theme.json';

const event = { name: 'ECMAT', price: 4.99, date: '28/10', schedule: '18h', local: 'IFPB Cajazeiras', type: 2 }

const Finish: React.FC = ({
  navigation,
}: any) => {
  const [paymentOption, setPaymentOption] = useState(1);

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
        <ListedEvent event={event} />
      </Styled.TicketsWrapper>
      <Styled.TotalTextWrapper>
        <Styled.TotalText>Total</Styled.TotalText>
        <Styled.TotalText>R$ {event.price}</Styled.TotalText>
      </Styled.TotalTextWrapper>
      <Styled.ButtonWrapper>
        <AppButton
          title={'Efetuar Compra'}
          onPress={() => navigation.navigate('Main', { screen: 'Inventory' })}
        />
      </Styled.ButtonWrapper>
      <Footer navigation={navigation} index={1} type={1} />
    </Styled.Container>
  );
};

export default Finish;
