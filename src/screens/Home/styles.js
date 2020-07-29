import styled from 'styled-components/native';
import Constants from 'expo-constants';

export const Container = styled.SafeAreaView`
  flex: 1;
  padding: ${Constants.statusBarHeight + 10}px 0 0;
  background: #000;
`;
export const Content = styled.ScrollView.attrs({
  contentContainerStyle: { paddingBottom: 16 },
})``;
export const Title = styled.Text`
  color: #fff;
`;
export const Header = styled.View`
  height: 50px;
  padding: 0 16px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const BalanceContainer = styled.View``;
export const BalanceTitle = styled.Text`
  color: #fff;
  font-size: 14px;
  text-align: center;
`;
export const Balance = styled.Text`
  color: #fff;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
`;
