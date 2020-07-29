import React from 'react';

import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
import {
  Container,
  Balance,
  BalanceContainer,
  BalanceTitle,
  Header,
  Content,
} from './styles';
import Suggestions from '~/Components/Suggestions';
import Activities from '~/Components/Activities';
import Tips from '~/Components/Tips';
import Banner from '~/Components/Banner';

const Home = () => {
  return (
    <Container>
      <Content>
        <Header>
          <MaterialCommunityIcons
            name="qrcode-scan"
            color="#10c86e"
            size={30}
          />
          <BalanceContainer>
            <BalanceTitle>Meu saldo</BalanceTitle>
            <Balance>R$ 0,00</Balance>
          </BalanceContainer>
          <AntDesign name="gift" color="#10c86e" size={30} />
        </Header>
        <Suggestions />
        <Activities />
        <Tips />
        <Banner />
      </Content>
    </Container>
  );
};

export default Home;
