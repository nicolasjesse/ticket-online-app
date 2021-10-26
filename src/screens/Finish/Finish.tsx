import React, { useState } from 'react';
import Footer from '../../components/Footer/Footer';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as S from './Finish.style';
import AppButton from '../../components/AppButton/AppButton';
import ListedEvent from '../../components/ListedEvent/ListedEvent';
import { colors } from '../../config/theme.json';

const event = { name: 'ECMAT', price: 4.99, date: '28/10', schedule: '18h', local: 'IFPB Cajazeiras', type: 2 }

const Finish: React.FC = ({
  navigation,
}: any) => {
  const [paymentOption, setPaymentOption] = useState(1);

  return (
    <S.Container>
      <S.OptionsWrapper>
        <S.OptionItem>
          <S.OptionItemLabel>Forma de pagamento</S.OptionItemLabel>
          <S.OptionItemButton>
            {paymentOption === 1 ?
              <Icon name="credit-card" size={20} color={colors.white} /> :
              <Icon name="barcode" size={20} color={colors.white} />}
            <S.OptionItemButtonLabel>{paymentOption === 1 ? 'Cartão de crédito' : 'Boleto'}</S.OptionItemButtonLabel>
            <Icon name="angle-right" size={20} color={colors.white} />
          </S.OptionItemButton>
        </S.OptionItem>
      </S.OptionsWrapper>
      <S.TicketsWrapper>
        <ListedEvent event={event} />
      </S.TicketsWrapper>
      <S.TotalTextWrapper>
        <S.TotalText>Total</S.TotalText>
        <S.TotalText>R$ {event.price}</S.TotalText>
      </S.TotalTextWrapper>
      <S.ButtonWrapper>
        <AppButton
          title={'Efetuar Compra'}
          onPress={() => navigation.navigate('Main', { screen: 'Inventory' })}
        />
      </S.ButtonWrapper>
      <Footer navigation={navigation} index={1} type={1} />
    </S.Container>
  );
};

export default Finish;
