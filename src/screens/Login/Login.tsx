import React, { useState } from 'react';
import AppInput from '../../components/AppInput/AppInput';
import AppButton from '../../components/AppButton/AppButton';
import { colors } from '../../config/theme.json';
import * as Styled from './Login.style';

const Login: React.FC = ({
  navigation,
}: any) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [visiblePassword, setVisiblePassword] = useState(false);

  const handleLogin = () => {
      navigation.navigate('Main', { screen: 'MyEvents' });
  };

  return (
    <Styled.Container>
      <Styled.TitleWrapper>
        <Styled.Rectangle />
        <Styled.Title>Login</Styled.Title>
      </Styled.TitleWrapper>
      <Styled.Form>
        <AppInput placeholder="Insira o email" value={email} onChange={(e) => setEmail(e)} />
        <AppInput
          placeholder="Insira a senha"
          value={password}
          onChange={(e) => setPassword(e)}
          secureTextEntry={!visiblePassword}
          password
          onEyeClick={() => setVisiblePassword(!visiblePassword)} />
      </Styled.Form>
      <Styled.EnterButtonWrapper>
        <AppButton title={'Entrar'} onPress={handleLogin} />
      </Styled.EnterButtonWrapper>
      <Styled.ForgetPasswordWrapper>
        <AppButton
          title={'Esqueceu a senha?'}
          onPress={() => { }}
          backgroundColor={'transparent'}
          color={colors.primary} />
      </Styled.ForgetPasswordWrapper>
      <Styled.NoAccountWrapper>
        <AppButton
          title={'Não tenho conta ainda'}
          onPress={() => navigation.navigate('Auth', { screen: 'Register' })}
          backgroundColor={'transparent'}
          color={colors.primary + 'CC'}
          bold={false}
          fontSize={14} />
      </Styled.NoAccountWrapper>
    </Styled.Container>
  );
};

export default Login;
