import React from 'react';
import Footer from '../../components/Footer/Footer';
import * as S from './Profile.style';
import AppButton from '../../components/AppButton/AppButton';
import { colors } from '../../config/theme.json';

const user = { name: 'Nícolas Jessé' }

const Profile: React.FC = ({
  navigation,
}: any) => {

  return (
    <S.Container>
      <S.ProfileElipse>
        <S.FaceImage
          resizeMode={'contain'}
          source={require('../../assets/face.png')}
        />
      </S.ProfileElipse>
      <S.NameLabel>{user.name}</S.NameLabel>
      <S.InfoLabel>Dados Pessoais</S.InfoLabel>
      <S.InfoWrapper height={0.15}>
        <S.InfoLine>
          <S.InfoLineText>Alterar nome</S.InfoLineText>
        </S.InfoLine>
        <S.InfoLine>
          <S.InfoLineText>Alterar email</S.InfoLineText>
        </S.InfoLine>
        <S.InfoLine>
          <S.InfoLineText>Alterar senha</S.InfoLineText>
        </S.InfoLine>
      </S.InfoWrapper>
      <S.InfoLabel>Formas de pagamento</S.InfoLabel>
      <S.InfoWrapper height={0.06}>
        <S.InfoLine>
          <S.InfoLineText>Alterar forma de pagamento</S.InfoLineText>
        </S.InfoLine>
      </S.InfoWrapper>
      <S.ButtonsGroup>
        <S.ButtonWrapper>
          <AppButton
            title={'Apagar Conta'}
            onPress={() => null}
            backgroundColor={colors.red} />
        </S.ButtonWrapper>
        <S.ButtonWrapper>
          <AppButton
            title={'Sair da Conta'}
            onPress={() => null} />
        </S.ButtonWrapper>
      </S.ButtonsGroup>
      <Footer navigation={navigation} index={3} type={1} />
    </S.Container>
  );
};

export default Profile;
