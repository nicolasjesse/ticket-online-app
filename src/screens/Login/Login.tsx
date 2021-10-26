import React, { useState } from 'react';
import AppInput from '../../components/AppInput/AppInput';
import AppButton from '../../components/AppButton/AppButton';
import { colors } from '../../config/theme.json';
import * as S from './Login.style';

const Login: React.FC = ({
  navigation,
}: any) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [visiblePassword, setVisiblePassword] = useState(false);

  const handleLogin = () => {
    navigation.navigate('Main', { screen: 'Catalog' });
  };

  return (
    <S.Container>
      <S.TitleWrapper>
        <S.Rectangle />
        <S.Title>Login</S.Title>
      </S.TitleWrapper>
      <S.Form>
        <AppInput placeholder="Insira o email" value={email} onChange={(e) => setEmail(e)} />
        <AppInput
          placeholder="Insira a senha"
          value={password}
          onChange={(e) => setPassword(e)}
          secureTextEntry={!visiblePassword}
          password
          onEyeClick={() => setVisiblePassword(!visiblePassword)} />
      </S.Form>
      <S.EnterButtonWrapper>
        <AppButton title={'Entrar'} onPress={handleLogin} />
      </S.EnterButtonWrapper>
      <S.ForgetPasswordWrapper>
        <AppButton
          title={'Esqueceu a senha?'}
          onPress={() => { }}
          backgroundColor={'transparent'}
          color={colors.primary} />
      </S.ForgetPasswordWrapper>
      <S.NoAccountWrapper>
        <AppButton
          title={'Não tenho conta ainda'}
          onPress={() => navigation.navigate('Auth', { screen: 'Register' })}
          backgroundColor={'transparent'}
          color={colors.primary + 'CC'}
          bold={false}
          fontSize={14} />
      </S.NoAccountWrapper>
    </S.Container>
  );
};

export default Login;
