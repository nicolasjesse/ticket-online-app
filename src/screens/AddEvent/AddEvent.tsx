import React, { useState } from 'react';
import AppInput from '../../components/AppInput/AppInput';
import AppButton from '../../components/AppButton/AppButton';
import Footer from '../../components/Footer/Footer';
import { Picker } from '@react-native-picker/picker';

import * as Styled from './AddEvent.style';

const AddEvent: React.FC = ({
  navigation,
}: any) => {

  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [schedule, setSchedule] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [local, setLocal] = useState('');
  const [eventType, seteventType] = useState(1)

  const handleRegister = () => {
    navigation.navigate('Main', { screen: 'MyEvents' })
  };

  return (
    <Styled.Container>
      <Styled.TitleWrapper>
        <Styled.Title>Cadastro de Evento</Styled.Title>
      </Styled.TitleWrapper>
      <Styled.Form>
        <Styled.PickerWrapper>
          <Picker
            selectedValue={eventType}
            style={{ flex: 1 }}
            onValueChange={(itemValue: any, itemIndex: any) => seteventType(itemValue)}
          >
            <Picker.Item label="Presencial" value={1} />
            <Picker.Item label="Online" value={2} />
          </Picker>
        </Styled.PickerWrapper>
        <AppInput placeholder="Insira o nome" value={name} onChange={(e) => setName(e)} />
        <Styled.InputWrapper>
          <AppInput placeholder="Data" value={date} onChange={(e) => setDate(e)} width={0.465} />
          <AppInput placeholder="Horário" value={schedule} onChange={(e) => setSchedule(e)} width={0.305} />
        </Styled.InputWrapper>
        <Styled.InputWrapper>
          <AppInput placeholder="Preço" value={price} onChange={(e) => setPrice(e)} width={0.385} />
          <AppInput placeholder="Qtd. Ingressos" value={quantity} onChange={(e) => setQuantity(e)} width={0.385} />
        </Styled.InputWrapper>
        {eventType === 1 ?
          <AppInput placeholder="Insira o Local" value={local} onChange={(e) => setLocal(e)} /> :
          <AppInput placeholder="Insira o Link" value={local} onChange={(e) => setLocal(e)} />}

      </Styled.Form>
      <Styled.SubmitButtonWrapper>
        <AppButton title={'Concluir Cadastro'} onPress={handleRegister} />
      </Styled.SubmitButtonWrapper>
      <Footer navigation={navigation} index={1} type={2} />
    </Styled.Container>
  );
};

export default AddEvent;
