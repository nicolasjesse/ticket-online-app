import React from 'react';
import Footer from '../../components/Footer/Footer';
import * as Styled from './Profile.style';
import AppButton from '../../components/AppButton/AppButton';
import { colors } from '../../config/theme.json';

const user = { name: 'Nícolas Jessé' }

const Profile: React.FC = ({
  navigation,
}: any) => {

  return (
    <Styled.Container>
      <Styled.ProfileElipse>
        <Styled.FaceImage
          resizeMode={'contain'}
          source={require('../../assets/face.png')}
        />
      </Styled.ProfileElipse>
      <Styled.NameLabel>{user.name}</Styled.NameLabel>
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
            onPress={() => null} />
        </Styled.ButtonWrapper>
      </Styled.ButtonsGroup>
      <Footer navigation={navigation} index={3} type={1} />
    </Styled.Container>
  );
};

export default Profile;
