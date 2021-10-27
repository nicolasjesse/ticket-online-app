import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as AuthActions from '../../actions/auth';
import AppInput from '../../components/AppInput/AppInput';
import AppButton from '../../components/AppButton/AppButton';
import { Picker } from '@react-native-picker/picker';

import * as Styled from './Register.style';

const Register: React.FC = ({
  navigation,
}: any) => {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [profileType, setProfileType] = useState(1)

  const handleRegister = () => {
    if (password === password2) {
      dispatch(AuthActions.register({
        name,
        email,
        password,
        profileType,
      }))
      navigation.navigate('Auth', { screen: 'Login' })
    }
  };

  return (
    <Styled.Container>
      <Styled.TitleWrapper>
        <Styled.Rectangle />
        <Styled.Title>Cadastro</Styled.Title>
      </Styled.TitleWrapper>
      <Styled.Form>
        <Styled.PickerWrapper>
          <Picker
            selectedValue={profileType}
            style={{ flex: 1 }}
            onValueChange={(itemValue: any) => setProfileType(itemValue)}
          >
            <Picker.Item label="Consumidor" value={1} />
            <Picker.Item label="Organização" value={2} />
          </Picker>
        </Styled.PickerWrapper>
        <AppInput placeholder="Insira o nome" value={name} onChange={(e) => setName(e)} />
        <AppInput placeholder="Insira o email" value={email} onChange={(e) => setEmail(e)} />
        <AppInput placeholder="Insira a senha" value={password} onChange={(e) => setPassword(e)} secureTextEntry />
        <AppInput placeholder="Confirme a senha" value={password2} onChange={(e) => setPassword2(e)} secureTextEntry />
      </Styled.Form>
      <Styled.SubmitButtonWrapper>
        <AppButton title={'Concluir Cadastro'} onPress={() => handleRegister()} />
      </Styled.SubmitButtonWrapper>
      <Styled.TermsView>
        <Styled.TermsText>Ao criar uma conta, você concorda com nossos termos de uso. Já tem uma conta?
          <Styled.TermsLinkText onPress={() => navigation.navigate('Auth', { screen: 'Login' })}> Entre aqui</Styled.TermsLinkText>
        </Styled.TermsText>
      </Styled.TermsView>
    </Styled.Container>
  );
};

export default Register;
