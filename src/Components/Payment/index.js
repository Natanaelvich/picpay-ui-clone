import React from 'react';

import { MaterialIcons } from '@expo/vector-icons';
import { Container } from './styles';

const Payment = ({ onPress, focused }) => {
  return (
    <Container focused={focused} onPress={onPress}>
      <MaterialIcons name="attach-money" size={30} color="#fff" />
    </Container>
  );
};

export default Payment;
