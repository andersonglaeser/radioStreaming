import styled from 'styled-components/native';

export const Container = styled.View`
  align-items: flex-start;
  height: 45;
  width: 90%;
  flex-direction: row;
  justify-content: flex-start;
`;

export const Button = styled.TouchableOpacity`
  align-items: flex-start;
  height: 45;
  margin-right: 10;
  padding-top: 10;
`;

export const MenuImg = styled.Image`
  width: 25;
  height: 25;
  resize-mode: contain;
`;

export const Text = styled.Text`
  color: #2e5775;
  font-size: 20;
  margin-top: 10;
`;