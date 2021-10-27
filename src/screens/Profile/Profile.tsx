import React from 'react';
import { useDispatch } from 'react-redux';
import { useReduxState } from '../../hooks/useReduxState';
import * as AuthActions from '../../actions/auth';
import Footer from '../../components/Footer/Footer';
import * as Styled from './Profile.style';
import AppButton from '../../components/AppButton/AppButton';
import { colors } from '../../config/theme.json';

const Profile: React.FC = ({
  navigation,
}: any) => {
  const dispatch = useDispatch();
  const { auth } = useReduxState();

  const handleLogout = () => {
    dispatch(AuthActions.logout());
    navigation.navigate('Auth', { screen: 'Login' })
  };

  return (
    <Styled.Container>
      <Styled.ProfileElipse>
        <Styled.FaceImage
          resizeMode={'contain'}
          source={require('../../assets/face.png')}
        />
      </Styled.ProfileElipse>
      <Styled.NameLabel>{auth.me?.name}</Styled.NameLabel>
      <Styled.InfoLabel>Dados Pessoais</Styled.InfoLabel>
      <Styled.InfoWrapper height={0.15}>
        <Styled.InfoLine>
          <Styled.InfoLineText>Alterar nome</Styled.InfoLineText>
        </Styled.InfoLine>
        <Styled.InfoLine>
          <Styled.InfoLineText>Alterar email</Styled.InfoLineText>
        </Styled.InfoLine>
        <Styled.InfoLine>
          <Styled.InfoLineText>Alterar senha</Styled.InfoLineText>
        </Styled.InfoLine>
      </Styled.InfoWrapper>
      <Styled.InfoLabel>Formas de pagamento</Styled.InfoLabel>
      <Styled.InfoWrapper height={0.06}>
        <Styled.InfoLine>
          <Styled.InfoLineText>Alterar forma de pagamento</Styled.InfoLineText>
        </Styled.InfoLine>
      </Styled.InfoWrapper>
      <Styled.ButtonsGroup>
        <Styled.ButtonWrapper>
          <AppButton
            title={'Apagar Conta'}
            onPress={() => null}
            backgroundColor={colors.red} />
        </Styled.ButtonWrapper>
        <Styled.ButtonWrapper>
          <AppButton
            title={'Sair da Conta'}
            onPress={() => handleLogout()} />
        </Styled.ButtonWrapper>
      </Styled.ButtonsGroup>
      <Footer navigation={navigation} index={auth.me?.profileType === 1 ? 3 : 2} type={auth.me?.profileType} />
    </Styled.Container>
  );
};

export default Profile;
