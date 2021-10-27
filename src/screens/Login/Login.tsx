import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useReduxState } from '../../hooks/useReduxState';
import * as AuthActions from '../../actions/auth';
import AppInput from '../../components/AppInput/AppInput';
import AppButton from '../../components/AppButton/AppButton';
import { colors } from '../../config/theme.json';
import * as Styled from './Login.style';

const Login: React.FC = ({
  navigation,
}: any) => {
  const dispatch = useDispatch();
  const { auth } = useReduxState();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  const handleLogin = () => {
    if (email && password) {
      dispatch(AuthActions.authenticate({ email, password }));
    }
  };

  useEffect(() => {
    if (auth.me.profileType === 1) {
      navigation.navigate('Main', { screen: 'Catalog' })
    } else if (auth.me.profileType === 2) {
      navigation.navigate('Main', { screen: 'MyEvents' })
    }
  }, [auth.me])

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
          secureTextEntry={!isVisible}
          password
          onEyeClick={() => setIsVisible(!isVisible)} />
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
