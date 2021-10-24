import React, { useState } from 'react';
import AppInput from '../../components/AppInput/AppInput';
import AppButton from '../../components/AppButton/AppButton';
import { Picker } from '@react-native-picker/picker';
import { Dimensions } from 'react-native';

import * as S from './Register.style';

const Register: React.FC = ({
  navigation,
}: any) => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState(1)

  const handleRegister = () => {
    navigation.push('Auth', { screen: 'Login' })
  };

  return (
    <S.Container>
      <S.TitleWrapper>
        <S.Rectangle />
        <S.Title>Cadastro</S.Title>
      </S.TitleWrapper>
      <S.Form>
        <S.PickerWrapper>
          <Picker
            selectedValue={userType}
            style={{ flex: 1 }}
            onValueChange={(itemValue: any, itemIndex: any) => setUserType(itemValue)}
          >
            <Picker.Item label="Consumidor" value={1} />
            <Picker.Item label="Organização" value={2} />
          </Picker>
        </S.PickerWrapper>
        <AppInput placeholder="Insira o nome" value={name} onChange={(e) => setName(e)} />
        <AppInput placeholder="Insira o email" value={email} onChange={(e) => setEmail(e)} />
        <AppInput placeholder="Insira a senha" value={password} onChange={(e) => setPassword(e)} />
        <AppInput placeholder="Confirme a senha" value={password} onChange={(e) => setPassword(e)} />
      </S.Form>
      <S.SubmitButtonWrapper>
        <AppButton title={'Concluir Cadastro'} onPress={handleRegister} />
      </S.SubmitButtonWrapper>
      <S.TermsView>
        <S.TermsText>Ao criar uma conta, você concorda com nossos termos de uso. Já tem uma conta?
          <S.TermsLinkText onPress={() => navigation.push('Auth', { screen: 'Login' })}> Entre aqui</S.TermsLinkText>
        </S.TermsText>
      </S.TermsView>
    </S.Container>
  );
};

export default Register;
