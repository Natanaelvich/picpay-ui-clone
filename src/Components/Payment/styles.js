import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  width: ${props => (props.focused ? '65' : '60')}px;
  height: ${props => (props.focused ? '65' : '60')}px;
  border-radius: ${props => (props.focused ? '33' : '30')}px;
  align-items: center;
  justify-content: center;
  background: #00ac4f;
`;
